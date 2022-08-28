import React from "react";
import styled from "styled-components";
import device from "./Devices";

function AuthForm(props) {
  const { formValues, updateFormValues } = props;
  const handleChange = (ev) => {
    const { value, name } = ev.target;
    updateFormValues({ ...formValues, [name]: value });
  };

  const { username, email, password, confirmPassword } = formValues;
  console.log(email, password);
  console.log(props.formType);
  const usernamePattern = "\\b[a-z_][a-z_]+\\d*\\b|\\b[a-z_]\\d\\d+\b";
  const passwordPattern =
    "(?=^.{6,7}$)(=?.*[A-Z])(=?.*\\d*)\\w*|(?=^.{6,7}$)(=?.*\\d*)(=?.*[A-Z])\\w*";

  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <Form onSubmit={onSubmit} formType={props.formType}>
        <InputGroup>
          <InputDiv style={props.usernameInputDisplay}>
            <Input
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
              onChange={handleChange}
              name="email"
              type={"email"}
              inputMode={"email"}
              placeholder={"Email"}
              value={email}
              required
            ></Input>
          </InputDiv>
          <InputDiv>
            <Input
              onChange={handleChange}
              name="password"
              type={"password"}
              title={"Password should contain a number, and a capital letter"}
              placeholder={"Password"}
              pattern={passwordPattern}
              value={password}
              required
            ></Input>
          </InputDiv>
          <InputDiv style={props.confirmPasswordInputDisplay}>
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type={"password"}
              placeholder={"Confirm password"}
              value={confirmPassword}
              required={props.confirmPasswordRequired}
            ></Input>
          </InputDiv>
        </InputGroup>
        <Div>
          {props.formType === "sign-in" ? (
            <p className="text-center">
              New to the quotes app? click <a>here</a> to create an account
            </p>
          ) : (
            <p className="text-center">
              Already have a account? click <a>here</a> to sign in
            </p>
          )}
        </Div>
        <ButtonsDiv className="">
          <Button>{props.firstButton}</Button>
          <Button className="second">
            <div className="google-logo">
              <img src={require("../images/google_logo.jpg")}></img>
            </div>
            <div>{props.secondButton}</div>
          </Button>
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
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${(props) => (props.formType == "sign-in" ? "25px" : "18px")};

  @media ${device.mobileL} {
    width: 70%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${(props) => (props.formType == "sign-in" ? "25px" : "18px")};
`;

const InputDiv = styled.div`
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  &:focus {
    border: 3px #144f7c;
    box-shadow: 0.4px 0px 1.2px 1px #1a659d;
  }
  @media ${device.mobileL} {
    background: black;
    width: 80%;
  }
`;

const Div = styled.div``;

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

const Container = styled.div``;
