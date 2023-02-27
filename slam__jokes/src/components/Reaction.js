import React from "react";

const Reaction = (props) => {
  console.log(props.numComments);
  const show = () => {
    props.showCommentList();
  };
  return (
    <div className="flex justify-between w-full my-8 mx-auto">
      <div className="arrow__indicator left text-[#6200EE] font-bold text-3xl dark:text-white">
        <span>{props.like && !props.disLike ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={props.thumbsUp}>
          👍
        </span>
      </div>
      <div className="arrow__indicator right text-[#6200EE] font-bold text-3xl dark:text-white">
        <span></span>
        <button
          type="button"
          className="relative inline-flex items-center font-medium text-center text-white  bg-[#6200EE] rounded-lg hover:bg-[#6200EE] focus:ring-2 focus:outline-none focus:ring-[#6200EE]-300 dark:bg-[#6200EE]-600 dark:hover:bg-[#6200EE]-700 dark:focus:ring-[#6200EE]-800"
        >
          <span className="cursor-pointer" onClick={show}>
            💬
          </span>
          <div className="absolute inline-flex items-center justify-center w-7 h-7 p-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-3 dark:border-gray-900">
            {props.numComments.length === 0 ? 0 : props.numComments}
          </div>
        </button>
      </div>
      <button className="arrow__indicator right text-[#6200EE] font-bold text-3xl dark:text-white">
        <span>{props.disLike && !props.like ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={props.thumbsDown}>
          👎{" "}
        </span>
      </button>
    </div>
  );
};

export default Reaction;
