import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/placeholder.module.css";
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
              <div className="w-full form__input">
                <input
                  type="text"
                  placeholder="punchline"
                  name="punchline"
                  value={props.createJokeData.punchline}
                  onChange={props.createJokeHandleChange}
                  className="w-full py-2 px-3 rounded focus:outline-none"
                />
                <span className={styles.placeholder}></span>
                <span className="text-white dark:text-red-600">
                  {props.createJokeData.punchline.length < 15
                    ? `Punchline content too short`
                    : ""}
                </span>
              </div>
              <div className="w-full form__input">
                <textarea
                  type="text"
                  placeholder="punchline content"
                  name="setup"
                  value={props.createJokeData.setup}
                  onChange={props.createJokeHandleChange}
                  className="w-full py-2 h-[40px] px-3 rounded opacity-100 focus:outline-none"
                />
                <span className="text-white dark:text-red-600">
                  {props.createJokeData.setup.length < 15
                    ? `Punchline line too short`
                    : ""}
                </span>
              </div>
              <div className="w-full form__input">
                <input
                  type="text"
                  placeholder="author name"
                  name="author_name"
                  value={props.createJokeData.author_name}
                  onChange={props.createJokeHandleChange}
                  className="w-full py-2 px-3 rounded opacity-100 focus:outline-none"
                />
                <span className="text-white dark:text-red-600">
                  {props.createJokeData.author_name.length < 10
                    ? `author name too short`
                    : ""}
                </span>
              </div>
              <div className="w-full form__input">
                <input
                  type="email"
                  placeholder="author email"
                  name="author_email"
                  value={props.createJokeData.author_email}
                  onChange={props.createJokeHandleChange}
                  className="w-full py-2 px-3 rounded opacity-100 focus:outline-none"
                />
                <span className="text-white dark:text-red-600">
                  {!props.createJokeData.author_email.match(
                    /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
                  )
                    ? `Enter valid email address`
                    : ""}
                </span>
              </div>
              <select
                className="w-full py-2 px-3 rounded focus:outline-none text-xl"
                value={props.createJokeCategory}
                name="category_id"
                onChange={props.handleCreateDataChange}
              >
                <option value={null}>Select Category.......</option>
                <option value={1} selected>
                  👨‍👨‍👧‍👧 Family Jokes
                </option>
                <option value={2}>🧑🏼 Political Jokes</option>
                <option value={3}>🕍 Religions Jokes</option>
                <option value={4}>🏫 Education Jokes</option>
                <option value={5}>❤ Emotional Jokes</option>
                {/* <option value={6}>💻 Tech Jokes</option> */}
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
