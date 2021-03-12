import React from 'react';
//import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import truncateText from '../utils/truncateText';
import { graphql } from 'gatsby';

export default function Blog({ data }) {
  const allPosts = data.allPrismicPost.nodes;
  console.log(allPosts);
  const allPostItems = allPosts.map((post, index) => (
    <li key={index}>
      <h2>{post.data.title.text}</h2>
      <p>{post.data.date}</p>
      <p>{truncateText(post.data.body[0].primary.text.text)}</p>
    </li>
  ));
  return (
    <Layout>
      <ul>{allPostItems}</ul>
    </Layout>
  );
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
              id
              primary {
                text {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;
