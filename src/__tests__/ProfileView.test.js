import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { ProfileView } from '../ProfileView';

test('component matches snapshot', () => {
  const render = ReactTestRenderer.create(
    <ProfileView
      username={'user'}
      data={{ user: { id: 'IDXXXX' }, loading: false, error: false }}
    />
  );

  const tree = render.toJSON();
  expect(tree).toMatchSnapshot();
});
