import React, {useState, useEffect} from 'react';


const usePages = () => {

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch('/Shimmer/pages/pages.json').then(response => response.json()).then((result) => {

      const newPages = result.map(({widgets, ...other}) => {

        let colPos = 1;

        return {
          widgets: widgets.map(({colSpan = 1, ...other}) => {

            const newWidget = {
              colPos: colPos + colSpan > 4 ? 1 : colPos,
              colSpan: colSpan,
              ...other,
            };

            colPos = colPos + colSpan;

            if (colPos > 3) {
              colPos = 1;
            }

            return newWidget;

          }),
          ...other
        }

      });

      setPages(newPages);

    });

  }, []);

  return {pages, loading, error}

};

export default usePages;