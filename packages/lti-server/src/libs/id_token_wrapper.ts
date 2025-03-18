import {
  IdToken,
  MESSAGE_TYPE,
  DEPLOYMENT_ID,
  LTI_VERSION,
  CONTEXT_CLAIM,
  RESOURCE_LINK_CLAIM,
  LIS_CLAIM,
  TOOL_PLATFORM_CLAIM,
  LAUNCH_PRESENTATION,
  AGS_CLAIM,
  DEEP_LINKING_CLAIM,
  DEEP_LINKING_DATA_CLAIM,
  CUSTOM_CLAIM,
  COURSE_CONTEXT,
  ACCOUNT_CONTEXT,
  ROLES_CLAIM,
  MessageTypes,
  ContextClaim,
  ResourceLinkClaim,
  LISClaim,
  ToolPlatformClaim,
  LaunchPresentationClaim,
  AGSClaim,
  DeepLinkingClaim,
  Roles
} from '@atomicjolt/lti-types';

export class LtiTokenWrapper {
  private token: IdToken;

  constructor(idToken: IdToken) {
    this.token = idToken;
  }

  /**
   * Get the deployment ID from the token
   */
  get deploymentId(): string {
    return this.token[DEPLOYMENT_ID];
  }

  /**
   * Get the issuer from the token
   */
  get iss(): string {
    return this.token.iss;
  }

  /**
   * Get the LTI version from the token
   */
  get version(): string {
    return this.token[LTI_VERSION];
  }

  /**
   * Get the client ID (audience) from the token
   */
  get clientId(): string {
    return this.token.aud;
  }

  /**
   * Get the context data from the token
   */
  get contextData(): ContextClaim {
    return this.token[CONTEXT_CLAIM] || {} as ContextClaim;
  }

  /**
   * Determine the launch context type (COURSE, ACCOUNT, or UNKNOWN)
   */
  get launchContext(): 'COURSE' | 'ACCOUNT' | 'UNKNOWN' {
    const contexts = this.contextData.type || [];

    if (contexts.includes(COURSE_CONTEXT)) {
      return 'COURSE';
    } else if (contexts.includes(ACCOUNT_CONTEXT)) {
      return 'ACCOUNT';
    } else {
      return 'UNKNOWN';
    }
  }

  /**
   * Get the context ID from the token
   */
  get contextId(): string {
    return this.contextData.id || '';
  }

  /**
   * Get the context label from the token
   */
  get contextLabel(): string | undefined {
    return this.contextData.label;
  }

  /**
   * Get the context title from the token
   */
  get contextTitle(): string | undefined {
    return this.contextData.title;
  }

  /**
   * Get the resource link data from the token
   */
  get resourceLinkData(): ResourceLinkClaim {
    return this.token[RESOURCE_LINK_CLAIM] || {} as ResourceLinkClaim;
  }

  /**
   * Get the resource link ID from the token
   */
  get resourceLinkId(): string {
    return this.resourceLinkData.id || '';
  }

  /**
   * Get the resource link title from the token
   */
  get resourceLinkTitle(): string | undefined {
    return this.resourceLinkData.title;
  }

  /**
   * Get the resource link description from the token
   */
  get resourceLinkDescription(): string | null | undefined {
    return this.resourceLinkData.description;
  }

  /**
   * Get the LIS data from the token
   */
  get lisData(): LISClaim {
    return this.token[LIS_CLAIM] || {} as LISClaim;
  }

  /**
   * Get the tool platform data from the token
   */
  get toolPlatformData(): ToolPlatformClaim {
    return this.token[TOOL_PLATFORM_CLAIM] || {} as ToolPlatformClaim;
  }

  /**
   * Get the product family code from the token
   */
  get productFamilyCode(): string | undefined {
    return this.toolPlatformData.product_family_code;
  }

  /**
   * Get the tool consumer instance GUID from the token
   */
  get toolConsumerInstanceGuid(): string {
    return this.toolPlatformData.guid || '';
  }

  /**
   * Get the tool consumer instance name from the token
   */
  get toolConsumerInstanceName(): string | undefined {
    return this.toolPlatformData.name;
  }

  /**
   * Get the tool consumer instance description from the token
   */
  get toolConsumerInstanceDescription(): string | undefined {
    return this.toolPlatformData.description;
  }

  /**
   * Get the tool consumer instance URL from the token
   */
  get toolConsumerInstanceUrl(): string | undefined {
    return this.toolPlatformData.url;
  }

  /**
   * Get the launch presentation data from the token
   */
  get launchPresentationData(): LaunchPresentationClaim {
    return this.token[LAUNCH_PRESENTATION] || {} as LaunchPresentationClaim;
  }

  /**
   * Get the launch locale from the token
   */
  get launchLocale(): string {
    return this.launchPresentationData.locale || '';
  }

  /**
   * Get the return URL from the token
   */
  get returnUrl(): string | undefined {
    return this.launchPresentationData.return_url;
  }

