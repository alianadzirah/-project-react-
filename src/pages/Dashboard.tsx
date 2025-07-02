import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Navbar from "../components/Navbar";
import logo from '../assets/controller.png'
import logout from '../assets/icon/logout.png'

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const getLand = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/-project-react-");
  };

  return (
    <div>

      <div className="main-container">
        <div className="first-container">
          <span className="title">Welcome to</span>
          <span className="title"><span style={{ fontSize: '90px', color: 'var(--vistablue)' }}>Keebs</span></span>
          <div className="second-container">
            <span className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span>
          </div>
          <button className="signup-button" onClick={getLand}>
            Logout &nbsp;
            <img src={logout} width={'20px'} alt="Logo" />
          </button>
        </div>
        <img src={logo} className="image-h" alt="Logo" />
      </div>
    </div>
  );
};

export default Dashboard;
