import React, {useState, useEffect} from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch('/Shimmer/posts/posts.json').then(response => response.json()).then((result) => {

      if (result.length > 0) {
        result[0].active = true;
      }

      setLoading(false);
      setPosts(result);

    });

  }, []);

  const getPost = (id) => {
    return posts.find((post) => {return post.id === id});
  };

  return {posts, loading, getPost}


};

export default usePosts;