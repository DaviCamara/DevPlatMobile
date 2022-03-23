
import React from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css'

const navbar= () =>{
  return (
  <div className= "navbar navbar-dark bg-dark">
      <img className='logo' src=" spotify-logo.png" alt="Logo" />
      <h1 className="nome-navbar">Spotify</h1>

    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/faq">Faq</Link>
    </li>
  </div>
  );
}

export default navbar;