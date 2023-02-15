import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [width, setWidth] = useState(0);
  const navBar = useRef();
  const toggle = () => {};
  return (
    <nav
      onClick={toggle}
      ref={navBar}
      className="nav sm:flex justify-between items-center h-10 w-full px-4 border md:w-3/4 border lg:w-48 border"
    >
      <div className="hamburger__menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <p>Logo {width}</p>
    </nav>
  );
};

export default Nav;
