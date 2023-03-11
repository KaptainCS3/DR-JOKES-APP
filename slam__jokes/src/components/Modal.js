import React from "react";
import CommentForm from "./CommentForm";
import Reaction from "./Reaction";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import RandomJokeBtn from "./RandomJokeBtn";
import CommentList from "./CommentList";

const Modal = (props) => {
  //! The review is same as a carousel you know in css and normal js

  //! This function helps us check and make sure we don't go above the length of our array and below its length
  const checkNumber = (number) => {
    if (number > props.objectModal.length - 1) {
      return 0;
    }
    if (number < 0) return props.objectModal.length - 1;
    return number;
  };

  //! This function help us in moving to the previous Joke element
  const prevJoke = () => {
    return props.setCatIndex((curr) =>
      curr === 0 ? props.objectModal.length - 1 : curr - 1
    );
  };

  //! This function help us in moving to the next Joke element
  const nextJoke = () => {
    return props.setCatIndex((curr) =>
      curr === props.objectModal.length - 1 ? 0 : curr + 1
    );
  };

  //! return random Joke Index
  const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * props.objectModal.length);
    if (randomIndex === props.catIndex) {
      randomIndex = props.catIndex + 1;
    }
    props.setCatIndex(checkNumber(randomIndex));
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center p-8">
            <div className="relative w-[68%] mx-auto max-w-3/4 lg:p-32">
              <button
                className="mb-8 text-black text-3xl leading-none font-bold outline-none focus:outline-none flex justify-center items-center w-full"
                onClick={() => props.setShowModal(false)}
              >
                <span className="dark:text-white bg-transparent text-black opacity-1 h-6 w-6 text-4xl z-40 block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              <div className="dark:text-slate-400 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="w-full overflow-hidden">
                  <div className="w-full flex transition-transform ease-out duration-500 dark:text-[#000]">
                    {props.objectModal[props.catIndex]}
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between inset-0 items-center -mx-16 -mt-24">
                <ChevronLeft prevJoke={prevJoke} />
                <ChevronRight nextJoke={nextJoke} />
              </div>
              <div className="flex items-center justify-end flex-col rounded-b mt-4 relative">
                <RandomJokeBtn randomJoke={randomJoke} />
                <Reaction
                  like={props.like}
                  disLike={props.disLike}
                  thumbsDown={props.thumbsDown}
                  thumbsUp={props.thumbsUp}
                  showCommentList={props.showCommentList}
                  numComments={props.numComments}
                  toggleComment={props.toggleComment}
                />
                <CommentForm
                  comment={props.comment}
                  handleChangeComment={props.handleChangeComment}
                  submitJokeComment={props.submitJokeComment}
                />
                <div className="w-full h-2" style={props.show}>
                  {props.allComments}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
