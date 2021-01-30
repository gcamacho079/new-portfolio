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
          Building custom, responsive themes on the Shopify platform. A recent
          highlight was serving as the lead dev on the new Kit Undergarments
          theme build, and developing this{' '}
          <a
            href="https://www.kitundergarments.com/collections/bras?fit-finder=true"
            target="_blank"
            rel="noreferrer"
          >
            custom fitting quiz
          </a>
        </li>
        <li>
          Collaborating on and contributing to custom codebases and
          documentation; this includes work on build processes, starter themes,
          testing suites, team knowledgebases, etc.
        </li>
        <li>
          Leading initiatives to move accessibility further to the left by
          holding short talks on a11y topics, providing feedback on proposed
          designs, and educating clients.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
