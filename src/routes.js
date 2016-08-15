import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import New from './containers/new';
import Show from './containers/show';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import RequireAuth from './containers/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

  </Route>
);
