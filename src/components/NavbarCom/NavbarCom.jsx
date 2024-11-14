import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavbarCom.css'; // Import the CSS file
import Logo from '/LOGO_MO_GLOBE_transparent.png';

const NavbarCom = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="header-nav">
            <div className="dark-cyan-background" />
            <div className="container">
                <nav className="nav">
                    <Link className="Logo" to="/">
                        {/*<img src={Logo} alt="Logo" className="logo-image" />*/}
                        <h1>MO GLOBE TRUCKING
                        </h1>
                    </Link>
                    <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/trucks" onClick={closeMobileMenu}>Trucks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/apply" onClick={closeMobileMenu}>Apply Now</Link>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <button className="toggle-mobile-button" onClick={handleToggleMobileMenu}>
                            {mobileMenuOpen ? (
                                <FontAwesomeIcon className="burger" icon={faAlignRight} />
                            ) : (
                                <FontAwesomeIcon className="burger" icon={faAlignJustify} />
                            )}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavbarCom;
