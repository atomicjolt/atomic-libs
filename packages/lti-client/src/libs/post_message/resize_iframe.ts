import { PostMessageClientWrapper } from "./client";

export class ResizeIframe extends PostMessageClientWrapper {
  async isSupported(): Promise<boolean> {
    const capabilities = await this.client.getCapabilities();
    return capabilities.some((cap) => cap.subject === "lti.frameResize");
  }

  async resize(height: number): Promise<void> {
    await this.client.send({
      subject: "lti.frameResize",
      height,
    });
  }
}
