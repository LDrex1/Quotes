import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import devices from "./Devices";
import AuthForm from "./AuthForm";
import backgroundImages from "./BackgroundImages";

function SignIn() {
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
    console.log("second");

    return () => {
      console.log("cleanUp");
      clearInterval(changeImage);
    };
  }, [image]);

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
        secondButton={"Sign In with Google"}
      />
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-out 900ms;
`;
