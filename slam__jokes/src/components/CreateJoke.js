import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
const CreateJoke = (props) => {
  return (
    // md:hidden lg:hidden
    <div className="sm:flex justify-end pr-8 my-4 cursor-pointer md:hidden lg:hidden">
      <div
        onClick={props.handleClick}
        className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#03DAC6] font-bold shadow"
      >
        <FontAwesomeIcon icon={faPlus} className="text-xl" />
      </div>
      {props.displayCreateJoke ? (
        <>
          <div
            onClick={props.closeCreateJoke}
            className="sm:absolute inset-0 flex w-full justify-center z-40 h-[40px] items-end dark:text-black"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-3xl text-black dark:text-white"
            />
          </div>
          <form
            onSubmit={props.submitJokeData}
            className="bg-[#6200EE] opacity-96 absolute inset-0 flex flex-col justify-center items-center overflow-x-hidden dark:bg-black"
            // onSubmit={props.handleSubmit}
          >
            <div className="bg-black-400 min-w-[28em] h-[100vh] flex justify-evenly flex-col opacity-100 py-4 px-[4em] focus:outline-none">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="punchline"
                  name="punchline"
                  value={props.createJokeData.punchline}
                  onChange={props.createJokeHandleChange}
                  required
                  className="w-full py-2 px-3 rounded focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="punchline content"
                  name="setup"
                  value={props.createJokeData.setup}
                  onChange={props.createJokeHandleChange}
                  required
                  className="w-full py-2 h-[40px] px-3 rounded opacity-100 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="author name"
                  name="author_name"
                  value={props.createJokeData.author_name}
                  onChange={props.createJokeHandleChange}
                  required
                  className="w-full py-2 px-3 rounded opacity-100 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="author email"
                  name="author_email"
                  value={props.createJokeData.author_email}
                  onChange={props.createJokeHandleChange}
                  required
                  className="w-full py-2 px-3 rounded opacity-100 focus:outline-none"
                />
              </div>
              <select
                className="w-full py-2 px-3 rounded focus:outline-none"
                value={props.createJokeCategory}
                name="category_id"
                onChange={props.handleCreateDataChange}
              >
                <option value={null}>Select Category.......</option>
                <option value={1} selected>
                  African Jokes
                </option>
                <option value={2}>Western World Jokes</option>
                <option value={3}>Family Jokes</option>
                <option value={4}>Relationship Jokes</option>
                <option value={5}>Education Jokes</option>
                <option value={6}>Tech Jokes</option>
              </select>
              <div className="border z-50 w-full py-2 text-xl text-center rounded text-white dark:text-white">
                <button className="w-full">Add Joke</button>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default CreateJoke;
