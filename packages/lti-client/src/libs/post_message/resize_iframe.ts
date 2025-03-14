import { PostMessageClient } from "./client";

export class ResizeIframe {
  #client: PostMessageClient;

  constructor(client?: PostMessageClient) {
    this.#client = client ?? new PostMessageClient();
  }

  async isSupported(): Promise<boolean> {
    const capabilities = await this.#client.getCapabilities();
    return capabilities.some((cap) => cap.subject === "lti.frameResize");
  }

  async resize(height: number): Promise<void> {
    await this.#client.send({
      subject: "lti.frameResize",
      height,
    });
  }
}
