import React from 'react';
import './bootstrap.min.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><img src="/images/pluralsight-logo.png" alt="test" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Authors">Authors</a>
                    </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Header;