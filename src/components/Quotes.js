import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase-config";
import { useTheme } from "./ThemeProvider";
import Likes from "./Likes";

function Quotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [theme] = useTheme();

  const getQuotes = async () => {
    const collectionquerry = collection(db, "Quotes");
    onSnapshot(collectionquerry, (snapshot) => {
      setQuotesData(snapshot.docs);
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {quotesData.map((quoteData, index) => {
        const { id, date, quote, username, time, likes } = quoteData.data();

        return (
          <QuotesDiv className="mb-1" theme={theme}>
            <H6>
              {date} {time}
            </H6>
            <P>
              <q>{quote}</q>
            </P>
            <Likes id={id} likes={likes} />
            <H5>{username}</H5>
          </QuotesDiv>
        );
      })}
    </>
  );
}

export default Quotes;

const QuotesDiv = styled.div`
  border: 1px solid ${(props) => (props.theme === true ? "#2222" : "#5c5c5c")};
  border-radius: 3px;
  background: ${(props) => (props.theme === true ? "#f0f2f5" : "#30332e")};
  width: 80%;
  padding: 8px;
  max-height: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const P = styled.div`
  padding: 4px 5px;
`;

const H5 = styled.h5`
  text-align: end;
`;

const H6 = styled.h6`
  position: absolute;
  top: 2px;
  right: 8px;
`;
