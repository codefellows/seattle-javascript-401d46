import { useState } from 'react';

import ArticleListItem from '../articleListItem/ArticleListItem';

function ArticleList() {

  let [list, setList] = useState([
    { name: "article 1", content: 'lorem ipsum'},
    { name: "article 2", content: 'more lorem ipsum' }
  ]);

  return (
    <div id="article-list">
      {list.map((article) => <ArticleListItem item={article} />)}
      <span data-testid="article-count">{list.length}</span>
    </div>
  );
}

export default ArticleList;
