import React, { Component } from 'react';
import pageHeader from './pageHeader';

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
        <pageHeader type="posts_list"></pageHeader>
        {this.props.children}
      </div>
    );
  }
}

export default App;
