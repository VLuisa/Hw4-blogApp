import React, { Component } from 'react';

// example class based component (smart component)
class PostList extends Component {
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

export default PostList;
