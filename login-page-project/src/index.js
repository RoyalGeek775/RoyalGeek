import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import './styles/styles.css';

const App = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleShowSignUp = () => {
        setShowLogin(false);
        setShowSignUp(true);
        setShowForgotPassword(false);
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignUp(false);
        setShowForgotPassword(false);
    };

    const handleShowForgotPassword = () => {
        setShowLogin(false);
        setShowSignUp(false);
        setShowForgotPassword(true);
    };

    return (
        <div className="container">
            {showLogin && <Login onForgotPassword={handleShowForgotPassword} />}
            {showSignUp && <SignUp />}
            {showForgotPassword && <ForgotPassword />}
            <div>
                {showLogin && <button onClick={handleShowSignUp}>Sign Up</button>}
                {showSignUp && <button onClick={handleShowLogin}>Login</button>}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));