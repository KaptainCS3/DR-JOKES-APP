import React, { useState } from "react";
import Reaction from "./Reaction";
import JokeContainer from "./JokeContainer";
import ChevronLeft from "./ChevronLeft";
import RandomJokeBtn from "./RandomJokeBtn";
import ChevronRight from "./ChevronRight";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import Comment from "./Comment";
const Jokes = (props) => {
  const [showComment, setShowComment] = useState(false);
  const show = {
    display: showComment ? "block" : "none",
  };
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  const joke = props.fetchData.map((el) => el.id);
  const jokeComment = props.fetchData.map((el) => {
    if (el.comments.length !== 0) {
      if (joke[props.catIndex]) return el.comments;
      return console.log("No comments found");
    }
  });
  const commentList = typeof jokeComment[props.catIndex] !== "undefined";
  let allComments;
  if (commentList) {
    allComments = jokeComment[props.catIndex].map((el) => {
      return <Comment comment={el.comment} userName={el.commenter.name} />;
    });
  }
  const APIComment = `https://api.jokes.digitalrenter.com/api/comments`;
  const submitJokeComment = async (event) => {
    event.preventDefault();
    const response = await fetch(APIComment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        joke_id: joke[props.catIndex],
        comment: props.comment.comment,
      }),
    });
    if (!response.ok) {
      throw new Error(response.error);
    } else {
      const data = await response.json();
      props.onNewComment(data);
      alert("Comment successfully Added 😎😄😅😎");
      props.setComment({
        comment: "",
      });
    }
  };
  const object = props.fetchData.map((el) => {
    return (
      <JokeContainer key={el.id} punchline={el.punchline} setup={el.setup} />
    );
  });

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
  let numComments;

  const jokeCommentNum = props.fetchData.map((el) => {
    if (el.comments.length !== 0) {
      if (joke[props.catIndex]) return (numComments = el.comments.length);
      return console.log("No comments found");
    }
  });

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
        numComments={jokeCommentNum[props.catIndex]}
        toggleComment={toggleComment}
      />
      <CommentForm
        handleChangeComment={props.handleChangeComment}
        comment={props.comment}
        submitJokeComment={submitJokeComment}
      />
      <div className="w-full" style={show}>
        {allComments}
      </div>
    </div>
  );
};
export default Jokes;
