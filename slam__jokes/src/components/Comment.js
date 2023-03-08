import React from "react";
const Comment = (props) => {
  return (
    <article
      className={`bg-white cursor-pointer dark:bg-slate-400 sm:w-full px-[1.5rem] mr-0 my-4 py-[0.5rem] shadow rounded-xl flex flex-col`}
    >
      <h4 className={`font-bold`}>@{props.userName}</h4>
      <p className={``}>{props.comment}</p>
    </article>
  );
};

export default Comment;
// {/* //! ternary operator condition check */}
