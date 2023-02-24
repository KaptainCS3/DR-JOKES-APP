import React from "react";

const Welcome = (props) => {
  return <div className="text-2xl dark:text-white">Enjoy and discover {props.selectCategory}</div>;
};

export default Welcome;
