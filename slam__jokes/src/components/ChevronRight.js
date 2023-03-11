import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ChevronRight = (props) => {
  return (
    <>
      {/* chevron right // next joke Indicator */}
      <div
        className={`dark:text-slate-400 arrow__indicator right mt-2`}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`cursor-pointer text-3xl`}
          onClick={props.nextJoke}
        />
      </div>
    </>
  );
};

export default ChevronRight;
