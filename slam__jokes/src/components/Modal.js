import React from "react";
import CommentForm from "./CommentForm";
import Reaction from "./Reaction";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import RandomJokeBtn from "./RandomJokeBtn";

const Modal = (props) => {
  //! The review is same as a carousel you know in css and normal js

  //! This function helps us check and make sure we don't go above the length of our array and below its length
  const checkNumber = (number) => {
    if (number > props.object.length - 1) {
      return 0;
    }
    if (number < 0) return props.object.length - 1;
    return number;
  };

  //! This function help us in moving to the previous Joke element
  const prevJoke = () => {
    return props.setCatIndex((curr) =>
      curr === 0 ? props.object.length - 1 : curr - 1
    );
  };

  //! This function help us in moving to the next Joke element
  const nextJoke = () => {
    return props.setCatIndex((curr) =>
      curr === props.object.length - 1 ? 0 : curr + 1
    );
  };

  //! return random Joke Index
  const randomJoke = () => {
    let randomIndex = Math.floor(Math.random() * props.object.length);
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
            <div className="relative w-1/1 my-6 mx-auto max-w-3/4 lg:p-32 md:p-12">
              <button
                className="mb-8 text-black text-3xl leading-none font-bold outline-none focus:outline-none flex justify-center items-center w-full"
                onClick={() => props.setShowModal(false)}
              >
                <span className="dark:text-white bg-transparent text-black opacity-1 h-6 w-6 text-2xl z-40 block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              {/*content*/}
              <div className="dark:text-slate-400 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  {/* <h3 className="text-3xl font-semibold">Modal Title</h3> */}
                </div>
                {/*body*/}
                <div className="w-full overflow-hidden">
                  <div className="flex transition-transform ease-out duration-500 dark:text-[#000]">
                    {props.object[props.catIndex]}
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between inset-0 items-center p-4">
                <ChevronLeft prevJoke={prevJoke} />
                <ChevronRight nextJoke={nextJoke} />
              </div>
              <div className="flex items-center justify-end flex-col rounded-b mt-4 relative">
                <RandomJokeBtn randomJoke={randomJoke} />
                <Reaction />
                <CommentForm />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
