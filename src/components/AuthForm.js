import { async } from "@firebase/util";
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

  const handleActive = () => {
    setActiveElement(passwordRef.current === document.activeElement);
    console.log(passwordRef.current);
    console.log(document.activeElement, "active");
  };

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    updateFormValues({ ...formValues, [name]: value });
  };

  const { username, email, password, confirmPassword } = formValues;
  console.log(email, password);
  const usernamePattern = "\\b[a-zA-Z_][a-z_]+\\d*\\b|\\b[a-zA-Z_]\\d\\d+\b";
  const passwordPattern =
    "(?=^.{6,10}$)(=?.*[A-Z])(=?.*\\d*)\\w*|(?=^.{6,10}$)(=?.*\\d*)(=?.*[A-Z])\\w*";

  const onSubmit = (ev) => {
    if (ev.target.checkValidity()) {
      ev.preventDefault();
      firstButtonHandler();
      console.log("very valid");
    }
  };

  return (
    <>
      <Logo />
      <Form onClick={handleActive} onSubmit={onSubmit} formType={formType}>
        <InputGroup>
          <InputDiv style={props.usernameInputDisplay}>
            <Input
              // onFocus={handleActive}
              onChange={handleChange}
              name="username"
              type={"text"}
              pattern={usernamePattern}
              placeholder={"Username"}
              required={props.usernameRequired}
              value={username}
            ></Input>
          </InputDiv>
          <InputDiv className="">
            <Input
              // onFocus={handleActive}
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
            // passwordFoc={passwordFoc}
          >
            <Input
              // onFocus={handleActive}
              ref={passwordRef}
              onChange={handleChange}
              name="password"
              type={"password"}
              title={
                "Password should contain 6-10 characters including a number, and a capital letter"
              }
              placeholder={"Password"}
              pattern={passwordPattern}
              value={password}
              required
            ></Input>
          </InputDiv>
          <InputDiv style={props.confirmPasswordInputDisplay}>
            <Input
              // onFocus={handleActive}
              onChange={handleChange}
              name="confirmPassword"
              type={"password"}
              placeholder={"Confirm password"}
              value={confirmPassword}
              required={props.confirmPasswordRequired}
            ></Input>
          </InputDiv>
        </InputGroup>
        <P errMsg={errMsg} className="text-center fw-500">
          {errMsg}
        </P>
        <Div>
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
  background: rgb(217, 217, 217,0.5);
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

  &.input-div::after {
    display: ${(props) => (props.passwordActive ? "block" : "none")};
  }
`;

const Input = styled.input`
  width: 80%;
  &:focus {
    border: 3px #144f7c;
    box-shadow: 0.4px 0px 1.2px 1px #00ff00;
  }
  font-size: 17px;
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
