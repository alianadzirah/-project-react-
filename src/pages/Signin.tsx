import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import logo from '../assets/icon.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const getSignin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const getSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup");
  };

  const getLand = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/-project-react-");
  };

  const goTo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img onClick={getLand} src={logo} className="big-icon" alt="Logo" />
      </div>

      <div className="signin-form">
        <div className="box">
          <span className="sub">Don't have an account? <span className="links" onClick={getSignup}>Sign up</span></span>
          <h2>Sign In</h2>
          <span style={{ fontFamily: 'Poppins', marginTop: '10px', marginBottom: '10px' }}>Sign in with Open account</span>
          <div className="other-button-container">
            <button type="button" onClick={() => goTo('https://google.com')}>
              <img src={google} alt="Logo" height={'20vh'} />
              &nbsp;&nbsp;
              Google
            </button>
            <button type="button" onClick={() => goTo('https://facebook.com')}>
              <img src={facebook} alt="Logo" height={'20vh'} />
              &nbsp;&nbsp;
              Facebook
            </button>
          </div>
          <span style={{ fontFamily: 'Poppins', marginTop: '100px', marginBottom: '10px' }}>or continue with email address</span>
          <form onSubmit={getSignin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <span className="links" style={{width: '95%',textAlign: 'right'}} onClick={getLand}>Forgot password?</span>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
