import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchPost, updatePost, deletePost } from '../actions/index.js';
import Textarea from 'react-textarea-autosize';
let FontAwesome = require('react-fontawesome');

const EditIcon = (props) => {
  if (props.editing) {
    return (<FontAwesome id="fa-icon"
      className="pencil"
      name="pencil"
      spin
    />);
  } else {
    return (<FontAwesome id="fa-icon"
      className="pencil"
      name="pencil"
    />);
  }
};

class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      editing: false,
    };
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleTagsUpdate = this.handleTagsUpdate.bind(this);
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  handleTitleUpdate(event) {
    this.props.updatePost({ title: event.target.value }, this.props.params.id);
  }
  handleTagsUpdate(event) {
    this.props.updatePost({ tags: event.target.value }, this.props.params.id);
  }
  handleContentUpdate(event) {
    this.props.updatePost({ content: event.target.value }, this.props.params.id);
  }
  handleDelete(props) {
    this.props.deletePost(this.props.params.id);
  }
  renderTitle() {
    if (this.props.post != null) {
      if (this.state.editing) {
        return (
          <div>
            <Textarea value={this.props.post.title} onChange={this.props.onChange} />
            {/* <Textarea value={props.post.tags} onChange={props.onChange} />
            <Textarea value={props.post.content} onChange={props.onChange} />*/}
          </div>
        );
      } else {
        return <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.title || '') }} />;
      }
    } else {
      return <div>fetching post...</div>;
    }
  }

  renderTags() {
    if (this.props.post != null) {
      if (this.state.editing) {
        return (
          <div>
            <Textarea value={this.props.post.tags} onChange={this.props.onChange} />
            {/* <Textarea value={props.post.tags} onChange={props.onChange} />
            <Textarea value={props.post.content} onChange={props.onChange} />*/}
          </div>
        );
      } else {
        return <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.tags || '') }} />;
      }
    } else {
      return <div>fetching post...</div>;
    }
  }
  renderContent() {
    if (this.props.post != null) {
      if (this.state.editing) {
        return (
          <div>
            <Textarea value={this.props.post.content} onChange={this.props.onChange} />
            {/* <Textarea value={props.post.tags} onChange={props.onChange} />
            <Textarea value={props.post.content} onChange={props.onChange} />*/}
          </div>
        );
      } else {
        return <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />;
      }
    } else {
      return <div>fetching post...</div>;
    }
  }

  render() {
    return (
      <div id="displayPost">
        <div onClick={() => { this.setState({ editing: !this.state.editing }); }}>
          <button>Edit <EditIcon editing={this.state.editing} /></button>
        </div>
        <div onClick={() => this.props.deletePost(this.props.params.id)}>
          <button>
            Delete <FontAwesome id="fa-icon"
              className="trash"
              name="trash"
            />
          </button>
        </div>
        <div id="postTitle" onChange={this.handleTitleUpdate}>
          <h1>{this.renderTitle()}</h1>
        </div>
        <div id="postTags" onChange={this.handleTagsUpdate}>
          {this.renderTags()}
        </div>
        <div id="postContent" onChange={this.handleContentUpdate}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Show);
