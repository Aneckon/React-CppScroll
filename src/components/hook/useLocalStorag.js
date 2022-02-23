import { useState, useEffect } from 'react';

export default (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};
