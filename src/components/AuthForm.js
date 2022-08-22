import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";

function AuthForm(props) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const usernamePattern = /\b[a-z_][a-z_]+\d*\b|\b[a-z_]\d\d+\b/i;
  const passwordPattern = /(=?.*[a-z])(=?.*\d)(?=.{4}).*|(=?\d)(=?[a-z])/i;

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(emailRef.current.value);
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputDiv style={props.usernameInputDisplay}>
          <Input
            ref={usernameRef}
            type={"text"}
            pattern={usernamePattern}
            placeholder={"Username"}
            required
          ></Input>
        </InputDiv>
        <InputDiv>
          <Input
            ref={emailRef}
            type={"text"}
            inputMode={"email"}
            placeholder={"Email"}
            required
          ></Input>
        </InputDiv>
        <InputDiv>
          <Input
            ref={passwordRef}
            type={"password"}
            pattern={passwordPattern}
            placeholder={"Password"}
            required
          ></Input>
        </InputDiv>
        <InputDiv style={props.confirmPasswordInputDisplay}>
          <Input
            ref={confirmPasswordRef}
            type={"password"}
            pattern={/(=?[a-z])(=?\d)|(=?\d)(=?[a-z])/i}
            placeholder={"Confirm Password"}
            required
          ></Input>
        </InputDiv>
        <ButtonsDiv>
          <Button>{props.firstButton}</Button>
          <Button>{props.secondButton}</Button>
        </ButtonsDiv>
      </Form>
    </>
  );
}

export default AuthForm;

const Form = styled.form``;

const InputDiv = styled.div``;

const Input = styled.input``;

const ButtonsDiv = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Button = styled.button``;
