import React from "react";
import styled from "styled-components";
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

function Likes({ id, likes }) {
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
      <Like onClick={likeHandler}>Likes {likes?.length}</Like>
    </>
  );
}

export default Likes;

const Like = styled.div`
  position: absolute;
  bottom: 2px;
`;
