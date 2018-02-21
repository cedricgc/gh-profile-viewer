import React, { Component } from 'react';
import UserForm from './UserForm';
import ProfileView from './ProfileView';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
  }

  handleUsernameSubmit(username) {
    console.log(`Submitted username: ${username}`);
    this.setState({ username });
  }

  render() {
    return (
      <div className="App">
        <h1>Github Profile Viewer</h1>
        <UserForm onUsernameSubmit={this.handleUsernameSubmit} />
        <ProfileView username={this.state.username} />
      </div>
    );
  }
}

export default App;
