import React from "react";
import Fade from "react-reveal/Fade";
const CategorySelect = (props) => {
  //!track selected category value change
  const handleChange = (e) => {
    props.setSelectCategory(parseInt(e.target.value));
  };
  return (
    <Fade left>
      <div className="w-1/ -ml-3 pr-4">
        <select
          className="w-full p-2 bg-transparent cursor-pointer rounded outline-none"
          name="jokeCategory"
          onChange={handleChange}
          value={props.selectCategory}
        >
          <option className="text-[#000]" value={null}>
            Select Category.......
          </option>
          <option className="text-[#000]" value={1} selected>
            👨‍👨‍👧‍👧 Family Jokes
          </option>
          <option className="text-[#000]" value={2}>
            {" "}
            🧑🏼 Political Jokes
          </option>
          <option className="text-[#000]" value={3}>
            🕍 Religions Jokes
          </option>
          <option className="text-[#000]" value={4}>
            🏫 Education Jokes
          </option>
          <option className="text-[#000]" value={5}>
            ❤ Emotional Jokes
          </option>
          {/* <option className="text-[#000]" value={6}>
          Tech Jokes
        </option> */}
        </select>
      </div>
    </Fade>
  );
};

export default CategorySelect;
