import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from '../assets/icon.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const getSignin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signin");
  };

  const getSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const getLand = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/-project-react-");
  };

  const goTo = (url: string) => {
    window.open(url, '_blank');
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img onClick={getLand} src={logo} style={{ cursor: 'pointer' }} alt="Logo" width={'50%'} />
      </div>

      <div className="signin-form">
        <div className="box">
          <span className="sub">Already have an account? <span className="links" onClick={getSignin}>Sign in</span></span>
          <h2>Sign Up</h2>
          <form onSubmit={getSignup}>
            <span className="label">Name</span>
            <input type="text" placeholder="Username" required />
            <span className="label">Email address</span>
            <input type="text" placeholder="Email address" required />
            <span className="label">Password</span>
            <input type="password" placeholder="Password" required />
            <span className="label" style={{display: 'flex', alignItems: 'center'}}><input
              style={{ width: '20px', cursor: 'pointer'}}
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />&nbsp; I agree to the Platform's Terms of Services and Privacy Policies</span>
            <button type="submit" disabled={!isChecked}>Create account</button>
          </form>

          <span style={{ fontFamily: 'Poppins', textAlign: 'center', marginTop: '40px', marginBottom: '10px' }}>or sign up with</span>
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
