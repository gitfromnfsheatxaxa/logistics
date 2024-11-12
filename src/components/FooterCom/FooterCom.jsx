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
                        <p>Email: contact@logistics.com</p>
                        <p>Call Us: (00) 112 365 489</p>
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
                        <h3>Utility</h3>
                        <ul>
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Licenses</a></li>
                            <li><a href="#">Protected</a></li>
                            <li><a href="#">Not Found</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
