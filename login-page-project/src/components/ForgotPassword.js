import React, { useState } from 'react';
import { validateSecurityAnswer } from './Validation';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = () => {
        const isValid = validateSecurityAnswer(email, securityAnswer);
        if (isValid) {
            // Update the password in your storage
            alert('Password reset successful!');
        } else {
            setError('Invalid security answer');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Security Answer"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
            />
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default ForgotPassword;