import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Quotes from "./Quotes";
import { useTheme } from "./ThemeProvider";

function Main() {
  const createQuote = (ev) => {};
  const [inputStyle, setInputStyle] = useState({ visibility: "hidden" });

  const createHandler = () => {
    setInputStyle((current) => {
      return {
        ...current,
        visibility: current.visibility === "visible" ? "hidden" : "visible",
      };
    });
  };
  return (
    <Container>
      <CreateQoute>
        <p onClick={createHandler}>create</p>
        <Input style={inputStyle}></Input>
      </CreateQoute>
      <Quotes />
    </Container>
  );
}

export default Main;

const Container = styled.div``;

const CreateQoute = styled.div`
  & p {
    position: fixed;
    bottom: 100px;
    left: 25px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  width: 80%;
  bottom: 50%;
  left: 50%;
  transform: translatex(-50%);
  position: absolute;

  &:focus {
  }
`;
