import React from 'react';
//import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import truncateText from '../utils/truncateText';
import { graphql } from 'gatsby';

const SinglePostItem = ({ post }) => {
  const { data } = post;
  return (
    <article>
      <h2>{data.title.text}</h2>
      <p>{data.date}</p>
      <p>{truncateText(data.body[0].primary.text.text)}</p>
    </article>
  );
};

export default function Blog({ data }) {
  const allPosts = data.allPrismicPost.nodes;
  console.log(allPosts);
  const allPostItems = allPosts.map((post, index) => (
    <SinglePostItem key={index} post={post} />
  ));
  return (
    <Layout>
      <>{allPostItems}</>
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
