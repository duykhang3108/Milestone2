import React, { Component } from 'react';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <div className="form group">
              <label>User name</label>
              <input type="text" data-test="username" className="form-control" placeholder="Enter email" value={this.state.username} onChange={this.handleUserChange} />
          </div>
          <div className="form-group">
              <label>Password</label>
              <input type="password" data-test= "password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-block" value="Log In" data-test="submit">Submit</button>
          <p className="forgot-password text-right">
              Forgot <a href="#">password?</a></p>
        </form>
      </div>
    );
  }
}




     