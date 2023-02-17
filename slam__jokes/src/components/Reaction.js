import React, { useState } from "react";

const Reaction = () => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const thumbsUp = () => {
    return setLike(!like);
  };
  console.log(`like value is ${like}`);
  const thumbsDown = () => {
    return setDisLike(!disLike);
  };
  console.log(`dislike value is ${disLike}`);
  return (
    <div className="flex justify-between w-full my-4 mx-auto">
      <div className="arrow__indicator left text-[#6200EE] font-bold text-2xl">
        <span>{like && !disLike ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={thumbsUp}>
          👍
        </span>
      </div>
      <div className="arrow__indicator right text-[#6200EE] font-bold text-2xl">
        <span>{disLike && !like ? "1" : ""}</span>
        <span className="cursor-pointer" onClick={thumbsDown}>
          👎{" "}
        </span>
      </div>
    </div>
  );
};

export default Reaction;
