import React from "react";
import styled from "styled-components";
import device from "./Devices";

function QuotesPageHeader() {
  return (
    <>
      <Header>
        <Nav>
          <Span>Quotes</Span>
          <Div>
            <ImageDiv>
              e<img src=""></img>
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
  display: flex;
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

const Span = styled.span``;

const Div = styled.div`
  position: relative;
  overflow: hidden;

  &:hover .dropdown-content {
    max-height: 100px;
  }
`;

const ImageDiv = styled.div``;

const Ul = styled.ul`
  max-height: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Li = styled.li``;

const A = styled.a``;

const Button = styled.button``;
