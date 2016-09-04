import React, { Component } from 'react';
import { connect } from 'react-redux';
let FontAwesome = require('react-fontawesome');
import { signoutUser } from '../actions/index.js';

import { Link } from 'react-router';


// function based "dumb" component with no state
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showButton: '' };
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleSignOut() {
    this.props.signoutUser();
  }
  renderSignOut() {
    if (this.props.authenticated) {
      return <button onClick={this.handleSignOut}>Sign Out</button>;
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div id="nav-bar">
        <Link to="/"><button>
          Home <FontAwesome id="fa-icon"
            className="home"
            name="home"
          />
        </button></Link>
        <Link to="posts/new"><button>New Post</button></Link>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        {this.renderSignOut()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
