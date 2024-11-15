import React from 'react';
import './FooterCom.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <h2 className="footer-logo">MO GLOBE TRUCKING</h2>
                    <p className="footer-description">
                        Streamlining Your Supply Chain, One Shipment at a Time
                    </p>
                    <div className="footer-contact">
                        <p>Email: info@moglobetrucking.com</p>
                        <p>Call Us: (512) 787-0305</p>
                        <p>Address: 5203 Golden Gate Dr Killeen, TX 76549</p>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="links-section">
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/job">Job</a></li>
                            <li><a href="/trucks">Pricing</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="links-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/service">Turnkey Services</a></li>
                            <li><a href="/service">Fleet Services</a></li>
                            <li><a href="/service">Accounting Services</a></li>
                            <li><a href="/service">Safety Services</a></li>
                            <li><a href="/service">Dispatch</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
