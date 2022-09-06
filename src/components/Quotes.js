import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, getDocs, setDoc } from "@firebase/firestore";
import { auth, db } from "../firebase-config";
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
  border: 1px solid red;
  background: ${(props) => (props.theme === true ? "#f4f7f5" : "#232723")};
  width: 80%;
  padding: 8px;
  //   height: 58px;
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
