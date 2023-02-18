import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateJoke = () => {
  return (
    <div className="sm:flex justify-end pr-8 my-4 cursor-pointer md:hidden lg:hidden">
      <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full bg-[#03DAC6] font-bold shadow">
        <FontAwesomeIcon icon={faPlus} className="text-xl" />
      </div>
      
    </div>
  );
};

export default CreateJoke;
