/**
 *
 * @param {number} timeout Override the default network timeout for this request
 * @returns a response with the following fields:
 * {
 *  result, - the resulting data from the request
 *  error, - error if there is one
 *  loading, - boolean indicating if the request is still loading
 *  getIt - function that can be used to call the get method with the follow parameters
 *    @param {string} url The url to request
 *    @param {*} params Optional url parameters to pass to the request
 *    @param {*} headers Optional headers to pass to the request
 * }
 */
export default function useGet(timeout?: number): {
    result: undefined;
    error: undefined;
    loading: boolean;
    getIt: (url: any, params?: {}, headers?: {}) => Promise<void>;
};
