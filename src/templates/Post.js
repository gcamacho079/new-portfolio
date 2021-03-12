import React from 'react';

const SinglePostPage = ({ data }) => {
  const { post } = data;
  return (
    <article>
      <h1>{post.data.title.text}</h1>
      {post.data.body.map((block) => {
        if (block['__typename'] === 'PrismicPostBodyText') {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: block.primary.text.html }}
            ></div>
          );
        }
      })}
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
          }
          ... on PrismicPostBodyQuote {
            id
            primary {
              quote {
                html
              }
            }
          }
          ... on PrismicPostBodyText {
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            id
            primary {
              image {
                alt
              }
            }
          }
        }
      }
    }
  }
`;

export default SinglePostPage;
