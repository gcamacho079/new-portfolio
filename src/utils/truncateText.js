const truncateText = (text, length = 250) => {
  let truncated = text.slice(0, length);
  truncated += '...';

  return truncated;
};

export default truncateText;
