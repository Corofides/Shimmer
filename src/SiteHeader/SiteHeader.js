import React from 'react';
import './SiteHeader.scss';

export default () => {

  return (
    <header className={"Header"}>
      <div className={"Content"}>
        <h1 className={"SiteName"}>Shimmer</h1>
        <nav>
          <a href="#">Page 1</a>
          <a href="#">Page 2</a>
          <a href="#">Page 3</a>
          <a href="#">Page 4</a>
        </nav>
      </div>
    </header>
  )

}