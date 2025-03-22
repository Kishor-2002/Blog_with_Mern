import React, { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';

const Admin = ({isSignin, setSignIn, loggedIn, setLoggedIn}) => {

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('')

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('')
        const endpoint = isSignin ? '/admin/login' : '/admin/register';
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        
        if(!response.ok){
            setError(response.error)
        }
        if(response.ok){
            setLoggedIn(true)
        }
    };

    return (
        <div>
            <h3>{isSignin ? 'Sign In' : 'Register'}</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username"><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="password"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input type="submit" value={isSignin ? 'Login' : 'Register'} className="btn" />
            </form>

            <button onClick={() => {setSignIn(!isSignin)}}>
            {isSignin ? 'Need an account? Register' : 'Already have an account? Sign In'}
            </button>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Admin;
