import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const CreateJokes = (props) => {
  return (
    <div className="overflow-hidden h-full justify-end pr-8 my-4 cursor-pointer sm:hidden">
      {props.displayCreateJoke ? (
        <>
          <div
            onClick={props.closeCreateJoke}
            className="absolute inset-0 flex w-full justify-center z-40 h-[100px] items-end dark:text-black sm:hidden"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-3xl text-black dark:text-white"
            />
          </div>
          <form
            onSubmit={props.submitJokeData}
            className="bg-[#6200EE] opacity-96 absolute inset-0 flex flex-col justify-center items-center overflow-x-hidden dark:bg-black"
          >
            <div className="bg-black-400 min-w-[85%] h-[50vh] flex justify-evenly flex-wrap opacity-100 py-4 px-[4em] focus:outline-none">
              <div className="flex w-full justify-between h-full">
                <div className="w-[48%] flex flex-col justify-between h-full">
                  <div className="w-full">
                    <div className="">
                      <input
                        type="text"
                        placeholder="punchline"
                        name="punchline"
                        value={props.createJokeData.punchline}
                        onChange={props.createJokeHandleChange}
                        className="w-full py-3 px-3 rounded focus:outline-none"
                      />
                      <span className="text-white dark:text-red-600">
                        {props.createJokeData.punchline.length < 15
                          ? `Punchline line too short`
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <input
                        type="text"
                        placeholder="author name"
                        name="author_name"
                        value={props.createJokeData.author_name}
                        onChange={props.createJokeHandleChange}
                        className="w-full py-3 px-3 rounded opacity-100 focus:outline-none"
                      />
                      <span className="text-white dark:text-red-600">
                        {props.createJokeData.author_name.length < 10
                          ? `author name too short`
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <input
                        type="email"
                        placeholder="author email"
                        name="author_email"
                        value={props.createJokeData.author_email}
                        onChange={props.createJokeHandleChange}
                        className="w-full py-3 px-3 rounded opacity-100 focus:outline-none"
                      />
                      <span className="text-white dark:text-red-600">
                        {!props.createJokeData.author_email.match(
                          /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
                        )
                          ? `Enter valid email address`
                          : ""}
                      </span>
                    </div>
                  </div>
                  <select
                    className="w-full px- py-3 rounded focus:outline-none mb-5"
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
                </div>
                <div className="w-[48%] h-full">
                  <div className="h-[85%]">
                    <textarea
                      type="text"
                      placeholder="punchline content"
                      name="setup"
                      value={props.createJokeData.setup}
                      onChange={props.createJokeHandleChange}
                      className="w-full py-3 h-full px-3 rounded opacity-100 focus:outline-none"
                    />
                    <span className="text-white dark:text-red-600">
                      {props.createJokeData.setup.length < 15
                        ? `Punchline line too short`
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border mt-4 h-16 z-50 w-1/3 text-xl rounded text-white flex dark:text-white">
                <button className="w-full">Add Joke</button>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default CreateJokes;
