const path = require(`path`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogArticle.js');

  const results = [
    { name: 'My First Article', content: 'Here is my article text', id: 'article1'},
    { name: 'My Second Article', content: 'Here is more content', id: 'article12' }
  ];

  results.forEach(article => {
    createPage({
      path: `${article.id}`,
      component: blogPostTemplate,
      context: { ...article },
    })
  })
}
