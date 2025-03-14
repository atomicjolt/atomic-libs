import { PostMessageError, PostMessageErrorType } from "./error";
import {
  PostMessageCapabilitiesResponse,
  PostMessageCapability,
  PostMessageGetDataRequest,
  PostMessageGetDataResponse,
  PostMessagePutDataRequest,
  PostMessageRequest,
  PostMessageResponse,
} from "./types";

export interface PostMessageClientOptions {
  origin: string;
  targetFrame?: Window | string | null;
  timeout?: number;
}

const DEFAULT_OPTIONS: PostMessageClientOptions = {
  origin: "*",
  targetFrame: null,
  timeout: 2000,
};

/**
 * A client for sending and receiving messages via the postMessage API according the the LTI postMessage specification
 * https://www.imsglobal.org/spec/lti-cs-pm/v0p1#response-parameters
 */
export class PostMessageClient {
  defaultOptions: Partial<PostMessageClientOptions>;

  constructor(options?: Partial<PostMessageClientOptions>) {
    this.defaultOptions = { ...DEFAULT_OPTIONS, ...options };
  }

  /** Send a request to the LTI platform via the postMessage API and recieve back the platforms response
   * If the request times out, a PostMessageError with type Timeout will be thrown
   * If the platform returns an error, a PostMessageError with type ResponseError will be thrown
   */
  public async send<
    Request extends PostMessageRequest = PostMessageRequest,
    Response extends PostMessageResponse = PostMessageResponse<
      Request["subject"]
    >
  >(
    payload: Request,
    options: Partial<PostMessageClientOptions> = {}
  ): Promise<Response> {
    const allOptions = {
      ...this.defaultOptions,
      ...options,
    };

    const frame = await this.findTargetFrame(
      payload.subject,
      allOptions.targetFrame ?? null
    );

    return new Promise<Response>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new PostMessageError(PostMessageErrorType.Timeout, payload));
      }, allOptions.timeout);

      const receiveMessage = (event: MessageEvent<Response>) => {
        if (
          typeof event.data === "object" &&
          event.data.subject === `${payload.subject}.response` &&
          event.data.message_id === payload.message_id &&
          (event.origin === allOptions.origin ||
            (allOptions.origin === "*" && event.origin !== "null"))
        ) {
          window.removeEventListener("message", receiveMessage);
          clearTimeout(timeout);

          if (event.data.error) {
            reject(
              new PostMessageError(
                PostMessageErrorType.ResponseError,
                payload,
                event.data
              )
            );
          } else {
            resolve(event.data);
          }
        }
      };

      window.addEventListener("message", receiveMessage);

      frame.postMessage(payload, {
        targetOrigin: allOptions.origin,
      });
    });
  }

  /** Retrieve the list of message capabilities that the platform supports */
  public async getCapabilities(): Promise<PostMessageCapability[]> {
    const response = await this.send<
      PostMessageRequest,
      PostMessageCapabilitiesResponse
    >(
      { subject: "lti.capabilities", message_id: "lti-caps" },
      { origin: "*", targetFrame: window.parent ?? window.opener }
    );

    return response.supported_messages;
  }

  /** Gets the configuration for a capability if the platform supports it, null otherwise   */
  public async getCapability(
    capability: string
  ): Promise<PostMessageCapability | null> {
    const capabilities = await this.getCapabilities();
    return capabilities.find((c: any) => c.subject === capability) ?? null;
  }

  /** Generate a unique message id for a request */
  public messageId(subject: string, ...args: string[]): string {
    const random = Math.random().toString(36).substring(2);
    return `${subject}-${args.join("-")}-${random}`;
  }

  private async findTargetFrame(
    subject: string,
    target: Window | string | null
  ): Promise<Window> {
    if (typeof target !== "string" && target !== null) return target;

    if (target == null) {
      // The platform can provide all of the supported capabilities
      // so we need to check for the lti.get_data capability and that will
      // tell us the frame to talk to.
      const cap = await this.getCapability(subject);
      target = cap?.frame ?? "_parent";
    }

    const parent = window.parent || window.opener;

    if (target === "_parent") {
      return parent;
    } else {
      return parent.frames[target as any] || parent;
    }
  }
}
