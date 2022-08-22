import React from "react";
import AuthForm from "./AuthForm";

function SignIn() {
  const noDisplay = {
    display: "none",
  };
  return (
    <>
      <AuthForm
        usernameInputDisplay={noDisplay}
        confirmPasswordInputDisplay={noDisplay}
        firstButton={"Sign Up"}
        secondButton={"Sign Up with Google"}
      />
    </>
  );
}

export default SignIn;
