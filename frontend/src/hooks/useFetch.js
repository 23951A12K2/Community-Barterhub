import { useState, useEffect } from "react";

export default function useFetch(fetcher, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetcher().then((res) => {
      if (mounted) setData(res);
      setLoading(false);
    });
    return () => (mounted = false);
  }, deps);

  return { data, loading };
}
