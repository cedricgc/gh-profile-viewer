import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Input the Github user to display</h2>
          <section>
            <div>
              <label>
                <span>Username: </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  data-test-id="username"
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="submit" />
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default UserForm;
