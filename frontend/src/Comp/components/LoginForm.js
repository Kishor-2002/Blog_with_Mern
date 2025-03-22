import React, { useState } from 'react';

const LoginForm = () => {
  
    const [formType, setFormType] = useState('signIn');
    const [formData, setFormData] = useState({ username: '', password: '' });

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
        const endpoint = formType === 'signIn' ? '/admin' : '/register';
        
        try {
            await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            // Handle successful authentication or registration
            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <h3>{formType === 'signIn' ? 'Sign In' : 'Register'}</h3>

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

                <input type="submit" value={formType === 'signIn' ? 'Login' : 'Register'} className="btn" />
            </form>

            <button onClick={() => setFormType(formType === 'signIn' ? 'register' : 'signIn')}>
                {formType === 'signIn' ? 'Need an account? Register' : 'Already have an account? Sign In'}
            </button>
        </div>
    );
};

export default LoginForm;
