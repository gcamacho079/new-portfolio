import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to={'/'}>
          <img
            src={Logo}
            alt="Lupe Camacho"
            width="200"
            height="140"
            title="Lupe Camacho"
          />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
