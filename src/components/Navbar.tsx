import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import logo from '../assets/logo.png'

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const getSignin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/signin");
    };

    const getLand = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/-project-react-");
    };

    return (
        <div className="navbar">
            <div className="container">
                <img onClick={getLand} src={logo} className='logo' alt="Logo" />
                <div className='tab'>
                    <Link className='tab-menu' to="/-project-react-">Home</Link>
                    <Link className='tab-menu' to="/about">About</Link>
                    <a
                        className="tab-menu"
                        href="mailto:aliaanadzirahh00@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact
                    </a>
                </div>
                <button className="signin-button" onClick={getSignin}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
