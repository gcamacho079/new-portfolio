import React from 'react';
const NewTabLink = (props) => (
  <a
    href={props.url ? props.url : ''}
    target="_blank"
    rel="noreferrer"
  >
    {props.text} <span className="visually-hidden">(opens in new tab)</span>
  </a>
);
export default NewTabLink;
