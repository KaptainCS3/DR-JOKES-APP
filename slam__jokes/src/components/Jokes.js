import React, { useState } from "react";
import Indicator from "./Indicator";
import Reaction from "./Reaction";
import Comment from "./Comment";
import JokeContainer from "./JokeContainer";
import joke from "../jokes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Jokes = () => {
  // // The review is same as a carousel you know in css and normal js
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
        <div className={`arrow__indicator left mt-2`}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`cursor-pointer text-2xl`}
            onClick={prevJoke}
          />
        </div>
        <div className={`button-container`}>
          <button
            onClick={randomJoke}
            className={`p-2 bg-[#6200EE] text-white rounded-xl`}
          >
            random Joke
          </button>
        </div>
        <div className={`arrow__indicator right mt-2`}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`cursor-pointer text-2xl`}
            onClick={nextJoke}
          />
        </div>
      </div>
      <Reaction />
      <Comment />
    </div>
  );
};
export default Jokes;
