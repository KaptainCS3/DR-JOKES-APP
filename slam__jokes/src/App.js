import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Welcome from "./components/Welcome";
import Jokes from "./components/Jokes";
import CreateJoke from "./components/CreateJoke";
import Footer from "./components/Footer";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./hooks/useDarkMode";
import JokeSlider from "./components/JokeSlider";
import catValue from "./categoryValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Comment from "./components/Comment";
const App = () => {
  //!Add comment state
  const [comment, setComment] = useState({
    comment: "",
  });

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

  // console.log(fetchData);
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
  // const [postJoke, setPostJoke] = useState([]);
  //! Dark mode handler
  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme);
    setDarkMode(checked);
  };

  //!track selected category value change
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
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

  const handleChangeComment = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => {
      return {
        ...prevComment,
        [name]: value,
      };
    });
  };

  const submitJokeComment = async (event) => {
    event.preventDefault();
    const response = await fetch(APIComment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        joke_id: Math.floor(Math.random() * 35) + 1,
        comment: comment.comment,
      }),
    });
    if (!response.ok) {
      throw new Error(response.error);
    } else {
      const data = await response.json();
      console.log(data, response);
      alert("Comment successfully Added 😎😄😅😎");
      setComment({
        comment: "",
      });
    }
  };
  //!alternative using local storage
  // const comments = fetchData;
  // localStorage.setItem("comments", JSON.stringify(comments));
  // var storedNames = JSON.parse(localStorage.getItem("comments"));
  let numComments;
  console.log(numComments);
  const jokeCommentNum = fetchData.map((el) => {
    if (el.comments.length !== 0) {
      if (catIndex === el.id - 1) {
        if (numComments === "undefined") return (numComments = 0);
        else numComments = el.comments.length;
      } else {
        return console.log("No comments found");
      }
    }
  });
  const jokeComment = fetchData.map((el) => {
    if (el.comments.length !== 0) {
      return el.comments.map((cmt) => {
        if (catIndex === el.id - 1) {
          return (
            <article
              className={`cursor-pointer dark:bg-slate-400 sm:w-full  px-[2rem] mr-0 my-4 py-[0.5rem] shadow rounded-xl flex flex-col`}
            >
              <h4 className={`mb-[0.25rem] font-bold`}>
                @{cmt.commenter.name}
              </h4>
              <p className={`mb-[0.75rem]`}>{cmt.comment}</p>
            </article>
          );
        } else {
          return null;
        }
      });
    }
  });
  console.log(fetchData);
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
            handleChange={handleChange}
            handleClick={handleClick}
            displayCreateJoke={displayCreateJoke}
            setDisplayCreateJoke={setDisplayCreateJoke}
            isNavBar={isNavBar}
            setIsNavBar={setIsNavBar}
          />
          <main className="dark:bg-[#121212] lg:w-4/5">
            <div className="lg:flex justify-between items-center h-16 px-4">
              <Welcome selectCategory={selectCategory} />
              <div className="flex items-center sm:hidden md:hidden">
                {/* toggle dark mode */}
                <span className="pr-4 font-bold text-xl dark:text-white">
                  {isDarkMode ? "Light" : "Dark"}
                </span>
                <DarkModeSwitch
                  // className="sm:hidden md:hidden"
                  size={35}
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
              </div>
            </div>

            {/* //! Main Mobile component */}
            <Jokes
              selectCategory={selectCategory}
              // catValue={catValue}
              catIndex={catIndex}
              setCatIndex={setCatIndex}
              fetchData={fetchData}
              like={like}
              disLike={disLike}
              thumbsDown={thumbsDown}
              thumbsUp={thumbsUp}
              jokeComment={jokeComment}
              showComment={showComment}
              setShowComment={setShowComment}
              numComments={numComments}
              comment={comment}
              handleChangeComment={handleChangeComment}
              submitJokeComment={submitJokeComment}
              toggleComment={toggleComment}
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
              <JokeSlider
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={fetchData}
                like={like}
                disLike={disLike}
                thumbsDown={thumbsDown}
                thumbsUp={thumbsUp}
                jokeComment={jokeComment}
                showComment={showComment}
                numComments={numComments}
                comment={comment}
                handleChangeComment={handleChangeComment}
                submitJokeComment={submitJokeComment}
              />
              <JokeSlider
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={fetchData}
                like={like}
                disLike={disLike}
                thumbsDown={thumbsDown}
                thumbsUp={thumbsUp}
                jokeComment={jokeComment}
                showComment={showComment}
                setShowComment={setShowComment}
                numComments={numComments}
                comment={comment}
                handleChangeComment={handleChangeComment}
                submitJokeComment={submitJokeComment}
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

//  const cmt = storedNames.map((el) => {
//    if (el.comments.length !== 0)
//      if (catIndex === el.id) return el.comments.length;
//  });
