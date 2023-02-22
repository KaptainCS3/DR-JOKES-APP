import React from "react";

const JokeContainer = (props) => {
  return (
    <article
      onClick={props.toggle}
      className={`dark:bg-slate-800 sm:mr-0 text-center py-[1.5rem] px-[2rem] shadow-2xl rounded-xl h-64 flex justify-center items-center w-full flex-col md:px-32 mr-16 mb-8 w-full lg:mr-10 px-32`}
    >
      <h4 className={`mb-[0.25rem] font-bold`}>{props.punchline}</h4>
      <p className={`mb-[0.75rem]`}>
        {props.body} and category is {props.category.name}
      </p>
    </article>
  );
};

export default JokeContainer;
