import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostList from './components/PostList';
import Show from './components/Show';
import NewPost from './components/NewPost';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
    <Route path="posts/new" componenet={NewPost} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
