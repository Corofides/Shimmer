import React, {useState, useEffect} from 'react';

const useFetch = (location) => {

  const [loading, setLoading] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");



  useEffect(() => {

    if (loading) {
      return;
    }

    setLoading(true);

    fetch(location).then(result => result.text()).then(result => {

      setLoading(false);
      setResult(result);

    })

  }, []);

  return {loading, result}

};

export default useFetch;