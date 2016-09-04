import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index.js';
import { Link } from 'react-router';


class SignIn extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '', author: '' };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  onEmailChange(event) {
    // console.log(event.target.value);
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onUsernameChange(event) {
    this.setState({ author: event.target.value });
  }
  handleSignIn() {
    this.props.signinUser(
      { email: this.state.email, password: this.state.password, author: this.state.author }
    );
  }
  render() {
    return (
      <div>
        <span id="page-header">Sign In</span>
        <div id="newPostform">
          <input id="input-style" onChange={this.onEmailChange} placeholder={"Email..."} />
          <input id="input-style" onChange={this.onPasswordChange} placeholder={"Password..."} />
          <input id="input-style" onChange={this.onUsernameChange} placeholder={"Username..."} />

        </div>
        <div id="show-buttons">
          <button onClick={this.handleSignIn}>Sign In</button>
          <Link to="/"><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinUser })(SignIn);
