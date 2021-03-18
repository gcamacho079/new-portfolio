import React from 'react';

export const RichText = ({ slice }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}></div>
  );
};

export const CodeBlock = ({ slice }) => {
  if (!slice) return;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: slice.primary.code_block.html }}
    ></div>
  );
};

export const Image = ({ slice }) => {
  if (!slice) return;

  return <img src={slice.primary.image.url} alt={slice.primary.image.alt} />;
};
