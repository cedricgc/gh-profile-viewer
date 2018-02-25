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

export function ProfileView({ username, data: { user, loading, error } }) {
  if (username === '') {
    return null;
  }

  return (
    <div id="gh-profile" data-test-id="profile-container">
      {(() => {
        if (loading) {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
        if (error) {
          return (
            <div>
              <h2>Error: Unable to load user {username}</h2>
            </div>
          );
        }

        return (
          <div>
            <h2>Github Profile: {username}</h2>
            <div>
              <span>Github ID: {user.id}</span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default graphql(getUser)(ProfileView);
