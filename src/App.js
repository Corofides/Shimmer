import React, {useEffect, useState} from 'react';
import PostPreview from './PostPreview';
import Page from './Page';
import Markdown from 'react-markdown';
import './App.scss';

function App() {

  const [markDown, setMarkDown] = useState(false);
  const [pages, setPages] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('/Shimmer/pages/pages.json').then(response => response.json()).then((result) => {
      setPages(result);
    });

    fetch('/Shimmer/posts/posts.json').then(response => response.json()).then((result) => {

      if (result.length > 0) {
        //result[0].active = true;
      }

      setPosts(result);
    });

    fetch('/Shimmer/posts/2023-10-25_First%20Post.md').then(response => response.text()).then((text) => {
      setMarkDown(text);
    });

    fetch('/Shimmer/posts').then(response => response.text()).then((text) => {
      console.log("Directory", text);
    });

  }, []);

  const activePost = posts.filter((post) => {

    return post.active;

  });

  console.log("ActivePost", activePost);

  return (
    <div className="Post">
      <Page>

        <div className={"BlockPage"}>
          {posts.map(({name, author, date_published}, index) => {
            return (
              <PostPreview key={index} onClick={(id) => {

                console.log("View Post", index);
                const newPosts = [...posts];

                newPosts.map((post, index) => {

                  return Object.assign({}, post, {
                    active: id === index
                  })

                });

                setPosts(newPosts);

              }} name={name} author={author} date_published={date_published} />
            )
          })}
        </div>
      </Page>
    </div>
  );
}

export default App;
