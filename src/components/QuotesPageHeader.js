import React from "react";
import styled from "styled-components";
import device from "./Devices";

function QuotesPageHeader() {
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
            <Ul className="dropdown-content">
              <Li>
                <A>Edit profile</A>
              </Li>
              <Li>
                <Button>Log Out</Button>
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
  height: 33px;
  display: flex;
  margin-bottom: 20px;
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

  &:hover {
    overflow: visible;
  }
  &:hover .dropdown-content {
    max-height: 100px;
  }
`;

const ImageDiv = styled.div``;

const Ul = styled.ul`
  border: 2px solid red;
  padding: 16px 0 16px 0;
  max-height: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  position: absolute;
  top: 20px;
  width: 100%;
`;

const Li = styled.li``;

const A = styled.a``;

const Button = styled.button``;
