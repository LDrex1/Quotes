import React from "react";
import styled from "styled-components";

function FooterG() {
  return (
    <>
      <Footer>
        <Div className="text-center">
          <span className="fw-700">&copy;</span>{" "}
          <span className="fw-400">2022</span>
        </Div>
        <Div className="text-center">
          <span className="fw-500">Created by </span>
          <a href="" className="fw-600">
            Ldrex1
          </a>
        </Div>
      </Footer>
    </>
  );
}

export default FooterG;

const Footer = styled.footer`
  background: #333a33;
  padding: 15px 0 9px;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: auto;
`;

const Div = styled.div`
  a {
    text-decoration: underline;

    &:hover {
      color: green;
    }
  }
`;
