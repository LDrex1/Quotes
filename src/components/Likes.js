import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";
import {
  collection,
  where,
  doc,
  query,
  getDocs,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "@firebase/firestore";
import { auth, db } from "../firebase-config";
import device from "./Devices";

function Likes({ id, likes }) {
  const [theme] = useTheme();
  const user = auth.currentUser;
  const likeHandler = async () => {
    try {
      const quoteQuery = query(collection(db, "Quotes"), where("id", "==", id));
      const docId = await getDocs(quoteQuery).then((resp) => resp.docs[0].id);
      const likesref = doc(db, "Quotes", docId);
      updateDoc(likesref, {
        likes: likes?.includes(user.uid)
          ? arrayRemove(user.uid)
          : arrayUnion(user.uid),
      })
        .then(console.log("first"))
        .catch((err) => console.log(err.message));
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Like theme={theme} likes={likes}>
        <i onClick={likeHandler} class="fa fa-thumbs-up"></i>{" "}
        <span style={{ color: "green" }}>{likes?.length}</span>
      </Like>
    </>
  );
}

export default Likes;

const Like = styled.div`
  //   position: absolute;
  //   bottom: 2px;

  i {
    font-size: 24px;
    cursor: "pointer";
    color: ${({ theme, likes }) =>
      theme === true && !likes.length === true
        ? "#222"
        : !(theme === true) && !likes.length == true
        ? "#cdcbcb"
        : "skyblue"};
    @media ${device.mobileL} {
      font-size: 26px;
    }
  }
`;
