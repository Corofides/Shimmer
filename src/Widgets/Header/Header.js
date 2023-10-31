import React from 'react';
import './Header.scss';

const Header = ({children}) => {

  return (
    <h1>{children}</h1>
  )

};

export default Header;