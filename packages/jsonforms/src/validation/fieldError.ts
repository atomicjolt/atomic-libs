import type { ErrorObject } from "ajv";

/**
 * Builds an error for `validate` or `serverErrors` that JSON Forms attaches to
 * the control at `path`. Accepts dotted (`settings.url`) or pointer
 * (`/settings/url`) paths.
 */
export function fieldError(path: string, message: string): ErrorObject {
  return {
    instancePath: toInstancePath(path),
    message,
    schemaPath: "",
    keyword: "",
    params: {},
  };
}

export function toInstancePath(path: string): string {
  if (path === "") return "";
  if (path.startsWith("/")) return path;
  return "/" + path.split(".").join("/");
}
