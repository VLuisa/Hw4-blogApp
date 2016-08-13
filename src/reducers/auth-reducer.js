import { ActionTypes } from '../actions';

const AuthReducer = (posts = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...posts, all: action.payload.posts };
    case ActionTypes.FETCH_POST:
      return { ...posts, post: action.payload.post };
    default:
      return posts;
  }
};

export default AuthReducer;
