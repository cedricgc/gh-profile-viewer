import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { ProfileView } from '../ProfileView';

const states = [
  {
    meta: {
      title: 'with a user',
    },
    props: {
      username: 'user',
      data: {
        user: {
          id: 'IDUSER',
        },
        loading: false,
        error: false,
      },
    },
  },
  {
    meta: {
      title: 'with no user',
    },
    props: {
      username: '',
      data: {
        user: {
          id: '',
        },
        loading: false,
        error: false,
      },
    },
  },
  {
    meta: {
      title: 'when loading',
    },
    props: {
      username: 'loading',
      data: {
        user: {
          id: null,
        },
        loading: true,
        error: false,
      },
    },
  },
  {
    meta: {
      title: 'when an error occurs',
    },
    props: {
      username: 'error_user',
      data: {
        user: {
          id: null,
        },
        loading: false,
        error: true,
      },
    },
  },
];

describe('component matches snapshot', () => {
  for (let { meta, props } of states) {
    test(`${meta.title}`, () => {
      const render = ReactTestRenderer.create(<ProfileView {...props} />);

      const tree = render.toJSON();
      expect(tree).toMatchSnapshot();
    });
  }
});
