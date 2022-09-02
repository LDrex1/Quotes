import React from "react";
import styled from "styled-components";
import CreateQuote from "./CreateQuote";
import Quotes from "./Quotes";

function Main() {
  return (
    <Container>
      <CreateQuote />
      <Quotes />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
