import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { auth, db } from "../firebase-config";
import calender from "./Calender";

function CreateQuote() {
  const quoteInput = useRef();
  const [inputStyle, setInputStyle] = useState({ visibility: "hidden" });
  const { visibility } = inputStyle;
  const openCreateInputHandler = () => {
    setInputStyle((current) => {
      return {
        visibility: current.visibility === "visible" ? "hidden" : "visible",
      };
    });
  };

  const createQuoteHandler = () => {
    (async () => {
      const user = auth.currentUser;
      console.log("started");
      if (user !== null) {
        const { minutes, hours, date, month, year } = calender();
        const minutesPad = ("00" + minutes).slice(-2);
        const hoursPad = ("00" + hours).slice(-2);
        const { uid } = user;
        const quote = quoteInput.current.value;
        const userSnapshot = await getDoc(doc(db, "Users", uid));
        const { username } = userSnapshot.data();
        await setDoc(doc(db, "Quotes", uid), {
          time: `${hoursPad}:${minutesPad}`,
          date: `${date}/${month.slice(0, 3)}/${year}`,
          quote: quote,
          username: username,
          likes: 0,
        });
        setInputStyle((current) => {
          return {
            visibility: current.visibility === "visible" ? "hidden" : "visible",
          };
        });
        console.log("done");
      }
    })();
  };

  return (
    <Container>
      <p onClick={openCreateInputHandler}>
        {visibility === "hidden" ? "Create" : "Cancel"}
      </p>
      <CreateQuoteForm style={inputStyle}>
        <Input ref={quoteInput}></Input>
        <Button onClick={createQuoteHandler}>Create Quote</Button>
      </CreateQuoteForm>
    </Container>
  );
}

export default CreateQuote;

const Container = styled.div`
  & p {
    position: fixed;
    bottom: 100px;
    left: 25px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

const CreateQuoteForm = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  bottom: 50%;
  left: 50%;
  transform: translatex(-50%);
  position: absolute;
  z-index: 1;
`;

const Input = styled.textarea`
  margin: auto;
  width: 85%;
  height: 60px;

  //   &:focus {
  //   }
`;

const Button = styled.button`
  margin: auto;
  outline: 3px solid black;
`;
