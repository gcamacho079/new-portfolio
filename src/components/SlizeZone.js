import React from 'react';
import { RichText } from './slices';

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    text: RichText,
  };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    console.log(slice.slice_type);
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });
};

export default SliceZone;
