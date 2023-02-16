import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  const showNav = () => {
    setIsNavBar(true);
    const style = {
      display: "block",
    };
  };
  const hideNav = () => {
    setIsNavBar(false);
    const style = {
      display: "none",
    };
  };
  console.log(isNavBar);
  return (
    <nav className="bg-[#f00] nav sm:bg-[#6200EE] flex justify-between items-center h-12 w-full px-4 md:w-full flex lg:w-48">
      <div className="hamburger__menu">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white cursor-pointer"
          onClick={showNav}
        />
      </div>
      <h1>
        <span className="text-xl text-white">Slam</span>{" "}
        <span className="text-xl text-white">Jokes</span>
        <sup className="text-xl text-white">++</sup>
      </h1>
      {/* "sm:absolute top-0 left-0 w-[70%] h-full bg-[#6200EE] text-white" */}
      <div
        className={
          isNavBar
            ? "sm:absolute top-0 left-0 w-[70%] h-full bg-[#6200EE] text-white"
            : "hidden"
        }
      >
        <div className="hamburger__menu pt-2 pl-4">
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl cursor-pointer"
            onClick={hideNav}
          />
          <div className="">
            <p>Categories</p>
            <p>Create Jokes</p>
            <p>Theme</p>
          </div>
          <p>Settings</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
