import React, { Component } from 'react';

class ProfileView extends Component {
  render() {
    return (
      <div id="gh-profile" data-test-id="profile-container">
        <h2>Github Profile: {this.props.username}</h2>
      </div>
    );
  }
}

export default ProfileView;
