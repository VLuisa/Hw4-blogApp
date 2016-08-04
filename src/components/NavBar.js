import React from 'react';
let FontAwesome = require('react-fontawesome');

import { Link } from 'react-router';


// function based "dumb" component with no state
const NavBar = () => {
  return (
    <div id="nav-bar">
      <Link to="/"><button>
        Home <FontAwesome id="fa-icon"
          className="home"
          name="home"
        />
      </button></Link>
      <Link to="posts/new"><button>New Post</button></Link>
    </div>
  );
};


export default NavBar;
