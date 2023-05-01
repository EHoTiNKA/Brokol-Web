import React from "react";
import "./styles/SignInModal.scss";
import SignInIcon from "../widgets/SignInIcon";

const SignInModal = () => {
  return (
    <div className="signUpModal">
      <div className="signUpForm">
        <h1>SIGN IN</h1>
      </div>
      <SignInIcon />
      <div className="secondGridModal">
        <div className="logInInvitation">
          <h2>Welcome Back</h2>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
