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
        <h2>Github Profile: {this.props.username}</h2>
        <div>
          <Query query={GET_USER}>
            {({ loading, error, data }) => {
              if (loading) {
                return <div>Loading...</div>;
              }
              if (error) {
                return (
                  <div>
                    Error: Unable to load user {`${this.props.username}`}
                  </div>
                );
              }

              return <div>Github ID: {data.user.id}</div>;
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default ProfileView;
