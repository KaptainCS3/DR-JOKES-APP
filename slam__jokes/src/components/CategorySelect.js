import React from "react";
const CategorySelect = (props) => {
  return (
    <div className="w-1/ -ml-3 pr-4">
      <select
        className="w-full p-2 bg-transparent cursor-pointer rounded outline-none"
        name="jokeCategory"
        onChange={props.handleChange}
        value={props.selectCategory}
      >
        <option className="text-[#000]">Select Category.......</option>
        <option className="text-[#000]" value={1} selected>
          African Jokes
        </option>
        <option className="text-[#000]" value={2}>
          Western World Jokes
        </option>
        <option className="text-[#000]" value={3}>
          Family Jokes
        </option>
        <option className="text-[#000]" value={4}>
          Relationship Jokes
        </option>
        <option className="text-[#000]" value={5}>
          Education Jokes
        </option>
        <option className="text-[#000]" value={6}>
          Tech Jokes
        </option>
      </select>
    </div>
  );
};

export default CategorySelect;
