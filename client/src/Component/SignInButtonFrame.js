import React from 'react';

export const SignInButtonFrame = () => {
  return (
    <div className="sign-in-button-frame">
      <div className="sign-in-to">Sign in to your account</div>
      <div className="register-new-account-frame">
        <div className="frame-parent">
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="frame-inner" />
            <div className="rectangle-container">
              <div className="frame-child1" />
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              <input className="username" placeholder="Username" type="text" />
            </div>
          </div>
          <div className="frame-div">
            <div className="frame-child2" />
            <img
              className="image-4-icon"
              loading="eager"
              alt=""
              src="/image-4@2x.png"
            />
            <div className="password">
              <p className="password1">Password</p>
            </div>
          </div>
          <div className="frame-wrapper">
            <button className="frame-button">
              <div className="frame-child3" />
              <div className="login1">Login</div>
              </button>
          </div>
        </div>
        <div className="forgot-password-click-here-to-wrapper">
          <div className="forgot-password-click">
            Forgot Password click here to reset
          </div>
        </div>
      </div>
      <button className="forgot-password-frame">
        <div className="forgot-password-frame-child" />
        <div className="register-new-account">Register New Account</div>
      </button>
    </div>)}

    export default SignInButtonFrame;