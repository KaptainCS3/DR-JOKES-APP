import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import catValue from "../categoryValue";
import jokesTemplate from "../jokes";
const CreateJoke = (props) => {
  let index = catValue.indexOf(props.createJokeCategory);
  // console.log(index);
  // console.log(object);
  const submitJoke = () => {
    if (props.createJokeCategory === jokesTemplate[index].category.name) {
      console.log(jokesTemplate[index].joke);
    } else {
      return console.log("not found");
    }
  };
  return (
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
            className="absolute inset-0 flex w-full justify-center z-40 h-[150px] items-end dark:text-black"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-3xl text-white dark:text-black"
            />
          </div>
          <form
            className="bg-black dark:bg-white absolute inset-0 flex flex-col justify-center items-center min-h-[120vh] max-w-full dark:bg-black"
            onSubmit={props.handleSubmit}
          >
            <div className="opacity-100 focus:outline-none px-16 border">
              <div className="w-full">
                <input
                  placeholder="punchline"
                  name="punchline"
                  value={props.createJokeData.punchline}
                  onChange={props.createJokeHandleChange}
                  className="opacity-100 focus:outline-none"
                />
              </div>
              <div>
                <input
                  placeholder="body"
                  name="body"
                  value={props.createJokeData.body}
                  onChange={props.createJokeHandleChange}
                  className="opacity-100 focus:outline-none"
                />
              </div>
              <div>
                <input
                  placeholder="author"
                  name="author"
                  value={props.createJokeData.author}
                  onChange={props.createJokeHandleChange}
                  className="opacity-100 focus:outline-none"
                />
              </div>
              <div>
                <input
                  placeholder="time"
                  name="time"
                  value={props.createJokeData.time}
                  onChange={props.createJokeHandleChange}
                  className="opacity-100 focus:outline-none"
                />
              </div>
              <select
                className="focus:outline-none"
                value={props.createJokeCategory}
                name={props.createJokeData.jokeCategory}
                onChange={props.handleCreateDataChange}
              >
                <option value={null}>Select Category.......</option>
                <option value="African Jokes" selected>
                  African Jokes
                </option>
                <option value="Western World Jokes">Western World Jokes</option>
                <option value="Family Jokes">Family Jokes</option>
                <option value="Relationship Jokes">Relationship Jokes</option>
                <option value="Education Jokes">Education Jokes</option>
                <option value="Tech Jokes">Tech Jokes</option>
              </select>
              <div className="bg-[#6200EE] z-50">
                <button onClick={submitJoke}>Submit</button>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default CreateJoke;
