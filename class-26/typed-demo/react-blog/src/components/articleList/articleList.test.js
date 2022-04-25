import { render, screen } from '@testing-library/react';
import React from 'react';

import ArticleList from './ArticleList';

describe('Testing the article List', () => {

  test('Should render the number of articles', () => {

    render(<ArticleList />);

    let count = screen.getByTestId('article-count');

    expect(count).toBeInTheDocument();
    expect(count).toBeTruthy();
  });
});
