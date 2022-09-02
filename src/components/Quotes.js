import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase-config";
import { useTheme } from "./ThemeProvider";

function Quotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [theme] = useTheme();

  const getQuotes = async () => {
    const collectionquerry = collection(db, "Quotes");
    const snapshot = await getDocs(collectionquerry);
    const allQuotes = snapshot.docs;
    // console.log(allQuotes);
    setQuotesData(allQuotes);
    console.log(quotesData);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <QuotesDiv theme={theme}>
        {quotesData.map((quoteData) => {
          const { date, quote, username, time } = quoteData.data();

          return (
            <>
              <P>
                <q>{quote}</q>
              </P>
              <H5>{username}</H5>
            </>
          );
        })}
      </QuotesDiv>
    </>
  );
}

export default Quotes;

const QuotesDiv = styled.div`
  border: 1px solid red;
  background: ${(props) => (props.theme === true ? "#f4f7f5" : "#232723")};
  width: 80%;
  padding: 8px;
  height: 55px;
  margin: auto;
`;

const P = styled.div`
  padding: 4px 5px;
`;

const H5 = styled.h5`
  text-align: end;
`;
