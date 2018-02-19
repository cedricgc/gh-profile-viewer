import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import UserForm from '../UserForm';

test('component matches snapshot', () => {
  const render = ReactTestRenderer.create(
    <UserForm onUsernameSubmit={(user) => {}} />
  );

  const tree = render.toJSON();
  expect(tree).toMatchSnapshot();
});
