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
const App = () => {
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
  //!Submit new joke
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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setCreateJokeData({
  //     punchline: "",
  //     setup: "",
  //     author_name: "",
  //     author_email: "",
  //     category_id: createJokeCategory,
  //   });
  // };

  const handleCreateDataChange = (e) => {
    setCreateJokeCategory(e.target.value);
  };

  //!useEffect prevent component re-Render
  useEffect(() => {
    fetchJokes();
    // post
  }, []);

  //!API link
  const API = `https://api.jokes.digitalrenter.com/api/jokes`;
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
            <Jokes
              selectCategory={selectCategory}
              // catValue={catValue}
              catIndex={catIndex}
              setCatIndex={setCatIndex}
              fetchData={fetchData}
            />
            <CreateJoke
              createJokeCategory={createJokeCategory}
              createJokeData={createJokeData}
              // handleSubmit={handleSubmit}
              createJokeHandleChange={createJokeHandleChange}
              handleCreateDataChange={handleCreateDataChange}
              displayCreateJoke={displayCreateJoke}
              setDisplayCreateJoke={setDisplayCreateJoke}
              handleClick={handleClick}
              submitJokeData={submitJokeData}
              closeCreateJoke={closeCreateJoke}
            />
            <div>
              <JokeSlider
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={fetchData}
              />
              <JokeSlider
                selectCategory={selectCategory}
                catValue={catValue}
                catIndex={catIndex}
                setCatIndex={setCatIndex}
                showModal={showModal}
                setShowModal={setShowModal}
                fetchData={fetchData}
              />
            </div>
            <div className="w-full flex justify-end pr-4 pt-2 sm:hidden md:hidden">
              <div className=" bg-[#000] dark:text-dark border-2 bg-white w-16 h-16 rounded-full text-white flex justify-center items-center text-4xl">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
