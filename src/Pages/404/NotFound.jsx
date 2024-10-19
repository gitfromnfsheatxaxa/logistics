// NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages.css'; // Ensure the CSS file is correctly referenced

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirects to the home page
    };

    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
            <button className="go-home-button" onClick={handleGoHome}>
                Go to Home
            </button>
        </div>
    );
};

export default NotFound;
