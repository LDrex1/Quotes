import React from "react";
import styled from "styled-components";
import FooterG from "./Footer";
import { useTheme } from "./ThemeProvider";
import QuotesPageHeader from "./QuotesPageHeader";
import Quotes from "./Quotes";

function QuotesPage() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Wrapper theme={theme}>
      <Button onClick={toggleTheme} theme={theme}>
        {theme ? "DarkMode" : "LightMode"}
      </Button>
      <QuotesPageHeader />
      <Main theme={theme}>
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
  background: ${(props) => (props.theme === true ? "#ffffff" : "#222222")};
  color: ${(props) => (props.theme === true ? "black" : "whitesmoke")};
  button {
    background: ${(props) => (props.theme === true ? "#ffffff" : "#222222")};
    color: ${(props) => (props.theme === true ? "black" : "whitesmoke")};
  }
`;

const Button = styled.button`
  background: ${(props) =>
    !(props.theme === true) ? "#ffffff" : "#222222"} !important;
  color: ${(props) =>
    !(props.theme === true) ? "black" : "whitesmoke"} !important;
  position: absolute;
  bottom: 90px;
  right: 5%;
  width: fit-content;
`;

const Main = styled.main``;
