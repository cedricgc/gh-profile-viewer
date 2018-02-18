import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Input the Github user to display</h2>
          <section>
            <div>
              <label for="username">
                <span>Username: </span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                data-test-id="username"
              />
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default UserForm;
