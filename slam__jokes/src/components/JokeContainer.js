import React from "react";

const JokeContainer = (props) => {
  return (
    <article
      onClick={props.toggle}
      className={`text-center py-[1.5rem] py-[1.5rem] px-[2rem] shadow-2xl rounded-xl h-64 flex justify-center flex-col md:w-96 mr-8 mb-8`}
    >
      <h4 className={`mb-[0.25rem] font-bold`}>{props.punchline}</h4>
      <p className={`mb-[0.75rem]`}>
        {props.body} {props.id}
      </p>
    </article>
  );
};

export default JokeContainer;
