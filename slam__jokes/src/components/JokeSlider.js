import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "../styles/container.module.css";
import JokeContainer from "./JokeContainer";
import JokesContainer from "./JokesContainer";
import Modal from "./Modal";
import Comment from "./Comment";
const JokeSlider = (props) => {
  const [showComment, setShowComment] = useState(false);
  const showCommentList = () => {
    setShowComment(!showComment);
  };
   const show = {
     display: showComment ? "block" : "none",
   };
   const toggleComment = () => {
     setShowComment(!showComment);
   };
  const jokesId = props.fetchData.map((el) => el.id);
  const toggle = () => {
    props.setShowModal(true);
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
  let numComments;
  const jokeCommentNum = props.fetchData.map((el) => {
    if (el.comments.length !== 0) {
      if (joke[props.catIndex]) return (numComments = el.comments.length);
      return console.log("No comments found");
    }
  });

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const object = props.fetchData.map((el) => {
    return (
      <JokeContainer
        punchline={el.punchline}
        setup={el.setup}
        toggle={toggle}
        key={el.id}
      />
    );
  });
  const objectModal = props.fetchData.map((el) => {
    return (
      <JokesContainer
        punchline={el.punchline}
        setup={el.setup}
        toggle={toggle}
        key={el.id}
      />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 3000);
  });

  return (
    <div className="sm:hidden">
      <motion.div
        className="flex w-full cursor-grab min-h[500px] overflow-hidden"
        ref={carousel}
      >
        <motion.div
          className={style.inner__carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div
            className={`flex flex-row justify-between w-full`}
            style={{ paddingLeft: "1%" }}
          >
            {object}
            <Modal
              showModal={props.showModal}
              setShowModal={props.setShowModal}
              showComment={props.showComment}
              objectModal={objectModal}
              catIndex={props.catIndex}
              setCatIndex={props.setCatIndex}
              like={props.like}
              disLike={props.disLike}
              thumbsDown={props.thumbsDown}
              thumbsUp={props.thumbsUp}
              showCommentList={showCommentList}
              allComments={allComments}
              numComments={jokeCommentNum[props.catIndex]}
              comment={props.comment}
              handleChangeComment={props.handleChangeComment}
              submitJokeComment={props.submitJokeComment}
              toggleComment={toggleComment}
              show={show}
            />
            {/* flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4 */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JokeSlider;
