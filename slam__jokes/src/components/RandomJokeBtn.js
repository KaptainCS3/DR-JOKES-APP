import React from "react";
const RandomJokeBtn = (props) => {
  return (
    <>
      {/* button generate random joke */}
      <div className={`button-container`}>
        <button
          onClick={props.randomJoke}
          className={`p-2 bg-[#6200EE] text-white rounded-xl`}
        >
          random Joke
        </button>
      </div>
    </>
  );
};

export default RandomJokeBtn;
