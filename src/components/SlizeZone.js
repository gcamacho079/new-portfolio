import React from 'react';
import { RichText, CodeBlock, Image } from './slices';

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    text: RichText,
    code_block: CodeBlock,
    image: Image,
  };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });
};

export default SliceZone;
