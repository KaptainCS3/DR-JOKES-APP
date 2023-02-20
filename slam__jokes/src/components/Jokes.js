import React, { useState } from "react";
import Reaction from "./Reaction";
import Comment from "./Comment";
import JokeContainer from "./JokeContainer";
import joke from "../jokes";
import ChevronLeft from "./ChevronLeft";
import RandomJokeBtn from "./RandomJokeBtn";
import ChevronRight from "./ChevronRight";
const Jokes = () => {
  // The review is same as a carousel you know in css and normal js
  const [index, setIndex] = useState(0);
  const { punchline, body, id } = joke[index];
  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght
  const checkNumber = (number) => {
    if (number > joke.length - 1) {
      return 0;
    }
    if (number < 0) return joke.length - 1;
    return number;
  };

  // This function help us in moving to the previous element
  const prevJoke = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      // if(newIndex < 0)
      // newIndex = 3
      // checkNumber(newIndex)
      return checkNumber(newIndex);
    });
  };

  // This function help us in moving to the next element
  const nextJoke = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // if(newIndex > people.length -1)
      // newIndex = 0
      // checkNumber(newIndex)
      return checkNumber(newIndex);
    });
  };
  // in this function , we use the random object to generate random numbers so we can get random images within our range
  const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * joke.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    // return randomIndex
    setIndex(checkNumber(randomIndex));
  };
  return (
    <div
      className={`flex justify-between items-center my-8 mx-auto flex-col px-8 md:hidden lg:hidden`}
    >
      <>
        <JokeContainer punchline={punchline} id={id} body={body} />
      </>
      <div className={`flex justify-between w-full mx-auto mt-4`}>
        <ChevronLeft prevJoke={prevJoke} />
        <RandomJokeBtn randomJoke={randomJoke} />
        <ChevronRight nextJoke={nextJoke} />
      </div>
      <Reaction />
      <Comment />
    </div>
  );
};
export default Jokes;
