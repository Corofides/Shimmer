import React from 'react';
import useSettings from '../Hooks/useSettings';
import './SiteHeader.scss';

export default () => {

  const {settings} = useSettings();

  return (
    <header className={"Header"}>
      <div className={"Content"}>
        <h1 className={"SiteName"}>
          <a href={"/Shimmer"}>
            {settings.site_name}
          </a>
        </h1>
        <nav />
      </div>
    </header>
  )

}