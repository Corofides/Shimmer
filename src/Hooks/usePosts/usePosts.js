import React, {useState, useEffect} from 'react';
import useFetch from '../useFetch';
import useSettings from '../useSettings';
import {DateTime} from 'luxon';

const usePosts = () => {

  //const {result: cachedPosts, loading: cachedLoading} = useFetch( process.env.REACT_APP_SITE_URL + '/posts/posts.json');

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch( process.env.REACT_APP_SITE_URL + '/posts/posts.json').then(response => response.json()).then((result) => {
      setPosts(result);
      setLoading(false);
      //return;
    });


    //setPosts([]);
    //setLoading(true);

  }, [cachedPosts, cachedLoading]);

  const getPost = (id) => {
    return posts.find((post) => {return post.id === id});
  };

  const publishedPosts = posts.filter(({date_published}) => DateTime.fromISO(date_published) <= DateTime.now());

  return {posts, loading, getPost, publishedPosts}


};

export default usePosts;