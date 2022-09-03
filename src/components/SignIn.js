import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./../firebase-config";
import AuthForm, { useFormValues } from "./AuthForm";
import backgroundImages from "./BackgroundImages";

// const SignedInContext = React.createContext();
function SignIn() {
  const navigate = useNavigate();
  const [formValues, updateFormValues] = useState({});

  const { email, password } = formValues;
  const { signIn: signInBackgrounds } = backgroundImages;
  const [image, setImage] = useState(signInBackgrounds[0]);
  let backgroundsLength = signInBackgrounds.length;

  useEffect(() => {
    const changeImage = setInterval(
      () =>
        setImage(
          (currentImage) =>
            signInBackgrounds[~~(Math.random() * backgroundsLength)]
        ),
      15000
    );

    return () => {
      clearInterval(changeImage);
    };
  }, [image]);

  const signInHandler = (ev) => {
    signInWithEmailAndPassword(auth, email, password).then((userCred) => {
      navigate("/quotes");
    });
  };

  const noDisplay = {
    display: "none",
  };
  const notRequired = false;

  return (
    <Wrapper image={image}>
      <AuthForm
        formType={"sign-in"}
        usernameInputDisplay={noDisplay}
        usernameRequired={notRequired}
        confirmPasswordInputDisplay={noDisplay}
        confirmPasswordRequired={notRequired}
        firstButton={"Sign In"}
        firstButtonHandler={signInHandler}
        secondButton={"Sign In with Google"}
        formValues={formValues}
        updateFormValues={updateFormValues}
      />
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 35% 0%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-out 900ms;
`;