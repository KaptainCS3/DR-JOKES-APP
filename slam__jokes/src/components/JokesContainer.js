import React from "react";

const JokesContainer = (props) => {
  return (
    <article
      className={`flex flex-col items-center justify-center w-full text-center lg:py-24 md:py-[7.5rem] px-8 sm:hidden`}
    >
      <h4 className={`mb-[0.25rem] font-bold`}>{props.punchline}</h4>
      <p className={`mb-[0.75rem]`}>{props.setup}</p>
    </article>
  );
};

export default JokesContainer;
