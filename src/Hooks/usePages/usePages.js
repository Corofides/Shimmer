import React, {useState, useEffect} from 'react';


const usePages = () => {

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch('/Shimmer/pages/pages.json').then(response => response.json()).then((result) => {
      setPages(result);
    });

  }, []);

  return {pages, loading, error}

};

export default usePages;