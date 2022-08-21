import React from "react";
import { useState } from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <>
      <Form>
        <InputDiv>
          <Input
            type={"text"}
            pattern={/\b[a-z_][a-z_]+\d*\b|[a-z_]\d\d+/}
            placeholder={"Username"}
          ></Input>
        </InputDiv>
        <InputDiv>
          <Input type={"password"} pattern={/c/}></Input>
        </InputDiv>
        <ButtonsDiv>
          <Button></Button>
          <Button></Button>
        </ButtonsDiv>
      </Form>
    </>
  );
}

export default SignUp;
const Form = styled.form``;

const InputDiv = styled.div``;

const Input = styled.input``;
