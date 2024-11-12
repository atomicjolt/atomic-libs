import Api from '../api/api';
import NetworkConstants from '../constants/network';
import { useState } from 'react';
import { useSelector } from 'react-redux';

/**
 *
 * @param {number} timeout Override the default network timeout for this request
 * @returns a response with the following fields:
 * {
 *  result, - the resulting data from the request
 *  error, - error if there is one
 *  loading, - boolean indicating if the request is still loading
 *  usePut - method that executes the put. Accepts the following arguments
 *    @param {string} url The url to request
 *    @param {*} params Optional url parameters to pass to the request
 *    @param {*} body Optional post body to pass to the request
 *    @param {*} headers Optional headers to pass to the request
 * }
 */
export default function usePut(timeout = NetworkConstants.TIMEOUT) {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const settings = useSelector((state) => state.settings);
  const jwt = useSelector((state) => state.jwt);

  const putIt = async (url, params = {}, body = {}, headers = {}) => {
    try {
      setLoading(true);
      const res = await Api.put(url, settings.api_url, jwt, settings.csrf_token, params, body, headers, timeout);
      setResult(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return {
    result,
    error,
    loading,
    putIt,
  };
}
