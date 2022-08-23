import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { auth } from "./../firebase-config";
import AuthForm from "./AuthForm";

function SignUp() {
  const usernameInputDisplay = {};
  const confirmPasswordInputDisplay = {};
  return (
    <>
      <Wrapper>
        <AuthForm
          usernameInputDisplay={usernameInputDisplay}
          confirmPasswordInputDisplay={confirmPasswordInputDisplay}
          firstButton={"Sign Up"}
          secondButton={"Sign Up with Google"}
        />
      </Wrapper>
    </>
  );
}

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-out 900ms;
`;
