import React, { useState } from "react";
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
const App = () => {
  //!Show modal state
  const [showModal, setShowModal] = useState(false);

  //!Nav display state
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
  const [createJokeCategory, setCreateJokeCategory] = useState("African Jokes");

  //! form data input joke
  const [createJokeData, setCreateJokeData] = useState({
    punchline: "",
    body: "",
    author: "",
    time: "",
    jokeCategory: createJokeCategory,
  });

  //!selected category state
  const [selectCategory, setSelectCategory] = useState("African Jokes");

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
  const handleSubmit = (event) => {
    event.preventDefault();
    setCreateJokeData({
      punchline: "",
      body: "",
      author: "",
      time: "",
      jokeCategory: createJokeCategory,
    });
  };

  const handleCreateDataChange = (e) => {
    setCreateJokeCategory(e.target.value);
  };
  return (
    <div className="lg:flex min-h-[100vh]">
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
          <DarkModeSwitch
            className="sm:hidden md:hidden"
            size={35}
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>
        <Jokes
          selectCategory={selectCategory}
          catValue={catValue}
          catIndex={catIndex}
          setCatIndex={setCatIndex}
        />
        <CreateJoke
          createJokeCategory={createJokeCategory}
          createJokeData={createJokeData}
          handleSubmit={handleSubmit}
          createJokeHandleChange={createJokeHandleChange}
          handleCreateDataChange={handleCreateDataChange}
          displayCreateJoke={displayCreateJoke}
          setDisplayCreateJoke={setDisplayCreateJoke}
          handleClick={handleClick}
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
          />
          <JokeSlider
            selectCategory={selectCategory}
            catValue={catValue}
            catIndex={catIndex}
            setCatIndex={setCatIndex}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
