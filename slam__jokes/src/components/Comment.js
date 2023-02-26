import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Comment = (props) => {
  console.log(props);
  return (
    // <div>
    <section className="mt-4 mb-12 mr-2">
      <div className="flex rounded-[.75em] bg-[#fff] h-[auto] min-h-[2.8em] shadow-none">
        <div className="flex flex-row justify-between w-full items-center px-8">
          {/* //! ternary operator condition check */}
          <div
            style={{
              textDecoration: mark ? "line-through" : "",
              color: mark ? "gray" : "",
            }}
          >
            {/* {props.task} */}
          </div>
          {/* <section className="flex w-[15%] justify-between">
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-green-600"
                  onClick={handleMark}
                />
              </div>
              <div>
                <FontAwesomeIcon
                //   icon={faXmark}
                  className="cursor-pointer text-red-600"
                //   onClick={handleRemove}
                />
              </div>
            </section> */}
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Comment;
