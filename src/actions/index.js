import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-simple-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=l_vasquez';

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/posts`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POSTS', payload: { posts: response.data } });
    }).catch(error => {
      // hit an error
    });
  };
}

export function createPost(post) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
      // can now dispatch stuff
    axios.post(`${ROOT_URL}/posts/`, post).then(response => {
      browserHistory.push('/');
    }).catch(error => {
        // hit an error
    });
  };
}


export function fetchPost(id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/posts/${id}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POST', payload: { post: response.data } });
    }).catch(error => {
      // hit an error
    });
  };
}

export function updatePost(post, id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
      // can now dispatch stuff
    axios.put(`${ROOT_URL}/posts/${id}`, post).then(response => {
      dispatch(fetchPost(id));
    }).catch(error => {
        // hit an error
    });
  };
}

export function deletePost(id) {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
      // can now dispatch stuff
    axios.delete(`${ROOT_URL}/posts/${id}`).then(response => {
      // do something with response.data  (some json)
      browserHistory.push('/');
    }).catch(error => {
      // hit an error
    });
  };
}

// USER AUTH FUNCTION CREATORS

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
}


export function signupUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
}


// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}
