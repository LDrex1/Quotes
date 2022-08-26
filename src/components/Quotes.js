import React from "react";
import styled from "styled-components";

function Quotes() {
  return (
    <>
      <QuotesDiv>
        <P>Never Give up</P>
      </QuotesDiv>
    </>
  );
}

export default Quotes;

const QuotesDiv = styled.div`
  border: 1px solid red;
  width: 80%;
  height: 55px;
  margin: auto;
`;

const P = styled.div`
  padding: 4px 5px;
`;
