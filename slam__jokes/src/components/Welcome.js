import React from "react";
import Zoom from "react-reveal/Zoom";
const Welcome = (props) => {
  return (
    <Zoom right cascade>
      <div className="text-2xl sm:text-center pt-8 dark:text-white">
        Enjoy and discover
      </div>
    </Zoom>
  );
};

export default Welcome;
