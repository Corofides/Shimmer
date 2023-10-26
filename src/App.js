import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown'
import PostPreview from './PostPreview';
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
      <header className={"Header"}>
        <h1>Shimmer</h1>
        <nav>
          <ul>
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Page 4</li>
          </ul>
        </nav>
      </header>
      <div className={"BlockPage"}>
        {posts.map(({name, author, date_published}, index) => {
          return (
            <PostPreview name={name} author={author} date_published={date_published} />
          )
        })}
      </div>
      <footer className={"Footer"}>
        <a href={"#"}>Information</a>
      </footer>
      <Markdown>{markDown}</Markdown>
    </div>
  );
}

export default App;
