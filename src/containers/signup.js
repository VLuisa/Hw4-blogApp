import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index.js';
import { Link } from 'react-router';


class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { title: '', tags: '', content: '' };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.handleCreatePost = this.handleCreatePost.bind(this);
  }
  onTitleChange(event) {
    // console.log(event.target.value);
    this.setState({ title: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleCreatePost() {
    this.props.createPost(
      { title: this.state.title, tags: this.state.tags, content: this.state.content }
    );
  }

  render() {
    return (
      <div>
        <span id="page-header">Sign Up</span>
        <div id="newPostform">
          <input id="input-style" onChange={this.onTitleChange} placeholder={"Post title..."} />
          <input id="input-style" onChange={this.onTagsChange} placeholder={"Post tags..."} />
          <textarea id="input-content" onChange={this.onContentChange} placeholder={"Content title..."} />
        </div>
        <div id="show-buttons">
          <button onClick={this.handleCreatePost}>Create Post</button>
          <Link to="/"><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupUser })(New);
