import React from "react";
import styled from "styled-components";
import FooterG from "./Footer";
import { useTheme } from "./ThemeProvider";
import QuotesPageHeader from "./QuotesPageHeader";
import Main from "./Main";

function QuotesPage() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Wrapper theme={theme}>
        <Button className="theme-toggler" onClick={toggleTheme} theme={theme}>
          {theme ? "DarkMode" : "LightMode"}
        </Button>
        <QuotesPageHeader />
        <Main />
      </Wrapper>
      <FooterG />
    </>
  );
}

export default QuotesPage;

const Wrapper = styled.div`
  min-height: 90vh;
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
    bottom: 18%;
    right: 5%;
    width: fit-content;
    opacity: 0.6;
    z-index: 2;
  }
`;
