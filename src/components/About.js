import React from 'react';
import Emoji from './Emoji';

const About = () => {
  return (
    <section>
      <h2>
        About <Emoji symbol="📖" />
      </h2>
      <p>
        Hi! My name's Lupe Camacho and I'm a front end web developer at{' '}
        <a href="https://wlcr.io/" target="_blank" rel="noreferrer">
          WLCR
        </a>
        .
      </p>
      <p>
        I'm a certified Web Accessibitily Specialist with the IAAP, and I'm
        excited about using tech to build things that are useful, user-friendly,
        and inclusive.
      </p>
    </section>
  );
};

export default About;
