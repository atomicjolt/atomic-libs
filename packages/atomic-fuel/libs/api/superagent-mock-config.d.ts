declare const _exports: {
    /**
     * regular expression of URL
     */
    pattern: string;
    /**
     * returns the data
     *
     * @param match array Result of the resolution of the regular expression
     * @param params object sent by 'send' function
     * @param headers object set by 'set' function
     * @param context object the context of running the fixtures function
     */
    fixtures(match: any, params: any, headers: any, context: any): string | {
        status: number;
        contentType: string;
        statusText: string;
        responseText: string;
    } | {
        status: number;
        statusText: string;
        contentType?: undefined;
        responseText?: undefined;
    } | null;
    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get(match: any, data: any): {
        body: any;
    };
    /**
     * returns the result of the POST request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    post(match: any, data: any): {
        code: number;
        body: any;
    };
    put(match: any, data: any): {
        code: number;
        body: any;
    };
    delete(match: any, data: any): {
        code: number;
        body: any;
    };
}[];
export = _exports;
