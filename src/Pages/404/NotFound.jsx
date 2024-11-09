import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterCom from '../../components/FooterCom/FooterCom.jsx';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirects to the home page
    };

    return (
        <>
            <div className="not-found-container">
                <h1 className="not-found-heading">4 <h1 className="not-found-heading-0">0</h1>   4</h1>
                <p className="not-found-subheading">Oops! Page not found.</p>
                <p className="not-found-description">
                    Let’s get you to where you need to be.
                </p>
                <button className="go-home-button" onClick={handleGoHome}>
                    Back to home
                </button>
            </div>
            <FooterCom />
        </>
    );
};

export default NotFound;
