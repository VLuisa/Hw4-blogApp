import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (this.props.posts === null) {
      return <div>No posts to show</div>; // empty
    } else {
      return this.props.posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`posts/${post.id}`}>
              <div id="post-list">
                <h2>{post.title}</h2>
                <p>{post.tags}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2>All Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    // count: state.count,
    posts: state.posts.all,
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPosts })(Home);
