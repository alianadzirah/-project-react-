import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Navbar from "../components/Navbar";
import logo from '../assets/controller.png'

const Landing: React.FC = () => {
    const navigate = useNavigate();

    const getSignin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/signin");
    };

    const getSignup = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/signup");
    };

    return (
        <div>
            <div className="header">
                <Navbar />
            </div>

            <div className="main-container">
                <div className="first-container">
                    <span className="title">We create</span>
                    <span className="title"><span style={{color: 'var(--vistablue)'}}>solutions</span> for</span>
                    <span className="title">your business</span>
                    <div style={{ width: '40vw' }}>
                        <span className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span>
                    </div>
                    <br />
                    <br />
                    <button className="signup-button" onClick={getSignup}>Get Started</button>
                    <button className="signin-button-land" onClick={getSignin}>Sign In</button>
                </div>
                <img src={logo} className="image-h" alt="Logo" />
            </div>
        </div>
    );

};

export default Landing;
