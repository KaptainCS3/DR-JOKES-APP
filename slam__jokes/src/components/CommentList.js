import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
const CommentList = () => {
  const commentList = useSelector((state) => state.jokeComment);
  const list = commentList.map((e) => {
    return <Comment key={e.id} {...e} />;
  });
  return <div>{list}</div>;
};

export default CommentList;
