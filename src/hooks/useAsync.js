import { useState, useCallback } from 'react';

/**
 * Custom hook for managing async operations safely
 * Handles loading states, errors, and data
 */
export const useAsync = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (asyncFunction) => {
    setLoading(true);
    setError(null);
    try {
      const response = await asyncFunction();
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, execute };
};
