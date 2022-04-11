import React from 'react';
import Emoji from './Emoji';
import NewTabLink from './NewTabLink';

const Experience = () => {
  return (
    <section>
      <h2>
        Experience <Emoji symbol="💻" />
      </h2>
      <h3>Pixel &#38; Tonic <span className="small-text">- Accessibility Engineer (2021-Present)</span></h3>
      <p>I'm the lead Accessibility Engineer working on <NewTabLink url="https://craftcms.com/" text="Craft CMS"/>. My role includes:
      </p>
      <ul>
        <li>Creating an internal system for tracking and remediating pre-existing accessibility violations.</li>
        <li>Using screen readers, automated testing tools, and browser extensions to test for accessibility issues, and using audit results to create an Accessibility Conformance Report.</li>
        <li>Building prototypes to test and develop more accessibile components.</li>
        <li>Remediating parts of the Craft control panel for accessibility/usability.</li>
      </ul>
      <h3>WLCR <span className="small-text">- Front End Developer (2018-2020)</span></h3>
      <p>
        At WLCR, I focused primarily on custom Shopify theme
        development (with some custom WordPress dev sprinkled in{' '}
        <Emoji symbol="🧁" />
        ). My role included:
      </p>
      <ul>
        <li>
          Building custom, responsive themes on the Shopify platform. A highlight was serving as the lead dev on the new Kit Undergarments
          theme build, and developing this <NewTabLink url="https://www.kitundergarments.com/collections/bras?fit-finder=true" text="accessible custom bra fitting quiz"/>.
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
