import React from 'react';
import { ParentFrame } from './ParentFrame';
import { SignInButtonFrame } from './SignInButtonFrame';



 export const LoginPageP = () => {
  return (
    <div className="login-page-p">
      <img className="glow-icon" alt="" src="/glow@2x.png" />
      <img className="image-icon" alt="" src="/image@2x.png" />
      <ParentFrame />
      <div className="login-page-p-inner">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="login-form-frame" />
          <div className="username-frame">
            <h1 className="login">Login</h1>
          </div>
          <div className="frame" />
          <SignInButtonFrame />
        </div>
      </div>
    </div>
  );
};

export default LoginPageP;