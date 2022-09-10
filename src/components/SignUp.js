import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "./../firebase-config";
import AuthForm from "./AuthForm";
import backgroundImages from "./BackgroundImages";
import FooterG from "./Footer";

const SignUpContext = React.createContext();
function SignUp() {
  const [errMsg, setErrMsg] = useState("");
  const [congrats, setCongrats] = useState(false);
  const { signUp: signUpBackgrounds } = backgroundImages;
  const [formValues, updateFormValues] = useState({});
  const { username, email, password, confirmPassword } = formValues;
  const usernameInputDisplay = {};
  const confirmPasswordInputDisplay = {};

  const navigate = useNavigate();
  const [image, setImage] = useState(signUpBackgrounds[0]);
  let backgroundsLength = signUpBackgrounds.length;

  useEffect(() => {
    const changeImage = setInterval(
      () =>
        setImage(
          (currentImage) =>
            signUpBackgrounds[~~(Math.random() * backgroundsLength)]
        ),
      15000
    );

    return () => {
      clearInterval(changeImage);
    };
  }, [image]);

  const createUser = async () => {
    console.log("clicked");
    setErrMsg("");
    if (password === confirmPassword) {
      let userUid = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          const { user } = userCred;
          return user.uid;
        })
        .catch((err) => console.log(err.code, err.line));
      await updateProfile(auth.currentUser, { displayName: username });
      setCongrats(true);
      setTimeout(() => {
        setCongrats(false);
        navigate("/");
      }, 3500);
      console.log("showh3");
      console.log("created");
    } else {
      setErrMsg("Password and Confirm Password do not match");
    }
  };

  return (
    <>
      <Wrapper image={image}>
        <AuthForm
          usernameInputDisplay={usernameInputDisplay}
          confirmPasswordInputDisplay={confirmPasswordInputDisplay}
          firstButton={"Sign Up"}
          firstButtonHandler={createUser}
          secondButton={"Sign Up with Google"}
          // secondButtonHandler={}
          formValues={formValues}
          updateFormValues={updateFormValues}
          errMsg={errMsg}
          congrats={congrats}
        />
      </Wrapper>
      <FooterG />
    </>
  );
}

export default SignUp;

const Wrapper = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 50px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-out 1200ms;
`;
