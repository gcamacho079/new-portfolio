import React from 'react';
import Emoji from './Emoji';

const Experience = () => {
  return (
    <section>
      <h2>
        Experience <Emoji symbol="💻" />
      </h2>
      <p>
        In my current role, I focus primarily on custom Shopify theme
        development (with some custom WordPress dev sprinkled in{' '}
        <Emoji symbol="🧁" />
        ). My role includes:
      </p>
      <ul>
        <li>
          Building bespoke themes and experiences on the Shopify platform.
          <br />A recent highlight was serving as the lead dev on the new Kit
          Undergarments theme build, and developing this{' '}
          <a
            href="https://www.kitundergarments.com/collections/bras?fit-finder=true"
            target="_blank"
            rel="noreferrer"
          >
            custom fitting quiz
          </a>
        </li>
        <li>
          Leading initiatives to move accessibility further to the left by
          holding short talks on a11y topics, providing feedback on proposed
          designs, and educating clients.
        </li>
        <li>
          Brainstorming and recommending solutions to meet client needs — both
          custom-built and from the app ecosystem — while solving for potential
          incompatibilities
        </li>
      </ul>
    </section>
  );
};

export default Experience;
