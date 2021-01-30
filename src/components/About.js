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
        I'm a certified Web Accessibility Specialist with the IAAP, and I'm
        excited about using tech to build things that are useful, user-friendly,
        and inclusive.
      </p>
      <p>
        Skills include: JavaScript (ES6), PHP, Ruby, semantic HTML, CSS,
        functional programming, webpack, accessibility testing, React, and more.{' '}
        <Emoji symbol="📚" />
      </p>
    </section>
  );
};

export default About;
