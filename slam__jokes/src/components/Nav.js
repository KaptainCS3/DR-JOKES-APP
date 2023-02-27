import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
// import DropDown from "./DropDown";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import CategorySelect from "./CategorySelect";
import CreateJoke from "./CreateJoke";
const Nav = (props) => {
  const showForm = () => {
    props.handleClick();
    props.setIsNavBar(false);
  };
  const showNav = () => {
    props.setIsNavBar(true);
  };
  const hideNav = () => {
    props.setIsNavBar(false);
  };
  return (
    //Main nav bar
    <nav
      className={`dark:bg-[#121212] bg-[#6200EE] nav w-full flex min-h-0 sm:flex-row h-12 justify-between items-center px-4 md:flex-row h-16 py-10 lg:min-h-[118vh] flex-col justify-start`}
    >
      {/* display on small screen and mobile */}
      <div className="hamburger__menu md:hidden lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white cursor-pointer"
          onClick={showNav}
        />
      </div>
      <h1 className="font-bold cursor-pointer lg:h-1/6">
        <span className="text-xl text-[#03DAC6] dark:text-gray-200">Slam</span>{" "}
        <span className="text-xl text-white dark:text-gray-200">Jokes</span>
        <sup className="text-xl text-white dark:text-gray-200">++</sup>
      </h1>
      {/* toggle open nav bar*/}
      <div
        className={
          props.isNavBar
            ? `sm:transition-[width] ease-in-out delay-150 absolute z-[100] top-0 left-0 w-[70%] min-h-[120%] bg-[#6200EE] text-white dark:bg-[#121212] text-gray-200 md:hidden lg:hidden`
            : "hidden"
        }
      >
        <div className="hamburger__menu pt-2 pl-4">
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl cursor-pointer"
            onClick={hideNav}
          />
          <div className="sm:flex flex-col md:hidden lg:hidden">
            <div className="mt-12">
              {/* <DropDown /> */}
              <p className="pt-4">
                <CategorySelect
                  handleChange={props.handleChange}
                  selectCategory={props.selectCategory}
                  setSelectedCategory={props.setSelectedCategory}
                />
              </p>
              <button className="pt-4" onClick={showForm}>
                Create Jokes
              </button>
              <p className="pt-4 flex cursor-pointer">
                {/* toggle dark mode */}
                <span className="pr-2">
                  {props.isDarkMode ? "Light" : "Dark"}
                </span>
                <DarkModeSwitch
                  style={{ marginBottom: "2rem" }}
                  checked={props.isDarkMode}
                  onChange={props.toggleDarkMode}
                  size={24}
                />
              </p>
            </div>
            <p className="mt-[20rem]">Settings</p>
          </div>
        </div>
      </div>

      {/* Nav content for medium screens  md*/}
      <div
        className={`table__view w-[75%] text-white dark:text-gray-300 font-bold flex justify-between sm:hidden lg:hidden`}
      >
        <div className="flex w-full justify-evenly">
          <button className="flex items-center">
            Create Joke
            <CreateJoke />
          </button>
          <button>
            <CategorySelect
              handleChange={props.handleChange}
              selectCategory={props.selectCategory}
              setSelectedCategory={props.setSelectedCategory}
            />
          </button>
          <button>Settings</button>
        </div>
        <div className="mode flex items-center">
          {/* toggle dark mode */}
          <span className="pr-2">{props.isDarkMode ? "Light" : "Dark"}</span>
          <DarkModeSwitch
            checked={props.isDarkMode}
            onChange={props.toggleDarkMode}
            size={30}
          />
        </div>
      </div>

      {/* Nav content for large screens lg */}

      <div className="hamburger__menu text-white h-full flex flex-col justify-between md:hidden sm:hidden">
        <div>
          <button className="block">
            Create Joke
            <CreateJoke />
          </button>
          <button className="block">
            <CategorySelect
              handleChange={props.handleChange}
              selectCategory={props.selectCategory}
              setSelectedCategory={props.setSelectedCategory}
            />
          </button>
          <button className="block">Settings</button>
        </div>
        <div>
          <div className="text-white">
            <p>
              <button>About</button>
            </p>
            <p>
              {" "}
              <button>Contact Us</button>
            </p>
            <p>
              {" "}
              <button>Terms and conditions</button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
