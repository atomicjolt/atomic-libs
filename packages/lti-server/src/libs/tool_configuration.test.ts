import { describe, it, expect } from 'vitest';
import {
  buildToolConfiguration,
  createMessage,
  getCustomParameters,
  ToolConfigurationParams,
} from './tool_configuration';
import { LTI_TOOL_CONFIGURATION, MessageTypes } from '@atomicjolt/lti-types';
import {
  CANVAS_PLACEMENT_VISIBILITY,
  CANVAS_PLACEMENT_COURSE_NAVIGATION_ENABLED,
  CANVAS_PRIVACY_LEVEL,
} from '@atomicjolt/lti-types';

describe('tool_configuration', () => {
  describe('createMessage', () => {
    it('returns a basic LtiMessage', () => {
      const message = createMessage(
        MessageTypes.LtiResourceLinkRequest,
        'http://localhost:3000/launch',
        'Test Tool',
        'http://localhost:3000/logo.png',
        ['course_navigation'],
        'other',
      );
      expect(message).toEqual({
        type: 'LtiResourceLinkRequest',
        target_link_uri: 'http://localhost:3000/launch',
        label: 'Test Tool',
        icon_uri: 'http://localhost:3000/logo.png',
        placements: ['course_navigation'],
      });
    });

    it('adds canvas placement visibility when product family is canvas', () => {
      const message = createMessage(
        MessageTypes.LtiResourceLinkRequest,
        'http://localhost:3000/launch',
        'Test Tool',
        'http://localhost:3000/logo.png',
        ['course_navigation'],
        'canvas',
        'public',
      );
      expect(message[CANVAS_PLACEMENT_VISIBILITY]).toBe('public');
    });

    it('enables canvas course navigation when placement is course_navigation and navDefault is enabled', () => {
      const message = createMessage(
        MessageTypes.LtiResourceLinkRequest,
        'http://localhost:3000/launch',
        'Test Tool',
        'http://localhost:3000/logo.png',
        ['course_navigation'],
        'canvas',
        'public',
        'enabled',
      );
      expect(message[CANVAS_PLACEMENT_COURSE_NAVIGATION_ENABLED]).toBe(true);
    });
  });

  describe('getCustomParameters', () => {
    it('returns base custom parameters when no product family is provided', () => {
      const params = getCustomParameters();
      expect(params).toEqual({
        'context_id_history': '$Context.id.history',
        'resource_link_id_history': '$ResourceLink.id.history',
      });
    });

    it('returns canvas custom parameters when product family is canvas', () => {
      const params = getCustomParameters('canvas');
      expect(params).toEqual({
        'context_id_history': '$Context.id.history',
        'resource_link_id_history': '$ResourceLink.id.history',
        'custom_canvas_course_id': '$Canvas.course.id',
        'custom_canvas_api_domain': '$Canvas.api.domain',
        'canvas_user_id': '$Canvas.user.id',
        'canvas_account_id': '$Canvas.account.id',
        'canvas_shard_id': '$Canvas.shard.id',
        'membership_roles': '$com.Instructure.membership.roles',
        'canvas_user_timezone': '$Person.address.timezone',
        'canvas_root_account_id': '$Canvas.rootAccount.id',
      });
    });
  });

  describe('buildToolConfiguration', () => {
    const baseParams: ToolConfigurationParams = {
      host: 'localhost:3000',
      clientName: 'Test Tool',
      description: 'A test tool',
      initPath: '/init',
      jwksPath: '/jwks',
      launchPath: '/launch',
      logoPath: '/logo.png',
      policyUri: 'http://localhost:3000/policy',
      redirectPath: '/redirect',
      tosUri: 'http://localhost:3000/tos',
      email: 'test@example.com',
      scope: 'openid',
    };

    it('builds a basic tool configuration', () => {
      const config = buildToolConfiguration(baseParams);
      expect(config.client_name).toBe('Test Tool');
      expect(config.application_type).toBe('web');
      expect(config[LTI_TOOL_CONFIGURATION]).toBeDefined();
    });

    it('adds a deep linking message when doDeepLinking is true', () => {
      const params = { ...baseParams, doDeepLinking: true };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages).toHaveLength(1);
      expect(ltiConfig.messages[0]?.type).toBe(
        MessageTypes.LtiDeepLinkingRequest,
      );
    });

    it('adds canvas placement for deep linking when product family is canvas', () => {
      const params = { ...baseParams, doDeepLinking: true, productFamilyCode: 'canvas' };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages[0]?.placements).toEqual(['editor_button']);
    });

    it('adds desire2learn placement for deep linking when product family is desire2learn', () => {
      const params = { ...baseParams, doDeepLinking: true, productFamilyCode: 'desire2learn' };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages[0]?.placements).toEqual([
        'ContentArea',
        'RichTextEditor',
      ]);
    });

    it('adds a global nav message when globalNav is true', () => {
      const params = { ...baseParams, globalNav: true };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages).toHaveLength(1);
      expect(ltiConfig.messages[0]?.placements).toEqual(['global_navigation']);
    });

    it('adds an account nav message when accountNav is true', () => {
      const params = { ...baseParams, accountNav: true };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages).toHaveLength(1);
      expect(ltiConfig.messages[0]?.placements).toEqual(['account_navigation']);
    });

    it('adds a course nav message when courseNav is true', () => {
      const params = { ...baseParams, courseNav: true };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig.messages).toHaveLength(1);
      expect(ltiConfig.messages[0]?.placements).toEqual(['course_navigation']);
    });

    it('adds canvas privacy level when product family is canvas and privacyLevel is set', () => {
      const params = { ...baseParams, productFamilyCode: 'canvas', privacyLevel: 'anonymous' };
      const config = buildToolConfiguration(params);
      const ltiConfig = config[LTI_TOOL_CONFIGURATION];
      expect(ltiConfig).toBeDefined();
      expect(ltiConfig[CANVAS_PRIVACY_LEVEL]).toBe('anonymous');
    });

    describe('path handling', () => {
      it('should correctly handle paths with leading slashes', () => {
        const params: ToolConfigurationParams = {
          ...baseParams,
          initPath: '/init',
          jwksPath: '/jwks',
          launchPath: '/launch',
          logoPath: '/logo.png',
          redirectPath: '/redirect',
        };
        const config = buildToolConfiguration(params);
        const ltiConfig = config[LTI_TOOL_CONFIGURATION];
        expect(config.initiate_login_uri).toBe('https://localhost:3000/init');
        expect(config.jwks_uri).toBe('https://localhost:3000/jwks');
        expect(ltiConfig.target_link_uri).toBe('https://localhost:3000/launch');
        expect(config.logo_uri).toBe('https://localhost:3000/logo.png');
        expect(config.redirect_uris).toEqual(['https://localhost:3000/redirect']);
      });

      it('should correctly handle paths without leading slashes', () => {
        const params: ToolConfigurationParams = {
          ...baseParams,
          initPath: 'init',
          jwksPath: 'jwks',
          launchPath: 'launch',
          logoPath: 'logo.png',
          redirectPath: 'redirect',
        };
        const config = buildToolConfiguration(params);
        const ltiConfig = config[LTI_TOOL_CONFIGURATION];
        expect(config.initiate_login_uri).toBe('https://localhost:3000/init');
        expect(config.jwks_uri).toBe('https://localhost:3000/jwks');
        expect(ltiConfig.target_link_uri).toBe('https://localhost:3000/launch');
        expect(config.logo_uri).toBe('https://localhost:3000/logo.png');
        expect(config.redirect_uris).toEqual(['https://localhost:3000/redirect']);
      });

      it('should correctly handle host with trailing slash', () => {
        const params: ToolConfigurationParams = {
          ...baseParams,
          host: 'localhost:3000/',
          initPath: '/init',
        };
        const config = buildToolConfiguration(params);
        expect(config.initiate_login_uri).toBe('https://localhost:3000/init');
      });
    });
  });
});
