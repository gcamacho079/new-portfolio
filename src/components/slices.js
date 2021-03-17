import React from 'react';

export const RichText = ({ slice }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}></div>
  );
};
