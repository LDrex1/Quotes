import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase-config";
import { useTheme } from "./ThemeProvider";

function Quotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [theme] = useTheme();

  const getQuotes = async () => {
    const collectionquerry = collection(db, "Quotes");
    const snapshot = onSnapshot(collectionquerry, (snapshot) => {
      setQuotesData(snapshot.docs);
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {quotesData.map((quoteData) => {
        const { date, quote, username, time } = quoteData.data();

        return (
          <QuotesDiv className="mb-1" theme={theme}>
            <P>
              <q>{quote}</q>
            </P>
            <H6>
              {date} {time}
            </H6>
            <H5>{username}</H5>
          </QuotesDiv>
        );
      })}
    </>
  );
}

export default Quotes;

const QuotesDiv = styled.div`
  border: 1px solid red;
  background: ${(props) => (props.theme === true ? "#f4f7f5" : "#232723")};
  width: 80%;
  padding: 8px;
  height: 58px;
  max-height: 70px;
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
