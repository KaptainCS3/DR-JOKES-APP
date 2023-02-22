import React, { useState } from "react";
import Reaction from "./Reaction";
import Comment from "./Comment";
import JokeContainer from "./JokeContainer";
import joke from "../jokes";
import ChevronLeft from "./ChevronLeft";
import RandomJokeBtn from "./RandomJokeBtn";
import ChevronRight from "./ChevronRight";
import jokesTemplate from "../jokes";
const Jokes = (props) => {
  const object = joke.map((el) => {
    if (props.selectCategory === el.category.name) {
      console.log(el.category.name);
      return el.joke.map((item) => {
        return (
          <JokeContainer
            punchline={item.punchline}
            body={item.body}
            category={el.category}
          />
        );
      });
    } else {
      console.log("Not found");
    }
  });
  // The review is same as a carousel you know in css and normal js
  const [index, setIndex] = useState(0);
  // const [boxIndex, setBoxIndex] = useState(0);
  const { id} = joke[index];

  // This function helps us check and make sure we don't go above the length of our array and below its length
  const checkNumber = (number) => {
    if (number > joke.length - 1) {
      return 0;
    }
    if (number < 0) return joke.length - 1;
    return number;
  };
  console.log(id);
  // console.log(joke);
  // console.log(category);

  // This function help us in moving to the previous element
  const prevJoke = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // This function help us in moving to the next element
  const nextJoke = () => {
    setIndex((index) => {
      let newIndex = index + 1;
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
      <>{object}</>
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
