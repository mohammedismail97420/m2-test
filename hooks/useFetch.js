import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetch(method, url, headers = null, { immediate }) {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const executeFetch = useCallback(
    async (body) => {
      setLoading(true);
      setRes(null);
      setError(null);
      axios({ method, url, data: body, headers })
        .then((response) => {
          setLoading(false);
          setRes(response);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    },
    [method, url, headers, res, error, loading]
  );

  useEffect(() => {
    if (immediate) {
      executeFetch();
    }
  }, [executeFetch, immediate]);
  return { res, error, loading, executeFetch };
}
