import React from "react";
import styled from "styled-components";
import FooterG from "./Footer";
import QuotesPageHeader from "./QuotesPageHeader";
import Quotes from "./Quotes";

function QuotesPage() {
  return (
    <Wrapper>
      <QuotesPageHeader />
      <Main>
        <Quotes />
      </Main>
      <FooterG />
    </Wrapper>
  );
}

export default QuotesPage;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Header = styled.header``;

const Main = styled.main``;
