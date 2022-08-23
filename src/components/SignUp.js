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
  display: flex;
  justify-content: center;
  align-items: center;
`;
