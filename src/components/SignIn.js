import React from "react";
import styled from "styled-components";
import devices from "./Devices";
import AuthForm from "./AuthForm";

function SignIn() {
  const noDisplay = {
    display: "none",
  };
  const notRequired = false;
  return (
    <Wrapper>
      <AuthForm
        formType={"sign-in"}
        usernameInputDisplay={noDisplay}
        usernameRequired={notRequired}
        confirmPasswordInputDisplay={noDisplay}
        confirmPasswordRequired={notRequired}
        firstButton={"Sign In"}
        secondButton={"Sign In with Google"}
      />
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
