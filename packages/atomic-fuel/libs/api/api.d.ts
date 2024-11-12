export default class Api {
    static get(url: any, apiUrl: any, jwt: any, csrf: any, params: any, headers: any, timeout?: number): any;
    static post(url: any, apiUrl: any, jwt: any, csrf: any, params: any, body: any, headers: any, timeout?: number): any;
    static put(url: any, apiUrl: any, jwt: any, csrf: any, params: any, body: any, headers: any, timeout?: number): any;
    static del(url: any, apiUrl: any, jwt: any, csrf: any, params: any, headers: any, timeout?: number): any;
    static execRequest(method: any, url: any, apiUrl: any, jwt: any, csrf: any, params: any, body: any, headers: any, timeout?: number): any;
    /**
     * Returns a complete, absolute URL by conditionally appending `path` to
     * `apiUrl`.  If `path` already contains "http", it is returned as-is.
     */
    static makeUrl(part: any, apiUrl: any): any;
    static doRequest(url: any, requestMethod: any, requestType: any): any;
    static wrapRequest(url: any, requestMethod: any, requestType: any): any;
    static disposeRequest(url: any): void;
    static promisify(request: any): Promise<any>;
    static queryStringFrom(params: any): string;
}
