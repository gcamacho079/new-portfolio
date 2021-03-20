import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer__nav list--unstyled list--inline">
          <li>
            <a href="https://github.com/gcamacho079">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lupecamacho/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:hello@lupecamacho.com">Email Me</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <p>
        <a href="https://github.com/gcamacho079/new-portfolio">
          View my portfolio repo on GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
