import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const ChevronLeft = (props) => {
  return (
    <>
      {/* chevron left // prev joke Indicator */}
      <div
        className={`dark:text-slate-400 arrow__indicator left mt-2 md:absolute -left-[1%] top-[50%] lg:absolute left-[5%] top-[45%]`}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`cursor-pointer text-2xl`}
          onClick={props.prevJoke}
        />
      </div>
    </>
  );
};

export default ChevronLeft;
