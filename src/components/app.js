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
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
