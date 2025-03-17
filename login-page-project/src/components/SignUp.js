import React, { useState } from 'react';
import { saveUser } from './Validation';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long and contain a number');
            return;
        }

        saveUser({ email, password, securityQuestion, securityAnswer });
        alert('Sign up successful!');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Security Question:</label>
                    <input 
                        type="text" 
                        value={securityQuestion} 
                        onChange={(e) => setSecurityQuestion(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Security Answer:</label>
                    <input 
                        type="text" 
                        value={securityAnswer} 
                        onChange={(e) => setSecurityAnswer(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;