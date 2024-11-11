import React from 'react';
import './ServiiceCom.css'; // Create a CSS file for the styling
import Icon1 from "../../../public/Sheild Icon.png"
import Icon2 from "../../../public/Icon (4).png"
import Icon3 from "../../../public/Icon (3).png"
import Icon4 from "../../../public/Icon (6).png"
import {Link} from "react-router-dom";
const ServiceHomeCom = () => {
    return (
        <div className="service-home-container">
            <div className="service-home-header">
                <p className="service-description">What We Provide</p>
                <h1 className="service-title second-title">Our Services</h1>
            </div>

            <div className="service-categories">
                <div className="service-category-card">
                    <img src={Icon2} alt="Fleet Services Icon" className="category-icon" />
                    <p className="category-title-home">Fleet Services</p>
                    <p className="category-description">Comprehensive fleet management solutions.</p>
                </div>

                <div className="service-category-card">
                    <img src={Icon4} alt="Accounting Services Icon" className="category-icon" />
                    <p className="category-title-home">Accounting Services</p>
                    <p className="category-description">Expert financial services for your business.</p>
                </div>

                <div className="service-category-card">
                    <img src={Icon1} alt="Safety Services Icon" className="category-icon" />
                    <p className="category-title-home">Safety Services</p>
                    <p className="category-description">Ensuring the safety of your drivers and cargo.</p>
                </div>

                <div className="service-category-card">
                    <img src={Icon3} alt="Turnkey Services Icon" className="category-icon" />
                    <p className="category-title-home">Turnkey Services</p>
                    <p className="category-description">Complete solutions for your operational needs.</p>
                </div>
            </div>

            <div className="view-all-services-button">
                <Link to="/services">
                    <button>Click to See All Services</button>

                </Link>
            </div>
        </div>
    );
};

export default ServiceHomeCom;
