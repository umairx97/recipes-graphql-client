import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../../queries";
import { withRouter } from 'react-router-dom'
import Error from "../Error";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

export class Signup extends Component {
  state = { ...initialState };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleSubmit = async (event, signupUser) => {
    event.preventDefault();
    signupUser().then(({ data }) => {
      localStorage.setItem("token", data.signupUser.token)
      this.clearState();
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;

    const isInvalid =
      !username || !email || !password || passwordConfirmation !== password;

    return isInvalid;
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
                <button
                  disabled={loading || this.validateForm()}
                  type="submit"
                  className="button-primary"
                >
                  Submit
                </button>
                {error && <p>{error.message}</p>}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Signup);
