import React from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getUser = gql`
  query getUser($username: String!) {
    user(login: $username) {
      id
      name
      url
    }
  }
`;

export function ProfileView({ username, data }) {
  if (username === '') {
    return null;
  }

  // Unpack after username check as data can be null if query is skipped.
  const { user, loading, error } = data;

  let content;
  if (loading) {
    content = <h2>Loading...</h2>;
  } else if (error) {
    content = <h2>Error: Unable to load user {username}</h2>;
  } else {
    content = (
      <div>
        <h2>Github Profile: {username}</h2>
        <div>
          <span>Github ID: {user.id}</span>
        </div>
      </div>
    );
  }

  return (
    <div id="gh-profile" data-test-id="profile-container">
      <div>{content}</div>
    </div>
  );
}

export default graphql(getUser, {
  // Skip network request on initial state
  skip: (ownprops) => ownprops.username === '',
})(ProfileView);
