import React, { useEffect, useState } from "react";

const useFetch = (apiUrl) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchApi = async () => {
    try {
      setLoading(true);
      
      const fetchData = await fetch(apiUrl);
      const resp = await fetchData.json();
      setData(resp);

    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [apiUrl]);

  return { data, loading, error };
};

export default useFetch;


/* call this hook below*/
const { data, loading, error } = useFetch("api-url");
