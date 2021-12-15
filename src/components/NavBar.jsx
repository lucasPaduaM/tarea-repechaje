import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <Link to="/home">Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Link to="/posts">Ver posts</Link>
  </div>
);

export default NavBar;
