import { PostMessageClient } from "./client";
import { PostMessageError } from "./error";
import {
  PostMessageGetDataRequest,
  PostMessageGetDataResponse,
  PostMessagePutDataRequest,
} from "./types";

/**
 * Class representing the LTI Platform Storage specification
 * https://www.imsglobal.org/spec/lti-pm-s/v0p1
 */
export class PlatformStorage {
  #client: PostMessageClient;

  constructor(client?: PostMessageClient) {
    this.#client = client ?? new PostMessageClient();
  }

  /**
   * Checks if the platform supports platform storage
   * @returns A promise that resolves to a boolean indicating if the platform supports the required capabilities.
   */
  async isSupported(): Promise<boolean> {
    const capabilities = await this.#client.getCapabilities();
    const dataCaps = capabilities.filter(
      (cap) => cap.subject === "lti.put_data" || cap.subject === "lti.get_data"
    );

    return dataCaps.length == 2;
  }

  /**
   * Retrieves a value from the storage.
   * @param key - The key of the value to retrieve.
   * @returns A promise that resolves to the retrieved value as a string or null if the key does not exist.
   */
  async get(key: string): Promise<string | null> {
    try {
      const response = await this.#client.send<
        PostMessageGetDataRequest,
        PostMessageGetDataResponse
      >({
        subject: "lti.get_data",
        message_id: this.#client.messageId("lti.get_data", key),
        key,
      });

      return response.value;
    } catch (error) {
      if (error instanceof PostMessageError) {
        if (error?.response?.error?.code === "key_not_found") {
          return null;
        }
      }

      throw error;
    }
  }

  /**
   * Sets a value in the storage.
   * @param key - The key of the value to set.
   * @param value - The value to set.
   * @returns A promise that resolves when the value has been set.
   */
  async set(key: string, value: any): Promise<void> {
    await this.#client.send<PostMessagePutDataRequest>({
      subject: "lti.put_data",
      message_id: this.#client.messageId("lti.put_data", key),
      key,
      value,
    });
  }

  /**
   * Removes a value from the storage.
   * @param key - The key of the value to remove.
   * @returns A promise that resolves when the value has been removed.
   */
  async remove(key: string): Promise<void> {
    await this.#client.send<PostMessagePutDataRequest>({
      subject: "lti.put_data",
      message_id: this.#client.messageId("lti.put_data", key),
      key,
      value: null,
    });
  }
}
