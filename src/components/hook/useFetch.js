import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import useLocalStorag from './useLocalStorag';

export default (url) => {
  const baseUrl = 'http://80.249.146.66:81/api';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorag('token');

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
      headers: {
        'Authentication-Token': token ? token : '',
        'API-Secret': 'a$z+eWt@Z*Qs`^w,',
      },
    };

    axios(baseUrl + url, requestOptions)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading, url, options, token]);

  return [{ isLoading, response, error }, doFetch];
};
