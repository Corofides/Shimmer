import React from 'react';
import './SiteHeader.scss';

export default () => {

  return (
    <header className={"Header"}>
      <div className={"Content"}>
        <h1 className={"SiteName"}>
          <a href={"/Shimmer"}>
            Shimmer
          </a>
        </h1>
        <nav />
      </div>
    </header>
  )

}