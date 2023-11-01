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
  const {pages, loading, getCurrentPage} = usePages();

  const [displayType, setDisplayType] = useState('home');
  const [activeId, setActiveId] = useState(false);

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  const currentPage = getCurrentPage();

  console.log("Pages", pages);

  if (true || pages.length > 0) {

    return (
      <div>
        <Page>
          <div className={"BlockPage"}>
            {currentPage.widgets.map(({name, children, ...other}) => {

              return (
                <Widgets Cmp={name} {...other}>{children}</Widgets>
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
