import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="sm:hidden md:w-full h-[7rem] bg-[#6200EE] flex justify-between items-center px-4 lg:hidden">
      <div className="font-bold text-white">
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
      <div className="w-16 h-16 rounded-full bg-[#000] text-white flex justify-center items-center text-4xl">
        <FontAwesomeIcon icon={faQuestion} />
      </div>
    </footer>
  );
};

export default Footer;
