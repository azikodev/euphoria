import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
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

export default Navbar;