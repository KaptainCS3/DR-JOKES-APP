import React from "react";
import Reaction from "./Reaction";
import JokeContainer from "./JokeContainer";
import joke from "../jokes";
import ChevronLeft from "./ChevronLeft";
import RandomJokeBtn from "./RandomJokeBtn";
import ChevronRight from "./ChevronRight";
import CommentForm from "./CommentForm";
const Jokes = (props) => {
  const index = props.catValue.indexOf(props.selectCategory);
  const object = joke.map((el) => {
    if (props.selectCategory === el.category.name) {
      return el.joke.map((item) => {
        return (
          <JokeContainer
            punchline={item.punchline}
            body={item.body}
            category={el.category}
            id={item.id}
          />
        );
      });
    } else {
      return false;
    }
  });
  //! The review is same as a carousel you know in css and normal js

  //! This function helps us check and make sure we don't go above the length of our array and below its length
  const checkNumber = (number) => {
    if (number > object[index].length - 1) {
      return 0;
    }
    if (number < 0) return object[index].length - 1;
    return number;
  };

  //! This function help us in moving to the previous Joke element
  const prevJoke = () => {
    return props.setCatIndex((curr) =>
      curr === 0 ? object[index].length - 1 : curr - 1
    );
  };

  //! This function help us in moving to the next Joke element
  const nextJoke = () => {
    return props.setCatIndex((curr) =>
      curr === object[index].length - 1 ? 0 : curr + 1
    );
  };

  //! return random Joke Index
  const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * object[index].length);
    if (randomIndex === props.catIndex) {
      randomIndex = props.catIndex + 1;
    }
    props.setCatIndex(checkNumber(randomIndex));
  };

  return (
    <div
      className={`flex justify-between items-center my-8 mx-auto flex-col px-8 md:hidden lg:hidden`}
    >
      <div className="w-full overflow-hidden">
        <div className="flex transition-transform ease-out duration-500">
          {object[index][props.catIndex]}
        </div>
      </div>
      <div className={`flex justify-between w-full mx-auto mt-4`}>
        <ChevronLeft prevJoke={prevJoke} />
        <RandomJokeBtn randomJoke={randomJoke} />
        <ChevronRight nextJoke={nextJoke} />
      </div>
      <Reaction />
      <CommentForm />
    </div>
  );
};
export default Jokes;
