import React from 'react';
import './Page.scss';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

export default ({children}) => {

  return (
    <div className={"Page"}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )

}