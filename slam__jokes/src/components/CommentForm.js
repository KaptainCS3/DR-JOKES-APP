import React from "react";
const CommentForm = (props) => {
  return (
    <form
      onSubmit={props.submitJokeComment}
      className="w-full h-[3rem] flex justify-between items-center px-2 rounded shadow bg-white mt-5"
    >
      <div className="py-[2.5rem] w-[80%]">
        <input
          type="text"
          placeholder="Leave a comment...."
          className="py-[.7rem] w-full focus:outline-none"
          name="comment"
          onChange={props.handleChangeComment}
          value={props.comment.comment}
        />
      </div>
      <div>
        <button className="text-[#6200EE] font-bold w-[20%]">Post</button>
      </div>
    </form>
  );
};

export default CommentForm;
