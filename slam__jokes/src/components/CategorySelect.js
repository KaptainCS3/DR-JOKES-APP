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
        <option className="text-[#000]" value="African Jokes" selected>
          African Jokes
        </option>
        <option className="text-[#000]" value="Western World Jokes">
          Western World Jokes
        </option>
        <option className="text-[#000]" value="Family Jokes">
          Family Jokes
        </option>
        <option className="text-[#000]" value="Relationship Jokes">
          Relationship Jokes
        </option>
        <option className="text-[#000]" value="Education Jokes">
          Education Jokes
        </option>
        <option className="text-[#000]" value="Tech Jokes">
          Tech Jokes
        </option>
      </select>
    </div>
  );
};

export default CategorySelect;
