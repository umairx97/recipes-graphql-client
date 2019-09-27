import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import Error from "../Error";

const initialState = {
    username: "",
    password: "",
};

export class Signin extends Component {
    state = { ...initialState };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    clearState = () => {
        this.setState({ ...initialState });
    };

    handleSubmit = async (event, signinUser) => {
        event.preventDefault();
        signinUser().then(({ data }) => {
            localStorage.setItem("token", data.signinUser.token)
            this.clearState();
        });
    };

    validateForm = () => {
        const { username, password } = this.state;
        const isInvalid = !username || !password
        return isInvalid;
    };

    render() {
        const { username, password } = this.state;
        return (
            <div className="App">
                <h2 className="App"> Signup</h2>
                <Mutation
                    mutation={SIGNIN_USER}
                    variables={{ username, password, }}
                >
                    {(signinUser, { data, loading, error }) => {
                        return (
                            <form
                                className="form"
                                onSubmit={event => this.handleSubmit(event, signinUser)}
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
                                    value={password}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
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

export default Signin;
