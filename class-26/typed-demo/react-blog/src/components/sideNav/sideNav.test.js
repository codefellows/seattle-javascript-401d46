import { render, screen } from '@testing-library/react';
import React from 'react';

import SideNav from './SideNav';

describe('Testing the side nav component', () => {

  test('Should render any child element', () => {
    render(
      <SideNav>
        <p>Hello World</p>
      </SideNav>
      ); // takes a function or class component JSX and renders it in our test environment.

    let childText = screen.getByText(/hello world/i); // this only looks for visible content

    expect(childText).toBeInTheDocument();
  });

});
