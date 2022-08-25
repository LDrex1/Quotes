import React from "react";
import styled from "styled-components";
import QuotesPageHeader from "./QuotesPageHeader";

function QuotesPage() {
  return (
    <Wrapper>
      <QuotesPageHeader />
      <Main></Main>
      <Footer></Footer>
    </Wrapper>
  );
}

export default QuotesPage;

const Wrapper = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;
