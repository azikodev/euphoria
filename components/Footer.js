import React from 'react';

const Footer = () => {
    return (
        <nav>
            <div className="Footer-container">
                <h1 className="logo">Logo</h1>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Footer;
