import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/GetStarted.css';

const GetStarted = () => (

    <div className="Home-container">
        <h1>Web Chat App</h1>
        <h2>Get Started!</h2>
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/signin" className="signin-button">Sign In</Link>
    </div>
);

export default GetStarted;