  /**
   * Get the document target from the token
   */
  get documentTarget(): string | undefined {
    return this.launchPresentationData.document_target;
  }

  /**
   * Get the dimensions from the token
   */
  get dimensions(): { height?: number, width?: number } {
    const data = this.launchPresentationData;
    return {
      height: data.height,
      width: data.width
    };
  }

  /**
   * Get the AGS (Assignment and Grade Services) data from the token
   */
  get agsData(): AGSClaim {
    return this.token[AGS_CLAIM] || {} as AGSClaim;
  }

  /**
   * Check if the token has AGS capabilities
   */
  get hasAgsCapability(): boolean {
    return !!this.token[AGS_CLAIM];
  }

  /**
   * Get the AGS line items URL from the token
   */
  get lineItemsUrl(): string | undefined {
    return this.agsData.lineitems;
  }

  /**
   * Get the AGS line item URL from the token
   */
  get lineItemUrl(): string | undefined {
    return this.agsData.lineitem;
  }

  /**
   * Get the AGS scopes from the token
   */
  get agsScopes(): string[] {
    return this.agsData.scope || [];
  }

  /**
   * Get the deep linking data from the token
   *
   * This is an opaque value that must be returned to the platform when the tool completes
   * its deep linking response. The platform may use this to maintain state between the
   * initial launch and the return deep linking content selection.
   */
  get deepLinkingData(): string | undefined {
    return this.token[DEEP_LINKING_DATA_CLAIM] as string | undefined;
  }

  /**
   * Get the deep linking settings from the token
   */
  get deepLinkingClaim(): DeepLinkingClaim | undefined {
    return this.token[DEEP_LINKING_CLAIM];
  }

  /**
   * Get the message type from the token
   */
  get messageType(): MessageTypes {
    return this.token[MESSAGE_TYPE];
  }

  /**
   * Check if this is a deep linking launch
   */
  get isDeepLink(): boolean {
    return this.messageType === MessageTypes.LtiDeepLinkingRequest;
  }

  /**
   * Get the custom data from the token, filtering out Canvas variables that start with $Canvas
   */
  get customData(): Record<string, any> {
    const customClaim = this.token[CUSTOM_CLAIM] as Record<string, any> || {};

    // Filter out Canvas variables that start with $Canvas
    return Object.entries(customClaim)
      .filter(([_, value]) => typeof value === 'string' && !value.toString().startsWith('$Canvas'))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }

  /**
   * Get all raw custom data from the token without filtering
   */
  get allCustomData(): Record<string, any> {
    return this.token[CUSTOM_CLAIM] as Record<string, any> || {};
  }

  /**
   * Get the Canvas course ID from the token
   */
  get canvasCourseId(): string | undefined {
    return this.getCustomParameter('canvas_course_id');
  }

  /**
   * Get the Canvas section IDs from the token
   */
  get canvasSectionIds(): string | undefined {
    return this.getCustomParameter('canvas_section_ids');
  }

  /**
   * Get the Canvas account ID from the token
   */
  get canvasAccountId(): string | undefined {
    return this.getCustomParameter('canvas_account_id');
  }

  /**
   * Get the Canvas course name from the token
   */
  get canvasCourseName(): string | undefined {
    return this.getCustomParameter('canvas_course_name');
  }

  /**
   * Get the Canvas assignment ID from the token
   */
  get canvasAssignmentId(): string | undefined {
    return this.getCustomParameter('canvas_assignment_id');
  }

  /**
   * Get user information from the token
   */
  get userInfo(): {
    sub: string;
    email?: string;
    name?: string;
    givenName?: string;
    familyName?: string;
    middleName?: string;
    picture?: string;
    locale?: string;
  } {
    return {
      sub: this.token.sub,
      email: this.token.email,
      name: this.token.name,
      givenName: this.token.given_name,
      familyName: this.token.family_name,
      middleName: this.token.middle_name,
      picture: this.token.picture,
      locale: this.token.locale
    };
  }

  /**
   * Get the roles from the token
   */
  get roles(): Array<Roles> {
    return this.token[ROLES_CLAIM] || [];
  }

  /**
   * Check if the user has a specific role
   */
  public hasRole(role: Roles): boolean {
    return this.roles.includes(role);
  }

  /**
   * Check if the user has any of the specified roles
   */
  public hasAnyRole(roles: Roles[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  /**
   * Check if the user is an instructor
   */
  get isInstructor(): boolean {
    return this.hasRole(Roles.InstructorContextRole) ||
      this.hasRole(Roles.InstructorInstitutionRole);
  }

  /**
   * Check if the user is a student
   */
  get isStudent(): boolean {
    return this.hasRole(Roles.LearnerContextRole) ||
      this.hasRole(Roles.StudentInstitutionRole);
  }

  /**
   * Get the raw token
   */
  get rawToken(): IdToken {
    return this.token;
  }

  /**
   * Get a specific custom parameter from the token
   */
  public getCustomParameter(key: string): any {
    return this.allCustomData[key];
  }
}