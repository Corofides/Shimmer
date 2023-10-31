import React, {useEffect, useState} from 'react';
import PostPreview from './PostPreview';
import Page from './Page';
import Post from './Post';
import usePosts from './Hooks/usePosts';
import usePages from './Hooks/usePages';
import Widgets from './Widgets';
import './App.scss';

function App() {

  const {posts} = usePosts();
  const {pages} = usePages();

  const [displayType, setDisplayType] = useState('home');
  const [activeId, setActiveId] = useState(false);

  console.log("Pages", pages);

  useEffect(() => {

    console.log("Path", window.location.pathname);

    const hasPathHash = window.location.href.split('#').length === 2;
    let pathParts = window.location.pathname.split('/');

    if (hasPathHash) {
      pathParts = window.location.href.split('#')[1].split('/');
      pathParts.unshift("Shimmer");
      pathParts.unshift("");
    }


    if (pathParts.length > 2) {

      if (pathParts.length >= 3) {
        setDisplayType(pathParts[2]);
      }

      if (pathParts.length >= 4) {
        setActiveId(pathParts[pathParts.length - 1]);
      }

    }

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

  if (pages.length > 0) {

    return (
      <div>
        <Page>
          <div className={"BlockPage"}>
            {pages[0].widgets.map(({name, children, ...other}) => {
              return (
                <div>
                  <Widgets Cmp={name} {...other}>{children}</Widgets>
                </div>
              )

            })}
          </div>
        </Page>
      </div>
    )

  }

  return (
    <div>
      <Page>
        <div className={"BlockPage"}>
          {posts.map(({id}) => {
            return (
              <PostPreview key={id} onClick={(id) => {

                window.location.href = "/Shimmer#post/" + id;

              }} id={id} />
            )
          })}
        </div>
      </Page>
    </div>
  );
}

export default App;
