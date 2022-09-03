import React from "react";
import styled from "styled-components";

function Logo() {
  return <H2>Quotes</H2>;
}

export default Logo;

const H2 = styled.h2`
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
    #ffffff 0%,
    #ffffff 20%,
    #99ff66 60%,
    #009933 100%
  );
  color: transparent;
  position: absolute;
  top: 8px;
  left: 6px;
`;
