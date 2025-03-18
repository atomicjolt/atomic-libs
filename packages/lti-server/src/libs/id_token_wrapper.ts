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
  public deploymentId(): string {
    return this.token[DEPLOYMENT_ID];
  }

  /**
   * Get the issuer from the token
   */
  public iss(): string {
    return this.token.iss;
  }

  /**
   * Get the LTI version from the token
   */
  public version(): string {
    return this.token[LTI_VERSION];
  }

  /**
   * Get the client ID (audience) from the token
   */
  public clientId(): string {
    return this.token.aud;
  }

  /**
   * Get the context data from the token
   */
  public contextData(): ContextClaim {
    return this.token[CONTEXT_CLAIM] || {} as ContextClaim;
  }

  /**
   * Determine the launch context type (COURSE, ACCOUNT, or UNKNOWN)
   */
  public launchContext(): 'COURSE' | 'ACCOUNT' | 'UNKNOWN' {
    const contexts = this.contextData().type || [];

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
  public contextId(): string {
    return this.contextData().id || '';
  }

  /**
   * Get the context label from the token
   */
  public contextLabel(): string | undefined {
    return this.contextData().label;
  }

  /**
   * Get the context title from the token
   */
  public contextTitle(): string | undefined {
    return this.contextData().title;
  }

  /**
   * Get the resource link data from the token
   */
  public resourceLinkData(): ResourceLinkClaim {
    return this.token[RESOURCE_LINK_CLAIM] || {} as ResourceLinkClaim;
  }

  /**
   * Get the resource link ID from the token
   */
  public resourceLinkId(): string {
    return this.resourceLinkData().id || '';
  }

  /**
   * Get the resource link title from the token
   */
  public resourceLinkTitle(): string | undefined {
    return this.resourceLinkData().title;
  }

  /**
   * Get the resource link description from the token
   */
  public resourceLinkDescription(): string | null | undefined {
    return this.resourceLinkData().description;
  }

  /**
   * Get the LIS data from the token
   */
  public lisData(): LISClaim {
    return this.token[LIS_CLAIM] || {} as LISClaim;
  }

  /**
   * Get the tool platform data from the token
   */
  public toolPlatformData(): ToolPlatformClaim {
    return this.token[TOOL_PLATFORM_CLAIM] || {} as ToolPlatformClaim;
  }

  /**
   * Get the product family code from the token
   */
  public productFamilyCode(): string | undefined {
    return this.toolPlatformData().product_family_code;
  }

  /**
   * Get the tool consumer instance GUID from the token
   */
  public toolConsumerInstanceGuid(): string {
    return this.toolPlatformData().guid || '';
  }

  /**
   * Get the tool consumer instance name from the token
   */
  public toolConsumerInstanceName(): string | undefined {
    return this.toolPlatformData().name;
  }

  /**
   * Get the tool consumer instance description from the token
   */
  public toolConsumerInstanceDescription(): string | undefined {
    return this.toolPlatformData().description;
  }

  /**
   * Get the tool consumer instance URL from the token
   */
  public toolConsumerInstanceUrl(): string | undefined {
    return this.toolPlatformData().url;
  }

  /**
   * Get the launch presentation data from the token
   */
  public launchPresentationData(): LaunchPresentationClaim {
    return this.token[LAUNCH_PRESENTATION] || {} as LaunchPresentationClaim;
  }

  /**
   * Get the launch locale from the token
   */
  public launchLocale(): string {
    return this.launchPresentationData().locale || '';
  }

  /**
   * Get the return URL from the token
   */
  public returnUrl(): string | undefined {
    return this.launchPresentationData().return_url;
  }

  /**
   * Get the document target from the token
   */
  public documentTarget(): string | undefined {
    return this.launchPresentationData().document_target;
  }

  /**
   * Get the dimensions from the token
   */
  public dimensions(): { height?: number, width?: number } {
    const data = this.launchPresentationData();
    return {
      height: data.height,
      width: data.width
    };
  }

  /**
   * Get the AGS (Assignment and Grade Services) data from the token
   */
  public agsData(): AGSClaim {
    return this.token[AGS_CLAIM] || {} as AGSClaim;
  }

  /**
   * Check if the token has AGS capabilities
   */
  public hasAgsCapability(): boolean {
    return !!this.token[AGS_CLAIM];
  }

  /**
   * Get the AGS line items URL from the token
   */
  public lineItemsUrl(): string | undefined {
    return this.agsData().lineitems;
  }

  /**
   * Get the AGS line item URL from the token
   */
  public lineItemUrl(): string | undefined {
    return this.agsData().lineitem;
  }

  /**
   * Get the AGS scopes from the token
   */
  public agsScopes(): string[] {
    return this.agsData().scope || [];
  }

  /**
   * Get the deep linking data from the token
   *
   * This is an opaque value that must be returned to the platform when the tool completes
   * its deep linking response. The platform may use this to maintain state between the
   * initial launch and the return deep linking content selection.
   */
  public deepLinkingDataClaim(): string | undefined {
    return this.token[DEEP_LINKING_DATA_CLAIM] as string | undefined;
  }

  /**
   * Get the deep linking settings from the token
   */
  public deepLinkingClaim(): DeepLinkingClaim | undefined {
    return this.token[DEEP_LINKING_CLAIM];
  }

  /**
   * Get the message type from the token
   */
  public messageType(): MessageTypes {
    return this.token[MESSAGE_TYPE];
  }

  /**
   * Check if this is a deep linking launch
   */
  public isDeepLink(): boolean {
    return this.messageType() === MessageTypes.LtiDeepLinkingRequest;
  }

  /**
   * Get the custom data from the token, filtering out Canvas variables that start with $Canvas
   */
  public customData(): Record<string, any> {
    const customClaim = this.token[CUSTOM_CLAIM] as Record<string, any> || {};

    // Filter out Canvas variables that start with $Canvas
    return Object.entries(customClaim)
      .filter(([_, value]) => typeof value === 'string' && !value.toString().startsWith('$Canvas'))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }

  /**
   * Get all raw custom data from the token without filtering
   */
  public allCustomData(): Record<string, any> {
    return this.token[CUSTOM_CLAIM] as Record<string, any> || {};
  }

  /**
   * Get a specific custom parameter from the token
   */
  public getCustomParameter(key: string): any {
    return this.allCustomData()[key];
  }

  /**
   * Get the Canvas course ID from the token
   */
  public canvasCourseId(): string | undefined {
    return this.getCustomParameter('canvas_course_id');
  }

  /**
   * Get the Canvas section IDs from the token
   */
  public canvasSectionIds(): string | undefined {
    return this.getCustomParameter('canvas_section_ids');
  }

  /**
   * Get the Canvas account ID from the token
   */
  public canvasAccountId(): string | undefined {
    return this.getCustomParameter('canvas_account_id');
  }

  /**
   * Get the Canvas course name from the token
   */
  public canvasCourseName(): string | undefined {
    return this.getCustomParameter('canvas_course_name');
  }

  /**
   * Get the Canvas assignment ID from the token
   */
  public canvasAssignmentId(): string | undefined {
    return this.getCustomParameter('canvas_assignment_id');
  }

  /**
   * Get user information from the token
   */
  public userInfo(): {
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
  public roles(): Array<Roles> {
    return this.token[ROLES_CLAIM] || [];
  }

  /**
   * Check if the user has a specific role
   */
  public hasRole(role: Roles): boolean {
    return this.roles().includes(role);
  }

  /**
   * Check if the user is an instructor
   */
  public isInstructor(): boolean {
    return this.hasRole(Roles.InstructorContextRole) ||
      this.hasRole(Roles.InstructorInstitutionRole);
  }

  /**
   * Check if the user is a student
   */
  public isStudent(): boolean {
    return this.hasRole(Roles.LearnerContextRole) ||
      this.hasRole(Roles.StudentInstitutionRole);
  }

  /**
   * Get the raw token
   */
  public getRawToken(): IdToken {
    return this.token;
  }
}