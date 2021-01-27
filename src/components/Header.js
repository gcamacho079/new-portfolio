import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="Lupe Camacho" />
      </h1>
    </header>
  );
};

export default Header;
