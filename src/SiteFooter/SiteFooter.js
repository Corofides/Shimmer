import React from 'react';
import useSettings from '../Hooks/useSettings';
import './SiteFooter.scss';

export default () => {

  const {settings} = useSettings();

  return (
    <footer className={"Footer"}>
      <div className={"Content"}>
        <a href={"#"}>{settings.site_owner}</a>
      </div>
    </footer>
  )

}