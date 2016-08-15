import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index.js';
import { Link } from 'react-router';


class SignUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '' };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  onEmailChange(event) {
    // console.log(event.target.value);
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleSignUp() {
    this.props.signupUser(
      { email: this.state.email, password: this.state.password }
    );
  }
  render() {
    return (
      <div>
        <span id="page-header">Sign Up</span>
        <div id="newPostform">
          <input id="input-style" onChange={this.onEmailChange} placeholder={"Username..."} />
          <input id="input-style" onChange={this.onPasswordChange} placeholder={"Password..."} />
        </div>
        <div id="show-buttons">
          <button onClick={this.handleSignUp}>Sign Up</button>
          <Link to="/"><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupUser })(SignUp);
