import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "@firebase/auth";
import { auth } from "./../firebase-config";
import device from "./Devices";
import { useTheme } from "./ThemeProvider";

function QuotesPageHeader() {
  const navigate = useNavigate();
  const [theme] = useTheme();
  const signOutHandler = (ev) => {
    (async () => {
      let signedOut = signOut(auth);
      signedOut.then((resp) => navigate("/"));
    })();
  };

  return (
    <>
      <Header>
        <Nav>
          <Span>
            <h3>Quotes</h3>
          </Span>
          <Div>
            <ImageDiv>
              Account<img src=""></img>
            </ImageDiv>
            <Ul className="dropdown-content" theme={theme}>
              {/* <Li>
                <A>Edit profile</A>
              </Li> */}
              <Li>
                <Button onClick={signOutHandler}>Log Out</Button>
              </Li>
            </Ul>
          </Div>
        </Nav>
      </Header>
    </>
  );
}

export default QuotesPageHeader;

const Header = styled.header`
  background: green;
  height: 50px;
  display: flex;
  margin-bottom: 20px;

  @media ${device.mobileM} {
    height: 70px;
  }
`;

const Span = styled.span`
  color: whitesmoke;
`;

const Nav = styled.nav`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media ${device.mobileL} {
    width: 85%;
  }
`;

const Div = styled.div`
  position: relative;
  width: 140px;
  overflow: hidden;
  text-align: end;

  .dropdown-content {
    margin-top: 3px;
  }

  &:hover {
    overflow: visible;
  }
  &:hover .dropdown-content {
    max-height: 100px;
    margin-top: 0px;
  }
`;

const ImageDiv = styled.div``;

const Ul = styled.ul`
  border: 1px solid #ffffff;
  border-radius: 3px;
  box-shadow: -0.3px 0px 4px #222222;
  background: ${(props) => (props.theme === true ? "#ffffff" : "#222222")};
  padding: 16px 0 16px 0;
  max-height: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  position: absolute;
  top: 24px;
  width: 100%;
  z-index: 1;
`;

const Li = styled.li`
  color: #c1b02d;
`;

const A = styled.a``;

const Button = styled.button`
  background: red !important;
  color: red;
`;
