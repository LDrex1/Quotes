import React from "react";
import styled from "styled-components";
import FooterG from "./Footer";
import { useTheme } from "./ThemeProvider";
import QuotesPageHeader from "./QuotesPageHeader";
import Quotes from "./Quotes";
import Main from "./Main";

function QuotesPage() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Wrapper theme={theme}>
      <Button className="theme-toggler" onClick={toggleTheme} theme={theme}>
        {theme ? "DarkMode" : "LightMode"}
      </Button>
      <QuotesPageHeader />
      {/* <Main theme={theme}>
        <Quotes />
      </Main> */}
      <Main />
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
  &.theme-toggler {
    background: ${(props) => (!(props.theme === true) ? "#ffffff" : "#222222")};
    color: ${(props) => (!(props.theme === true) ? "black" : "whitesmoke")};
    position: absolute;
    bottom: 90px;
    right: 5%;
    width: fit-content;
  }
`;
