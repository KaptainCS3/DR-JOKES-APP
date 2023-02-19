import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import Example from "./Example";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  // const categoriesData = categories
  const [isNavBar, setIsNavBar] = useState(false);
  const showNav = () => {
    setIsNavBar(true);
  };
  const hideNav = () => {
    setIsNavBar(false);
  };
  console.log(isNavBar);
  return (
    <nav className="bg-[#6200EE] dark:bg-[#121212] nav sm:bg-[#6200EE] flex justify-between items-center h-12 w-full px-4 md:w-full py-10 flex lg:w-1/4">
      <div className="hamburger__menu md:hidden lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white cursor-pointer"
          onClick={showNav}
        />
      </div>
      <h1 className="font-bold">
        <span className="text-xl text-white">Slam</span>{" "}
        <span className="text-xl text-white">Jokes</span>
        <sup className="text-xl text-white">++</sup>
      </h1>
      <div className="table__view w-[70%] text-white font-bold flex justify-between sm:hidden lg:hidden">
        <>
          <button>
            <Example
              width="25rem"
              text="CREATE JOKE"
              header="CREATE JOKE/RIDDLE"
            />
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
          <button>
            <Example width="30rem" text="CATEGORIES" header="CATEGORIES" />
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
          <button>
            <Example width="25rem" text="SETTINGS" header="SETTINGS" />
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
        </>
        <div className="mode">
          <img src={moon} alt="moon" />
        </div>
      </div>
      {/* "sm:absolute top-0 left-0 w-[70%] h-full bg-[#6200EE] text-white" */}
      <div
        className={
          isNavBar
            ? "sm:absolute top-0 left-0 w-[70%] min-h-[120%] bg-[#6200EE] text-white"
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
              {/* <p className="pt-4">Categories</p> */}
              <Example />
              <p className="pt-4">Create Jokes</p>
              <p className="pt-4">
                {/* <label htmlFor="theme">Dark</label>
                <input type="radio" id="theme" /> */}
                <label className={styles.toggleDarkBtn}>
                  <input type="checkbox" />
                  <span
                    className={`${styles.slideBtnTg} ${styles.round}`}
                  >Theme</span>
                </label>
              </p>
            </div>
            <p className="mt-[20rem]">Settings</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
