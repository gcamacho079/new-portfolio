const path = require('path');

async function turnPostsIntoPages({ actions, graphql }) {
  // Get page template
  const postTemplate = path.resolve('./src/templates/Post.js');
  // Query all posts
  const { data } = await graphql(`
    query {
      posts: allPrismicPost {
        nodes {
          uid
        }
      }
    }
  `);

  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `/post/${post.uid}`,
      component: postTemplate,
      context: {
        slug: post.uid,
      },
    });
  });
  // Loop over posts and create pages for all posts
}

exports.createPages = async function (params) {
  // (1) Posts
  await turnPostsIntoPages(params);
  // (2) Pages
};
