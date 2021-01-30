import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img
          src={Logo}
          alt="Lupe Camacho"
          width="200"
          height="140"
          title="Lupe Camacho"
        />
      </h1>
    </header>
  );
};

export default Header;
