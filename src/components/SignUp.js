import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "./../firebase-config";
import AuthForm from "./AuthForm";

function SignUp() {
  const [formValues, updateFormValues] = useState({});
  const { username, email, password, confirmPassword } = formValues;
  const usernameInputDisplay = {};
  const confirmPasswordInputDisplay = {};

  const createUser = async (ev) => {
    ev.preventDefault();
    let userUid = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const { user } = userCred;
        return user.uid;
      })
      .catch((err) => console.log(err.code, err.line));
  };
  return (
    <>
      <Wrapper>
        <AuthForm
          usernameInputDisplay={usernameInputDisplay}
          confirmPasswordInputDisplay={confirmPasswordInputDisplay}
          firstButton={"Sign Up"}
          secondButton={"Sign Up with Google"}
          formValues={formValues}
          updateFormValues={updateFormValues}
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
