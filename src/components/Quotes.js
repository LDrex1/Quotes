import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, query, orderBy, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase-config";
import { calculateTimePassed } from "./Calender";
import { useTheme } from "./ThemeProvider";
import Likes from "./Likes";
import device from "./Devices";

function Quotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [theme] = useTheme();

  const getQuotes = async () => {
    const collectionquerry = query(
      collection(db, "Quotes"),
      orderBy("createdAt", "desc")
    );
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
        const { id, date, quote, username, likes, createdAt } =
          quoteData.data();
        const timePosted = calculateTimePassed(createdAt);

        return (
          <QuotesDiv className="mb-1" theme={theme}>
            <H5>{username}</H5>
            <P className="fw-600">
              <q>{quote}</q>
            </P>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Likes id={id} likes={likes} />
              <H6 className="fw-400">{timePosted}</H6>
            </div>
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
  width: 90%;
  padding: 8px;
  padding-top: 2px;
  max-height: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const P = styled.div`
  hyphens: auto;
  padding: 4px 5px;
  margin-top: -10px;
  font-family: "Cedarville Cursive", cursive;
  letter-spacing: 0.03rem;

  q {
    @media ${device.mobileL} {
      font-size: 1.3rem;
    }
  }
`;

const H5 = styled.h5`
  position: sticky;
  text-align: end;
  top: 0px;
  opacity: 0.7;
`;

const H6 = styled.h6`
  top: 0px;
`;
