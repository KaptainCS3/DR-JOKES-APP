import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postComment } from "../features/commentSlice";
const CommentForm = () => {
  const focus = {
    outline: "none",
  };

  const dispatch = useDispatch();

  //input state
  const [addComment, setAddComment] = useState({
    addComment: "",
  });
  //prevent page reload on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddComment({ addComment: "" });
  };

  // track input value changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddComment((prevComment) => {
      return {
        ...prevComment,
        [name]: value,
      };
    });
  };

  //add comment to joke
  const handlePost = () => {
    dispatch(
      postComment({
        id: nanoid(),
        comment: addComment.addComment,
      })
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[3rem] flex justify-between items-center px-2 rounded shadow bg-white"
    >
      <div className="py-[2.5rem w-[80%]">
        <input
          type="text"
          placeholder="Leave a comment...."
          className="py-[.7rem] w-full"
          style={focus}
          name="addComment"
          onChange={handleChange}
          value={addComment.addComment}
        />
      </div>
      <div>
        <button
          onClick={handlePost}
          className="text-[#6200EE] font-bold w-[20%]"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
