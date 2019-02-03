import React from 'react';
import './bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link"><img src="/images/pluralsight-logo.png" alt="test" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Authors" className="nav-link">Authors</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;