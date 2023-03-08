import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Welcome from "./components/Welcome";
import Jokes from "./components/Jokes";
import CreateJoke from "./components/CreateJoke";
import CreateJokes from "./components/CreateJokes";
import Footer from "./components/Footer";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./hooks/useDarkMode";
import JokeSlider from "./components/JokeSlider";
import catValue from "./categoryValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Jump from "react-reveal/Jump";
const App = () => {
  //!Add comment state
  const [comment, setComment] = useState({
    comment: "",
  });

  let joke_id;

  const [showComment, setShowComment] = useState(true);
  const toggleComment = () => {
    setShowComment(!showComment);
  };

  //!Show modal state
  const [showModal, setShowModal] = useState(false);

  // !Nav display state
  const [isNavBar, setIsNavBar] = useState(false);

  //! Theme color State
  const [colorTheme, setColorTheme] = useDarkMode();

  //!Dark mode state
  const [isDarkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  //!Display create joke
  const [displayCreateJoke, setDisplayCreateJoke] = useState(false);
  const handleClick = () => {
    setDisplayCreateJoke(true);
  };
  const closeCreateJoke = () => {
    setDisplayCreateJoke(false);
  };

  //! category index state
  const [catIndex, setCatIndex] = useState(0);

  //!track input create form
  //! select joke category state
  const [createJokeCategory, setCreateJokeCategory] = useState(1);
console.log(createJokeCategory);
  //! form data input joke
  const [createJokeData, setCreateJokeData] = useState({
    punchline: "",
    setup: "",
    author_name: "",
    author_email: "",
    category_id: createJokeCategory,
  });

  //!selected category state for rendering component
  const [selectCategory, setSelectCategory] = useState(1);

  //!response state data
  const [fetchData, setFetchData] = useState([]);

  //!like and dislike joke state
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const thumbsUp = () => {
    setLike(!like);
    setDisLike(false);
  };
  const thumbsDown = () => {
    setDisLike(!disLike);
    setLike(false);
  };

  //! Dark mode handler
  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme);
    setDarkMode(checked);
  };

  const createJokeHandleChange = (event) => {
    const { name, value } = event.target;
    setCreateJokeData((prevCreateJokeData) => {
      return {
        ...prevCreateJokeData,
        [name]: value,
      };
    });
  };

  //! prevent page reload
  const handleCreateDataChange = (e) => {
    setCreateJokeCategory(e.target.value);
  };

  //!useEffect prevent component re-Render
  useEffect(() => {
    fetchJokes();
  }, []);

  //!API link
  const API = `https://api.jokes.digitalrenter.com/api/jokes`;
  const APIComment = `https://api.jokes.digitalrenter.com/api/comments`;
  //! fetch data from API
  const fetchJokes = async () => {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error(response.error);
    } else {
      const data = await response.json();
      setFetchData(data);
    }
  };
  //! post date to API
  const submitJokeData = async (event) => {
    event.preventDefault();
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        punchline: createJokeData.punchline,
        setup: createJokeData.setup,
        author_name: createJokeData.author_name,
        author_email: createJokeData.author_email,
        category_id: createJokeData.category_id,
      }),
    });
    if (!response.ok) {
      throw new Error(response.error);
    } else {
      const data = await response.json();
      console.log(data, response);
      alert("Joke successfully Added 😎😄😅😎");
      setCreateJokeData({
        punchline: "",
        setup: "",
        author_name: "",
        author_email: "",
        category_id: createJokeCategory,
      });
    }
  };

  console.log(createJokeCategory);
  const handleChangeComment = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => {
      return {
        ...prevComment,
        [name]: value,
      };
    });
  };

  const allJokes = fetchData.filter((el) => el.category_id === selectCategory);
  joke_id = catIndex + 1;
  // const submitJokeComment = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(APIComment, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       joke_id: joke_id,
  //       comment: comment.comment,
  //     }),
  //   });
  //   if (!response.ok) {
  //     throw new Error(response.error);
  //   } else {
  //     const data = await response.json();
  //     console.log(data);

  //     alert("Comment successfully Added 😎😄😅😎");
  //     setComment({
  //       comment: "",
  //     });
  //   }
  // };

  // const show = {
  //   display: `${showComment ? "none" : ""}`,
  // };
  const onNewCommentReceived = (newComment) => {
    console.log(`Data sent is  ${newComment}`);

    const updatedJokes = allJokes.map((joke) => {
      if (joke.id === newComment.data.joke_id) {
        joke.comments = [newComment.data, ...joke.comments];
      }
      return joke;
    });
    setFetchData(updatedJokes);
    console.log(updatedJokes);
  };
  console.log(createJokeData);
  return (
    <div className="w-full lg:flex min-h-[100vh]">
      {fetchData.length === 0 ? (
        <h1 className="w-full font-bold text-2xl flex justify-center items-center text-center h-[90vh]">
          Wait a moment Joke Loading.........
        </h1>
      ) : (
        <>
          <Nav
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
            isDarkMode={isDarkMode}
            setDarkMode={setColorTheme}
            toggleDarkMode={toggleDarkMode}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            handleClick={handleClick}
            displayCreateJoke={displayCreateJoke}
            setDisplayCreateJoke={setDisplayCreateJoke}
            isNavBar={isNavBar}
            setIsNavBar={setIsNavBar}
            setCatIndex={setCatIndex}
          />
          <main className="dark:bg-[#121212] lg:w-4/5">
            <div className="lg:flex justify-between items-center h-16 px-4">
              <Welcome selectCategory={selectCategory} />
              <div className="flex items-center sm:hidden md:hidden">
                {/* toggle dark mode */}
                <span className="pr-4 font-bold text-xl dark:text-white">
                  {isDarkMode ? "Light" : "Dark"}
                </span>
                <Jump>
                  <DarkModeSwitch
                    // className="sm:hidden md:hidden"
                    size={35}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                </Jump>
              </div>
            </div>

            {/* //! Main Mobile component */}
            <Jokes
              selectCategory={selectCategory}
              // catValue={catValue}
              catIndex={catIndex}
              setCatIndex={setCatIndex}
              fetchData={allJokes}
              like={like} //like function
              disLike={disLike} //dislike function
              thumbsDown={thumbsDown}
              thumbsUp={thumbsUp}
              // jokeComment={jokeComment}
              showComment={showComment}
              setShowComment={setShowComment}
              // numComments={numComments} //number of comment for joke
              comment={comment} //comment content
              handleChangeComment={handleChangeComment}
              // submitJokeComment={submitJokeComment}
              toggleComment={toggleComment} // toggle comment show/hide
              // show={show}
              setComment={setComment}
              onNewComment={(newComment) => onNewCommentReceived(newComment)}
            />
            <CreateJoke
              createJokeCategory={createJokeCategory}
              createJokeData={createJokeData}
              createJokeHandleChange={createJokeHandleChange}
              handleCreateDataChange={handleCreateDataChange}
              displayCreateJoke={displayCreateJoke}
              setDisplayCreateJoke={setDisplayCreateJoke}
              handleClick={handleClick}
              submitJokeData={submitJokeData}
              closeCreateJoke={closeCreateJoke}
            />
            {/* //!Joke component from Tablet and Desktop */}
            <div>
              <CreateJokes
                createJokeCategory={createJokeCategory}
                createJokeData={createJokeData}
                createJokeHandleChange={createJokeHandleChange}
                handleCreateDataChange={handleCreateDataChange}
                displayCreateJoke={displayCreateJoke}
                setDisplayCreateJoke={setDisplayCreateJoke}
                handleClick={handleClick}
                submitJokeData={submitJokeData}
                closeCreateJoke={closeCreateJoke}
                // show={show}
              />
              <JokeSlider
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={allJokes}
                like={like}
                disLike={disLike}
                thumbsDown={thumbsDown}
                thumbsUp={thumbsUp}
                // jokeComment={jokeComment}
                showComment={showComment}
                // numComments={numComments}
                comment={comment}
                handleChangeComment={handleChangeComment}
                // submitJokeComment={submitJokeComment}
                toggleComment={toggleComment} // toggle comment show/hide
                // show={show}
                onNewComment={(newComment) => onNewCommentReceived(newComment)}
              />
              <JokeSlider
                // show={show}
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={allJokes}
                like={like}
                disLike={disLike}
                thumbsDown={thumbsDown}
                thumbsUp={thumbsUp}
                // jokeComment={jokeComment}
                showComment={showComment}
                setShowComment={setShowComment}
                // numComments={numComments}
                comment={comment}
                handleChangeComment={handleChangeComment}
                // submitJokeComment={submitJokeComment}
                toggleComment={toggleComment} // toggle comment show/hide
                onNewComment={(newComment) => onNewCommentReceived(newComment)}
              />
            </div>
            {/* //!Desktop help component */}
            <div className="w-full flex justify-end pr-4 pt-2 sm:hidden md:hidden">
              <div className="bg-black w-16 h-16 rounded-full text-white flex justify-center items-center text-4xl dark:text-white border-2">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
            </div>
          </main>
          {/*//! footer Desktop and Tablet  */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
