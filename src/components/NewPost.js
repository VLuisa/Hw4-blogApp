import React, { Component } from 'react';
import pageHeader from './pageHeader';

// example class based component (smart component)
class NewPost extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <pageHeader />
        {this.props.children}
      </div>
    );
  }
}

export default NewPost;
