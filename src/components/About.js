import React from 'react';
import Emoji from './Emoji';

const About = () => {
  return (
    <section>
      <h2>
        About <Emoji symbol="📖" />
      </h2>
      <p>
        Hi! My name's Lupe and I'm a web developer at{' '}
        <a href="https://wlcr.io/">WLCR</a>.
      </p>
      <p>
        I'm passionate about using tech to build things that are useful,
        user-friendly, and inclusive.
      </p>
    </section>
  );
};

export default About;
