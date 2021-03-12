import React from 'react';
import truncateText from '../utils/truncateText';
import { graphql, Link } from 'gatsby';

const SinglePostItem = ({ post }) => {
  const { data, uid } = post;
  return (
    <article>
      <h2>
        <Link to={`/post/${uid}`}>{data.title.text}</Link>
      </h2>
      <p>{data.date}</p>
      <p>{truncateText(data.body[0].primary.text.text)}</p>
    </article>
  );
};

export default function Blog({ data }) {
  const allPosts = data.allPrismicPost.nodes;
  const allPostItems = allPosts.map((post, index) => (
    <SinglePostItem key={index} post={post} />
  ));
  return <>{allPostItems}</>;
}

export const query = graphql`
  query PostQuery {
    allPrismicPost {
      nodes {
        data {
          title {
            text
          }
          date(formatString: "")
          body {
            ... on PrismicPostBodyText {
              primary {
                text {
                  text
                }
              }
            }
          }
        }
        uid
      }
    }
  }
`;
