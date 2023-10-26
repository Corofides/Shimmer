import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown'
import './App.scss';

function App() {

  const [markDown, setMarkDown] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('/Shimmer/posts/posts.json').then(response => response.json()).then((result) => {
      setPosts(result);
    });

    fetch('/Shimmer/posts/2023-10-25_First%20Post.md').then(response => response.text()).then((text) => {
      setMarkDown(text);
    });

    fetch('/Shimmer/posts').then(response => response.text()).then((text) => {
      console.log("Directory", text);
    });

  }, []);

  return (
    <div className="Post">
      {posts.map(({name, author, date_published}) => {
        return (
          <div className={"PostPreview"}>
            <span>{date_published}</span>
            <h2>{name}</h2>
            <h3>{author}</h3>
          </div>
        )
      })}
      <Markdown>{markDown}</Markdown>
    </div>
  );
}

export default App;
