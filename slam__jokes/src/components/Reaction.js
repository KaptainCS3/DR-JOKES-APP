import React from "react";

const Reaction = (props) => {
  return (
    <div className="flex justify-between w-full my-4 mx-auto">
      <div className="arrow__indicator left text-[#6200EE] font-bold text-3xl dark:text-white">
        <span>{props.like && !props.disLike ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={props.thumbsUp}>
          👍
        </span>
      </div>
      <div className="arrow__indicator right text-[#6200EE] font-bold text-3xl dark:text-white">
        <span></span>
        <span className="cursor-pointer">💬</span>
      </div>
      <div className="arrow__indicator right text-[#6200EE] font-bold text-3xl dark:text-white">
        <span>{props.disLike && !props.like ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={props.thumbsDown}>
          👎{" "}
        </span>
      </div>
    </div>
  );
};

export default Reaction;
