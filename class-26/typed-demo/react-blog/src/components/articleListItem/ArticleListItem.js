import React from 'react';

function ArticleListItem({ item }) {

  let { name, content } = item;

  return (
    <a className="article-list-item">
      <p>
        <span data-testid="item-name">{name}</span>
        <span data-testid="item-content">{content}</span>
      </p>
    </a>
  )
}

export default ArticleListItem;
