declare const _exports: {
    [n: number]: {
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
    };
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): {
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
    } | undefined;
    push(...items: {
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
    }[]): number;
    concat(...items: ConcatArray<{
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
    }>[]): {
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
    concat(...items: ({
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
    } | ConcatArray<{
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
    }>)[]): {
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
    join(separator?: string | undefined): string;
    reverse(): {
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
    shift(): {
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
    } | undefined;
    slice(start?: number | undefined, end?: number | undefined): {
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
    sort(compareFn?: ((a: {
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
    }, b: {
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
    }) => number) | undefined): {
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
    splice(start: number, deleteCount?: number | undefined): {
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
    splice(start: number, deleteCount: number, ...items: {
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
    }[]): {
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
    unshift(...items: {
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
    }[]): number;
    indexOf(searchElement: {
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
    }, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: {
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
    }, fromIndex?: number | undefined): number;
    every<S extends {
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
    }>(predicate: (value: {
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
    }, index: number, array: {
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
    }[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: {
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
    }, index: number, array: {
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
    }[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: {
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
    }, index: number, array: {
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
    }[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: {
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
    }, index: number, array: {
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
    }[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: {
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
    }, index: number, array: {
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
    }[]) => U, thisArg?: any): U[];
    filter<S_1 extends {
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
    }>(predicate: (value: {
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
    }, index: number, array: {
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
    }[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: {
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
    }, index: number, array: {
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
    }[]) => unknown, thisArg?: any): {
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
    reduce(callbackfn: (previousValue: {
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
    }, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => {
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
    }): {
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
    };
    reduce(callbackfn: (previousValue: {
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
    }, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => {
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
    }, initialValue: {
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
    }): {
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
    };
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: {
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
    }, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => {
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
    }): {
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
    };
    reduceRight(callbackfn: (previousValue: {
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
    }, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => {
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
    }, initialValue: {
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
    }): {
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
    };
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
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
    }, currentIndex: number, array: {
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
    }[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends {
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
    }>(predicate: (this: void, value: {
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
    }, index: number, obj: {
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
    }[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: {
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
    }, index: number, obj: {
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
    }[]) => unknown, thisArg?: any): {
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
    } | undefined;
    findIndex(predicate: (value: {
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
    }, index: number, obj: {
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
    }[]) => unknown, thisArg?: any): number;
    fill(value: {
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
    }, start?: number | undefined, end?: number | undefined): {
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
    copyWithin(target: number, start: number, end?: number | undefined): {
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
    entries(): IterableIterator<[number, {
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
    }]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<{
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
    }>;
    includes(searchElement: {
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
    }, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: {
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
    }, index: number, array: {
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
    }[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
    [Symbol.iterator](): IterableIterator<{
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
    }>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    at(index: number): {
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
    } | undefined;
};
export = _exports;
