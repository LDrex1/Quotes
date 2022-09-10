import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { Timestamp, doc, setDoc, getDoc } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../firebase-config";
import calender from "./Calender";

function CreateQuote() {
  const quoteInput = useRef();
  const [inputStyle, setInputStyle] = useState({ visibility: "hidden" });
  const { visibility } = inputStyle;

  const openCreateInputHandler = () => {
    setInputStyle(({ visibility }) => {
      return {
        visibility: visibility === "visible" ? "hidden" : "visible",
      };
    });
  };

  const createQuoteHandler = async () => {
    const user = auth.currentUser;
    console.log("started");
    if (user !== null) {
      const { minutesPad, hoursPad, date, month, year } = calender();
      const { uid } = user;
      const quote = quoteInput.current.value;
      const username = user.displayName;
      await setDoc(doc(db, "Quotes", uid), {
        id: uuidv4(),
        time: `${hoursPad}:${minutesPad}`,
        date: `${date}/${month.slice(0, 3)}/${year}`,
        quote: quote,
        username: username,
        likes: [],
        createdAt: Timestamp.now().toDate(),
      });
      openCreateInputHandler();
      quoteInput.current.value = null;
      console.log("done");
    }
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
    bottom: 25%;
    left: 25px;
    opacity: 0.6;
    z-index: 2;

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
`;

const Button = styled.button`
  margin: auto;
  outline: 3px solid black;
`;
