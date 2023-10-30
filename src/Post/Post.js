import React, {useState, useEffect} from 'react';
import Markdown from 'react-markdown';

export default ({post}) => {

  const [loading, setLoading] = useState(true);
  const [markdown, setMarkdown] = useState(false);

  useEffect(() => {

    fetch(post.file).then(response => response.text()).then((text) => {
      setMarkdown(text);
    });

  }, []);

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <Markdown>{markdown}</Markdown>
  )

}