import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import ProfileView from '../ProfileView';

xtest('component matches snapshot', () => {
  const render = ReactTestRenderer.create(<ProfileView username={'user'} />);

  const tree = render.toJSON();
  expect(tree).toMatchSnapshot();
});
