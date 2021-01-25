import React from 'React';
import Logo from '../assets/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" />
      <nav className="nav">
        <a className="nav__link" href="#">
          Portfolio
        </a>
        <a className="nav__link" href="#">
          About
        </a>
        <a className="nav__link" href="#">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
