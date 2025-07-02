import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import "./Signing.css";
import logo from '../assets/icon.png'
import google from '../assets/icon/google.png'
import facebook from '../assets/icon/facebook.png'
import user from '../assets/icon/user.png'
import lock from '../assets/icon/padlock.png'
import email from '../assets/icon/email.png'

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        <img onClick={getLand} src={logo} className="big-icon" alt="Logo" />
      </div>

      <div className="signin-form">
        <div className="box">
          <span className="sub">Already have an account? <span className="links" onClick={getSignin}>Sign in</span></span>
          <h2>Sign Up</h2>
          <form onSubmit={getSignup}>
            <span className="label">Name</span>
            <div className="signin">
              <img src={user} width={'20px'} alt="Logo" />
              <input type="text" placeholder="Full name" required />
            </div>
            <span className="label">Email address</span>
            <div className="signin">
              <img src={email} width={'20px'} alt="Logo" />
              <input type="text" placeholder="Email address" required />
            </div>
            <span className="label">Password</span>
            <div className="signin">
              <img src={lock} width={'20px'} alt="Logo" />
              <input type={showPassword ? 'text' : 'password'} placeholder="password" required />
              <div
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={23} /> : <Eye size={23} />}
              </div>
            </div>
            <span className="label">
              <input
                className="custom-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              I agree to the Platform's Terms of Services and Privacy Policies
            </span>
            <button type="submit" disabled={!isChecked}>Create account</button>
          </form>

          <span className="footer-label">or sign up with</span>
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
