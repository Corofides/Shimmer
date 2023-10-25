import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown'
import './App.css';

function App() {

  const [markDown, setMarkDown] = useState(false);

  useEffect(() => {

    fetch('/Shimmer/posts/2023-10-25_First%20Post.md').then(response => response.text()).then((text) => {
      setMarkDown(text);
    })

  }, []);

  return (
    <div className="Post">
      <Markdown>{markDown}</Markdown>
    </div>
  );
}

export default App;
