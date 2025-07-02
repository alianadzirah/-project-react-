import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Navbar from "../components/Navbar";
import logo from '../assets/controller.png'

const About: React.FC = () => {
  const navigate = useNavigate();

  const getLand = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/-project-react-");
  };

  return (
    <div>

      <div className="main-container">
        <div className="first-container">
          <span className="title">We will</span>
          <span className="title"><span style={{ color: 'var(--vistablue)' }}>coming soon</span> for</span>
          <span className="title">your business</span>
          <div className="second-container">
            <span className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span>
          </div>
          <button className="signup-button" onClick={getLand}>&larr; Back Home</button>
        </div>
        <img src={logo} className="image-h" alt="Logo" />
      </div>
    </div>
  );
};

export default About;
