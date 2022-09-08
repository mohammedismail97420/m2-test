import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function useFetch(method, url, headers = null, { immediate }) {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token =
    typeof window !== "undefined" && window.atob(getCookie("_SYS_ADMIN_AUTH"));

  const config =
    headers === "token"
      ? {
          Authorization: `Bearer ${token}`,
        }
      : headers;

  const executeFetch = useCallback(
    async (body) => {
      setLoading(true);
      setRes(null);
      setError(null);
      axios({ method, url, data: body, headers: config })
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
