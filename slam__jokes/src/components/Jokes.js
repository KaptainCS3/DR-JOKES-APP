import React, { useState } from "react";
import Indicator from "./Indicator";
import Reaction from "./Reaction";
import Comment from "./Comment";
import JokeContainer from "./JokeContainer";
import people from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Jokes = () => {
  // // The review is same as a carousel you know in css and normal js
  const [index, setIndex] = useState(0);
  const { name, text } = people[index];
  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) return people.length - 1;
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
  // prevJoke={prevJoke} nextJoke={nextJoke}
  return (
    <div className="flex justify-between items-center my-8 mx-auto flex-col px-8 md:hidden lg:hidden">
      <>
        <article className="text-center py-[1.5rem] py-[1.5rem] px-[2rem] shadow-2xl rounded-xl">
          <h4 className="mb-[0.25rem] font-bold">{name}</h4>
          <p className="mb-[0.75rem]">{text}</p>
          <div className="button-container"></div>
        </article>
      </>
      <div className="flex justify-between w-full mx-auto mt-4">
        <div className="arrow__indicator left">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="cursor-pointer text-2xl"
            onClick={prevJoke}
          />
        </div>
        <div className="arrow__indicator right">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="cursor-pointer text-2xl"
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
// .review {
//   /* background: var(--clr-white); */
//   padding: 1.5rem 2rem;
//   border-radius: var(--radius);
//   box-shadow: var(--light-shadow);
//   transition: var(--transition);
//   text-align: center;
// }
// .review:hover {
//   box-shadow: var(--dark-shadow);
// }
