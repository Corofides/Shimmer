import React, {useEffect, useState} from 'react';
import PostPreview from './PostPreview';
import Page from './Page';
import Post from './Post';
import Markdown from 'react-markdown';
import './App.scss';

function App() {

  const [markDown, setMarkDown] = useState(false);
  const [pages, setPages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [path, setPath] = useState([]);
  const [displayType, setDisplayType] = useState('home');
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {

    console.log("Path", window.location.pathname);

    const pathParts = window.location.pathname.split('/');

    if (pathParts.length > 2) {

      if (pathParts.length >= 3) {
        setDisplayType(pathParts[2]);
      }

      if (pathParts.length >= 4) {
        setActiveId(pathParts[pathParts.length - 1]);
      }

    }

    fetch('/Shimmer/pages/pages.json').then(response => response.json()).then((result) => {
      setPages(result);
    });

    fetch('/Shimmer/posts/posts.json').then(response => response.json()).then((result) => {

      if (result.length > 0) {
        result[0].active = true;
      }

      setPosts(result);
    });

    /* fetch('/Shimmer/posts/2023-10-25_First%20Post.md').then(response => response.text()).then((text) => {
      setMarkDown(text);
    }); */

    fetch('/Shimmer/posts').then(response => response.text()).then((text) => {
      console.log("Directory", text);
    });

  }, []);

  console.log("ActiveId", activeId, posts[activeId]);

  if (displayType === "post" && activeId >= 0 && activeId < posts.length) {
    return (
      <div>
        <Page>
          <Post post={posts[activeId]} />
        </Page>
      </div>
    )
  }

  return (
    <div>
      <Page>

        <div className={"BlockPage"}>
          {posts.map(({name, author, date_published}, index) => {
            return (
              <PostPreview key={index} onClick={(id) => {

                window.location.href = "/Shimmer/post/" + id;

              }} id={index} name={name} author={author} date_published={date_published} />
            )
          })}
        </div>
      </Page>
    </div>
  );
}

export default App;
