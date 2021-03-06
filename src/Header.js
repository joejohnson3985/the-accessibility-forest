import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <hgroup className="header-text"> 
        <h1>The Accessibility Forest</h1>
        <h3>Learn about the accessibility tree to grow your forest!</h3>
      </hgroup>
    </header>
  );
}

export default Header;