import React from "react";

const Comment = () => {
  const focus = {
    outline: "none",
  };
  return (
    <form className="w-full h-[3rem] flex justify-between items-center px-2 rounded shadow bg-white">
      <div className="py-[2.5rem w-[80%]">
        <input
          type="text"
          placeholder="Leave a comment...."
          className="py-[.7rem] w-full"
          style={focus}
        />
      </div>
      <div>
        <button className="text-[#6200EE] font-bold w-[20%]">Post</button>
      </div>
    </form>
  );
};

export default Comment;
