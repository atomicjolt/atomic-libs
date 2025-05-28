/**
 * Individual Canvas API endpoint information
 */
export interface CanvasApiEndpoint {
  path: string;
  description: string;
}

/**
 * Document representing an embedding for a Canvas API operation
 */
export interface CanvasApiEmbeddingDocument {
  path: string;             // API endpoint path
  nickname: string;         // Operation nickname
  operation: string;        // JSON stringified operation object
};

/**
 * Full Canvas API directory response
 */
export interface CanvasApiDirectory {
  apiVersion: string;
  swaggerVersion: string;
  apis: CanvasApiEndpoint[];
}

/**
 * Base model for API schema
 */
export interface CanvasApiSchema {
  apiVersion: string;
  swaggerVersion: string;
  basePath: string;
  resourcePath: string;
  produces: string[];
  apis: ApiEndpoint[];
  models: Record<string, ModelDefinition>;
}

/**
 * An individual API endpoint
 */
export interface ApiEndpoint {
  path: string;
  description: string;
  operations: Operation[];
}

/**
 * An operation within an API endpoint
 */
export interface Operation {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  summary: string;
  notes: string;
  nickname: string;
  parameters: Parameter[];
  response_fields: any[]; // This appears to be empty in most cases
  deprecated: boolean;
  deprecation_description: string;
  type: string;
  items?: {
    $ref?: string;
  };
}

/**
 * A parameter for an operation
 */
export interface Parameter {
  paramType: 'path' | 'query' | 'form';
  name: string;
  description: string;
  type: string;
  format: string | null;
  required: boolean;
  deprecated: boolean;
  enum?: string[];
  items?: {
    type: string;
  };
}

/**
 * A model definition
 */
export interface ModelDefinition {
  id: string;
  description: string;
  required: string[];
  deprecated: boolean;
  deprecation_description: string | null;
  properties: Record<string, PropertyDefinition>;
}

/**
 * A property definition within a model
 */
export interface PropertyDefinition {
  description: string;
  example?: any;
  type: string;
  enum?: string[];
  items?: {
    type?: string;
    $ref?: string;
  };
}