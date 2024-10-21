// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PasswordCom.css';
//
// const PasswordCom = ({ setIsAuthenticated }) => {
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//
//     const adminPassword = 'admin'; // Replace with your actual admin password
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         if (password === adminPassword) {
//             // If password is correct, set authentication to true and redirect to the admin page
//             setIsAuthenticated(true);
//             navigate('/admin');
//         } else {
//             // If password is incorrect, show error message and navigate back to homepage
//             setError('Incorrect Password');
//             setIsAuthenticated(false);
//             navigate('/');
//         }
//     };
//
//     return (
//         <div className="password-container">
//             <h1>Enter Password</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="password"
//                     placeholder="Enter Your Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="password-input"
//                 />
//                 <button type="submit" className="submit-btn">Submit</button>
//             </form>
//             {error && <p className="error-message">{error}</p>}
//         </div>
//     );
// };
//
// export default PasswordCom;
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./PasswordCom.css"

const PasswordCom = ({setIsAuthenticated}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const ADMIN_PASSWORD = 'admin';

    useEffect(() => {
        const storedPassword = localStorage.getItem('adminPassword');
        if (storedPassword === ADMIN_PASSWORD) {
            navigate('/admin');
            setIsAuthenticated(true)
        }
    }, [navigate]);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log("Entered Password:", password);

        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('adminPassword', password);
            navigate('/admin');
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password. Try again.');
            setIsAuthenticated(false);
            navigate('/');

        }
    };

    return (
        <div className="password-container">
            <h1>Enter Password</h1>
            <form onSubmit={handlePasswordSubmit}>
                <input
                    className="password-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PasswordCom;