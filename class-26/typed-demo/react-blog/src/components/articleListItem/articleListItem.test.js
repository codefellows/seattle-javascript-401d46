import { render, screen } from '@testing-library/react';
import React from 'react';

import ArticleListItem from './ArticleListItem';

describe('Rendering the list Item', () => {

  test('Should display the listItem text', () => {
    render(<ArticleListItem item={{ name: 'test-name', content: 'test-content'}} />);

    let name = screen.getByTestId('item-name');
    let content = screen.getByTestId('item-content');

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent('test-name');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('test-content')
  });

});
