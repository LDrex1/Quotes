import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { onAuthStateChanged } from "@firebase/auth";
import { collection, onSnapshot, getDocs, setDoc } from "@firebase/firestore";
import { auth, db } from "../firebase-config";
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

  const likeHandler = () => {
    (async () => {
      const { uid } = auth.currentUser;
      const query1 = collection(db, "Users");
      const usernameDocs = (await getDocs(query1)).docs;
      let result = usernameDocs.filter((element) => element.id === uid);
      const { username } = result[0].data();
      console.log(username);
      const query2 = collection(db, "Quotes");
    })();
  };

  //   likeHandler();

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {quotesData.map((quoteData, index) => {
        const { date, quote, username, time } = quoteData.data();

        return (
          <QuotesDiv className="mb-1" theme={theme}>
            <H6>
              {date} {time}
            </H6>
            <P>
              <q>{quote}</q>
            </P>
            <Like>like</Like>
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

const Like = styled.div`
  position: absolute;
  bottom: 2px;
`;

const H5 = styled.h5`
  text-align: end;
`;

const H6 = styled.h6`
  position: absolute;
  top: 2px;
  right: 8px;
`;
