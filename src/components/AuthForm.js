import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "./Devices";
import Logo from "./Logo";

function AuthForm(props) {
  const { formType, formValues, updateFormValues, firstButtonHandler, errMsg } =
    props;
  const passwordRef = useRef();
  const [activeElement, setActiveElement] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: "password",
    confirmPassword: "password",
  });

  useEffect(() => {
    const time = setTimeout(() => {
      setActiveElement(false);
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [activeElement]);

  const handleActive = () => {
    setActiveElement(passwordRef.current === document.activeElement);
  };

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    updateFormValues({ ...formValues, [name]: value });
    ev.target.name === "password" &&
      ev.target.checkValidity() &&
      setIsValidPassword(true);
    ev.target.name === "password" &&
      !ev.target.checkValidity() &&
      setIsValidPassword(false);
  };

  const { username, email, password, confirmPassword } = formValues;
  const usernamePattern = "\\b[a-zA-Z_][a-zA-Z_]+\\d*\\b|\\b[a-zA-Z_]\\d\\w*\b";
  const passwordPattern =
    "(?=^.{6,10}$)(=?.*[A-Z])(=?.*\\d*)\\w*|(?=^.{6,10}$)(=?.*\\d*)(=?.*[A-Z])\\w*";

  const onSubmit = (ev) => {
    if (ev.target.checkValidity()) {
      ev.preventDefault();
      firstButtonHandler();
    }
  };

  const handlepasswordVisibility = (name) => {
    console.log(passwordVisibility);
    setPasswordVisibility({
      ...passwordVisibility,
      [name]: passwordVisibility[name] === "text" ? "password" : "text",
    });
  };

  return (
    <>
      <Logo />
      <H3 congrats={props.congrats}>
        Congratulations, Sign up Complete...Please sign In
      </H3>
      <Form onClick={handleActive} onSubmit={onSubmit} formType={formType}>
        <InputGroup>
          <InputDiv style={props.usernameInputDisplay}>
            <Input
              onChange={handleChange}
              name="username"
              type={"text"}
              pattern={usernamePattern}
              placeholder={"Username"}
              title={
                "Username should not start with a number but contain only and at least 2 alphanumeric characters"
              }
              required={props.usernameRequired}
              value={username}
            ></Input>
          </InputDiv>
          <InputDiv className="">
            <Input
              onChange={handleChange}
              name="email"
              type={"email"}
              inputMode={"email"}
              placeholder={"Email"}
              value={email}
              required
            ></Input>
          </InputDiv>
          <InputDiv
            className="input-div"
            title="Password should contain 6-10 characters including a number, and a capital letter"
            passwordActive={activeElement}
          >
            <Input
              className="password"
              ref={passwordRef}
              onChange={handleChange}
              name="password"
              type={passwordVisibility.password}
              title={
                "Password should contain 6-10 characters including a number, and a capital letter"
              }
              placeholder={"Password"}
              pattern={passwordPattern}
              value={password}
              valid={isValidPassword}
              required
            ></Input>
            <i
              onClick={() => handlepasswordVisibility("password")}
              class="fa fa-eye-slash"
            ></i>
          </InputDiv>
          <InputDiv style={props.confirmPasswordInputDisplay}>
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type={passwordVisibility.confirmPassword}
              placeholder={"Confirm password"}
              value={confirmPassword}
              required={props.confirmPasswordRequired}
            ></Input>
            <i
              onClick={() => handlepasswordVisibility("confirmPassword")}
              class="fa fa-eye-slash"
            ></i>
          </InputDiv>
        </InputGroup>
        <P errMsg={errMsg} className="text-center fw-500">
          {errMsg}
        </P>
        <Div className="fw-600">
          {formType === "sign-in" ? (
            <p className="text-center">
              New to the quotes app? click <Link to={"/sign-up"}>here</Link> to
              create an account
            </p>
          ) : (
            <p className="text-center">
              Already have a account? click <Link to={"/"}>here</Link> to sign
              in
            </p>
          )}
        </Div>
        <ButtonsDiv className="">
          <Button type="submit">{props.firstButton}</Button>
          {/* <Button onClick={props.secondButtonHandler} className="second">
            <div className="google-logo">
              <img src={require("../images/google_logo.jpg")}></img>
            </div>
            <div>{props.secondButton}</div>
          </Button> */}
        </ButtonsDiv>
      </Form>
    </>
  );
}

export default AuthForm;

const Form = styled.form`
  border-radius: 8px;
  padding-top: 50px;
  padding-bottom: 10px;
  background: rgb(217, 217, 217, 0.5);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${(props) => (props.formType ? "25px" : "18px")};
  position relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.formType ? "rgb(128, 255, 191)" : "#ffffff"};
    opacity: 0.06;
    pointer-events: none;
  }

  @media ${device.mobileL} {
    width: 70%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${(props) => (props.formType === "sign-in" ? "25px" : "18px")};
`;

const InputDiv = styled.div`
  text-align: center;
  position: relative;
  width: 80%;
  margin: auto;
  i {
    position: absolute;
    right: 1%;
    top: 50%;
    color: grey;
    transform: translatey(-50%);
    font-size: 20px;
  }
  &.input-div::after {
    display: ${(props) => (props.passwordActive ? "block" : "none")};
    z-index: 2;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 17px;
  position: relative;

  &.password {
    border-color: ${({ valid }) => (valid === true ? "#00cc00" : "red")};
    &:focus {
      box-shadow: 0.4px 0px 1.2px 1px
        ${({ valid }) => (valid === true ? "#00ff00" : "crimson")};
    }
  }
  &:focus {
    border: 3px #144f7c;
    box-shadow: 0.4px 0px 1.2px 1px #00ff00;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    &:focus {
      background: #222222;
      color: whitesmoke;
    }
  }
`;

const Div = styled.div`
  a {
    text-decoration: underline;
  }
`;

const P = styled.p`
  display: ${(props) => (props.errMsg ? "block" : "none")};
  color: #e62e00;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
`;

const Button = styled.button`
  &.second {
    padding: 0;
    background: #4285f4;
    display: flex;
    align-items: center;
    color: whitesmoke;
    min-width: 160px;
      div {
        padding 8px 0px;
        text-align: center;
      }
      div.google-logo {
        margin-left: 0.7px;
        margin-right: 6px;
        padding: 1.2px;
        background: #ffffff;
        display: flex;
        align-items: center;
        width: 26px;
        height: 95%;
        aspect-ratio: 0.9;
      }
      
      img {
        width: 100%;
        object-fill: fill;
        height: 80%;
      }
  }
`;

const H3 = styled.h3`
  color: #00ff00;
  width: fit-content;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translatex(-50%);
  opacity: ${({ congrats }) => (congrats ? "1" : "0")};
  transition: opacity ease-out 600ms;
`;
