import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { collection, doc, setDoc } from "@firebase/firestore";
import { auth, db } from "./../firebase-config";
import AuthForm from "./AuthForm";

function SignUp() {
  const [formValues, updateFormValues] = useState({});
  const { username, email, password, confirmPassword } = formValues;
  const usernameInputDisplay = {};
  const confirmPasswordInputDisplay = {};

  const navigate = useNavigate();

  const createUser = () => {
    (async () => {
      console.log("clicked");
      if (password === confirmPassword) {
        let userUid = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
          .then((userCred) => {
            const { user } = userCred;
            return user.uid;
          })
          .catch((err) => console.log(err.code, err.line));

        await setDoc(doc(db, "Users", userUid), { username: username });
        navigate("/");
        console.log("created");
      } else {
        console.error("Password and Confirm Password do not match");
      }
    })();
  };
  return (
    <>
      <Wrapper>
        <AuthForm
          usernameInputDisplay={usernameInputDisplay}
          confirmPasswordInputDisplay={confirmPasswordInputDisplay}
          firstButton={"Sign Up"}
          firstButtonHandler={createUser}
          secondButton={"Sign Up with Google"}
          // secondButtonHandler={}
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
