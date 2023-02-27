import React from "react";
const Comment = (props) => {
  return (
    <article
      className={`cursor-pointer dark:bg-slate-400 sm:w-full  px-[2rem] mr-0 my-4 py-[0.5rem] shadow rounded-xl flex flex-col`}
    >
      <h4 className={`mb-[0.25rem] font-bold`}>@{props.useName}</h4>
      <p className={`mb-[0.75rem]`}>{props.jokeComment}</p>
    </article>
  );
};

export default Comment;
// {/* //! ternary operator condition check */}
