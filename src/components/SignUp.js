import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { auth } from "./../firebase-config";
import AuthForm from "./AuthForm";

function SignUp() {
  console.log(auth);
  console.log(process.env);
  const usernameInputDisplay = {};
  const confirmPasswordInputDisplay = {};
  return (
    <>
      <AuthForm
        usernameInputDisplay={usernameInputDisplay}
        confirmPasswordInputDisplay={confirmPasswordInputDisplay}
        firstButton={"Sign Up"}
        secondButton={"Sign Up with Google"}
      />
    </>
  );
}

export default SignUp;
