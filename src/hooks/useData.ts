import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

interface Fetch<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [erorr, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contorler = new AbortController();
    setLoading(true);
    apiClient
      .get<Fetch<T>>(url, { signal: contorler.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contorler.abort();
  }, [url]);
  return { data, erorr, isLoading };
};

export default useData;
