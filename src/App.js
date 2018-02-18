import React, { Component } from 'react';
import UserForm from './UserForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github Profile Viewer</h1>
        <UserForm />
      </div>
    );
  }
}

export default App;
