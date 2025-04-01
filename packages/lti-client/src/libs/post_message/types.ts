export interface PostMessageRequest<Subject extends string = string> {
  subject: Subject;
  message_id?: string;
}

export interface PostMessageErrorResponse {
  code: string;
  message: string;
}

export interface PostMessageResponse<RequestSubject extends string = string> {
  subject: `${RequestSubject}.response`;
  message_id: string;
  error?: PostMessageErrorResponse;
}

export interface PostMessageCapability {
  subject: string;
  frame?: string;
}

export interface PostMessageCapabilitiesResponse
  extends PostMessageResponse<"lti.capabilities"> {
  supported_messages: PostMessageCapability[];
}

export interface PostMessagePutDataRequest
  extends PostMessageRequest<"lti.put_data"> {
  key: string;
  value: any;
}

export interface PostMessageGetDataRequest
  extends PostMessageRequest<"lti.get_data"> {
  key: string;
}

export interface PostMessageGetDataResponse
  extends PostMessageResponse<"lti.get_data"> {
  key: string;
  value: string;
}
