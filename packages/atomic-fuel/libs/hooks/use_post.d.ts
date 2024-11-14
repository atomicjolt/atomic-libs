/**
 *
 * @param {number} timeout Override the default network timeout for this request
 * @returns a response with the following fields:
 * {
 *  result, - the resulting data from the request
 *  error, - error if there is one
 *  loading, - boolean indicating if the request is still loading
 *  postIt, - function that will send the post. Accepts the folloing params:
 *    @param {string} url The url to request
 *    @param {*} params Optional url parameters to pass to the request
 *    @param {*} body Optional post body to pass to the request
 *    @param {*} headers Optional headers to pass to the request
 * }
 */
export default function usePost(timeout?: number): {
    result: undefined;
    error: undefined;
    loading: boolean;
    postIt: (url: any, params?: {}, body?: {}, headers?: {}) => Promise<void>;
};
