import React from 'react';

import { Link } from 'react-router';


// function based "dumb" component with no state
const NavBar = () => {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="posts/new"> New Post</Link>
    </div>
  );
};


export default NavBar;
