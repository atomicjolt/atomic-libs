import { PostMessageRequest, PostMessageResponse } from "./types";

export class PostMessageError extends Error {
  constructor(
    public type: PostMessageErrorType,
    public payload?: PostMessageRequest,
    public response?: PostMessageResponse
  ) {
    super(`PostMessageError: ${type}`);
  }
}

export enum PostMessageErrorType {
  Timeout = "timeout",
  ResponseError = "response_error",
}
