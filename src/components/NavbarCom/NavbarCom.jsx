import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavbarCom.css'; // Import the CSS file

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
        <header className="header">
            <div className="dark-cyan-background" />
            <div className="container">
                <nav className="nav">
                    <Link className="Logo" to="/">
                        {/*<img src={[currentLogoIndex]} alt="Logo" className="logo-image" />*/}
                        logo
                    </Link>
                    <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/job" onClick={closeMobileMenu}>Job Offer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</Link>
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
