import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Signin.css';

const Signin = props => {

    const [form, setValues] = useState({
        email: '',
        name: '',
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

        <div className="Signin-container centrado">
            <div className="brand-section centrado">
                <h1>Web Chat App</h1>
            </div>
            <div className="Signin-section centrado">
                <div className="Signin centrado">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name-input" 
                            placeholder="My Name" 
                            onChange={handleInput} 
                        />
                    
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

                        <button>Sign In</button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
