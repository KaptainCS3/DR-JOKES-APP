import React from "react";
import Reaction from "./Reaction";
import JokeContainer from "./JokeContainer";
import ChevronLeft from "./ChevronLeft";
import RandomJokeBtn from "./RandomJokeBtn";
import ChevronRight from "./ChevronRight";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
const Jokes = (props) => {
  const object = props.fetchData.map((el) => {
    return <JokeContainer key ={el.id} punchline={el.punchline} setup={el.setup} />;
  });

  const show = {
    display: `${props.showComment ? "none" : ""}`,
  };
  //! The review is same as a carousel you know in css and normal js

  //! This function helps us check and make sure we don't go above the length of our array and below its length
  const checkNumber = (number) => {
    if (number > object.length - 1) {
      return 0;
    }
    if (number < 0) return object.length - 1;
    return number;
  };

  //! This function help us in moving to the previous Joke element
  const prevJoke = () => {
    return props.setCatIndex((curr) =>
      curr === 0 ? object.length - 1 : curr - 1
    );
  };

  //! This function help us in moving to the next Joke element
  const nextJoke = () => {
    return props.setCatIndex((curr) =>
      curr === object.length - 1 ? 0 : curr + 1
    );
  };

  //! return random Joke Index
  const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * object.length);
    if (randomIndex === props.catIndex) {
      randomIndex = props.catIndex + 1;
    }
    props.setCatIndex(checkNumber(randomIndex));
  };

  return (
    <div
      className={`flex justify-between items-center my-8 mx-auto flex-col px-8 md:hidden lg:hidden`}
    >
      {/* //! position overflow on rendering filter category */}
      <div className="w-full">
        <div className="flex transition-transform ease-out duration-500">
          {object[props.catIndex]}
        </div>
      </div>
      <div className={`flex justify-between w-full mx-auto mt-4`}>
        <ChevronLeft prevJoke={prevJoke} />
        <RandomJokeBtn randomJoke={randomJoke} />
        <ChevronRight nextJoke={nextJoke} />
      </div>
      <Reaction
        like={props.like}
        disLike={props.disLike}
        thumbsDown={props.thumbsDown}
        thumbsUp={props.thumbsUp}
        numComments={props.numComments}
        toggleComment={props.toggleComment}
      />
      <div className="w-full" style={show}>
        {props.jokeComment ? <CommentList comments={props.jokeComment} /> : ""}
      </div>
      <CommentForm
        handleChangeComment={props.handleChangeComment}
        comment={props.comment}
        submitJokeComment={props.submitJokeComment}
      />
    </div>
  );
};
export default Jokes;
