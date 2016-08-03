import React, { Component } from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
class pageHeader extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { type: [] };
  }

  renderHeader() {
    const { type } = this.props;
    if (type === 'posts_list') {
      return <Link to="posts/new"> New Post </Link>;
    } else if (type === 'posts_new') {
      return <Link to="/">Back to Home</Link>;
    } else {
      return (
        <Link to="/">Back to Home</Link>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    );
  }
}

export default pageHeader;
