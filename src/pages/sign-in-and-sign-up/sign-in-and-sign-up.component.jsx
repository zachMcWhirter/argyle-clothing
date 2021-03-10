import React from "react";

import SignIn from "../../components/sign-in/sign-in.component"

import "./sign-in-and-sign-up.styles.scss";

  // Use a functional component here because we want the state to live at 
  // a lower level - (in the sign-in  &  sign-up components respectively)
const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

export default SignInAndSignUp;