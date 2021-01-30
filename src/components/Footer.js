import React from 'react';

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
