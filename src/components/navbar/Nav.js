import React from 'react';
import Hamburger from './Hamburger';

const Nav = (props) => {
  //const isMobile = false;
  return (
    <header
      className="nav"
      style={{ animationDelay: `${props.isLoaded ? 0 : '2.8s'}` }}
    >
      <div className="nav_logo">Logo</div>

      <Hamburger></Hamburger>
    </header>
  );
};

export default Nav;
