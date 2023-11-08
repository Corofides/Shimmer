import React from 'react';
import Page from './Page';
import usePages from './Hooks/usePages';
import useRoute from './Hooks/useRoute';
import Widgets from './Widgets';
import './App.scss';
import useNav from "./Hooks/useNav";

function App() {

  const {loading, getCurrentPage} = usePages();
  const {navigation, loading: navLoading, getNavForPosition} = useNav();
  const {route, setRoute} = useRoute();

  console.log("Navigation", navigation);

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  const currentPage = getCurrentPage(route);

  return (
    <div>
      <Page>
        <div className={"BlockPage"}>
          {currentPage.widgets.map(({name, children, ...other}) => {

            return (
              <Widgets
                Cmp={name}
                route={route}
                setRoute={setRoute}
                {...other}
              >
                {children}
              </Widgets>);
          })}
        </div>
      </Page>
    </div>
  )

}

export default App;
