import React, { Component } from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

class ProfileView extends Component {
  render() {
    if (this.props.username === '') {
      return null;
    }

    const GET_USER = gql`
      query {
        user(login: "${this.props.username}") {
          id
          name
          url
        }
      }
    `;

    return (
      <div id="gh-profile" data-test-id="profile-container">
        <Query query={GET_USER}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div>
                  <span>Loading...</span>
                </div>
              );
            }
            if (error) {
              return (
                <div>
                  <span>
                    Error: Unable to load user {`${this.props.username}`}
                  </span>
                </div>
              );
            }

            return (
              <div>
                <h2>Github Profile: {this.props.username}</h2>
                <div>
                  <span>Github ID: {data.user.id}</span>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default ProfileView;
