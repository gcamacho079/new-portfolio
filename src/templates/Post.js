import React from 'react';
import { graphql } from 'gatsby';
import SliceZone from '../components/SlizeZone';

const SinglePostPage = ({ data }) => {
  if (!data) return;
  const document = data.post.data;
  return (
    <article>
      <h1>{document.title.text}</h1>
      <SliceZone slices={document.body} />
    </article>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: prismicPost(uid: { eq: $slug }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicPostBodyCodeBlock {
            id
            primary {
              code_block {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostBodyQuote {
            id
            primary {
              quote {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostBodyText {
            id
            primary {
              text {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostBodyImage {
            id
            primary {
              image {
                alt
                url
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

export default SinglePostPage;
