import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, username, password} = this.state;

    axios
      .post(
        'http://localhost:5000/api/users/login', //change url
        {
          user: {
            email: email,
            username: username,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.message === 'Success! Logging In...'){
            this.props.handleSuccessfulAuth(response.data);
        }
        console.log("login response", response);
      })
      .catch((error) => {
        console.log("login error", error.response);
      });
    console.log("form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Status: {this.props.loggedInStatus}</h3>
        <form onSubmit={this.handleSubmit}>
        <div class="logo">
            Interv-You
        </div>
        <div class="container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
