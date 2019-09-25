import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";
export class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    passwordConfirmation: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(data => {
      console.log(data);
    });
  };

  render() {
    const { username, password, passwordConfirmation, email } = this.state;
    return (
      <div className="App">
        <h2 className="App"> Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, password, email }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <input
                  onChange={this.handleChange}
                  value={username}
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <input
                  onChange={this.handleChange}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  onChange={this.handleChange}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  onChange={this.handleChange}
                  value={passwordConfirmation}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                />
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
