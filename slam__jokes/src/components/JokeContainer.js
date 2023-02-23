import React from "react";

const JokeContainer = (props) => {
  return (
    <article
      onClick={props.toggle}
      className={`cursor-pointer dark:bg-slate-400 sm:px-[2rem] mr-0 text-center py-[1.5rem] shadow-2xl rounded-xl h-64 flex justify-center items-center w-full flex-col md:mr-10 px-32 mb-8 w-full lg:mr-10`}
    >
      <h4 className={`mb-[0.25rem] font-bold`}>{props.punchline}</h4>
      <p className={`mb-[0.75rem]`}>
        and category is {props.category.name} with id: {props.id}
      </p>
    </article>
  );
};

export default JokeContainer;
