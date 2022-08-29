import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";

function Quotes() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <QuotesDiv theme={theme}>
        <P>
          <q>Never Give up</q>
        </P>
        <H5>demo</H5>
      </QuotesDiv>
    </>
  );
}

export default Quotes;

const QuotesDiv = styled.div`
  border: 1px solid red;
  background: ${(props) => (props.theme === true ? "#f4f7f5" : "#232723")};
  width: 80%;
  padding: 8px;
  height: 55px;
  margin: auto;
`;

const P = styled.div`
  padding: 4px 5px;
`;

const H5 = styled.h5`
  text-align: end;
`;
