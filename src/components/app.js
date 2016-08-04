import React, { Component } from 'react';
import NavBar from './NavBar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div id="whole-blog">
        <div id="header-nav">
          <NavBar />
          <div id="blog-name">
            <p>B</p>
            <p>L</p>
            <p>O</p>
            <p>G</p>
          </div>
        </div>
        <div id="main-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
