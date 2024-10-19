import React from 'react';
import './AboutCom.css'; // Make sure to create this CSS file

const AboutCom = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-header">About Us</h1>
                <p className="about-description">
                    Welcome to our company! We are dedicated to providing the best services and solutions to our customers. Our team of experts works tirelessly to ensure customer satisfaction and success.
                </p>
                <p className="about-description">
                    With years of experience in the industry, we understand the challenges businesses face and strive to offer tailored solutions that meet their unique needs.
                </p>
                <p className="about-description">
                    Our commitment to innovation and excellence sets us apart, and we are excited to continue serving our clients with integrity and passion.
                </p>
            </div>
            <div className="about-image">
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="About Us"
                    className="about-img"
                />
            </div>
        </div>
    );
};

export default AboutCom;
