import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Login.css';

const Login = props => {

    const [form, setValues] = useState({
        email: '',
        password: '',
    });

    const handleInput = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        props.history.push('/');
    };

    return (

        <div className="Login-container centrado">
            <div className="brand-section centrado">
                <h1>Web Chat App</h1>
            </div>
            <div className="login-section centrado">
                <div className="login centrado">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} >

                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email-input" 
                            placeholder="example@example.com"
                            onChange={handleInput}
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password-input" 
                            placeholder="********"
                            onChange={handleInput}
                        />

                        <button>Login</button>
                        
                    </form>
                    <p>Don't have an account? <Link to="/signin">Join now</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
