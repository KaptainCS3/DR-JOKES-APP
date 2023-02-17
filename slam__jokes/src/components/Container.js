import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "../styles/container.module.css";
const Container = (props) => {
  console.log(props);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="sm:hidden lg:hidden">
      <h1>A Categories</h1>
      <motion.div
        className="flex w-full cursor-grab min-h[500px]"
        ref={carousel}
      >
        <motion.div
          className={style.inner__carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div
            className="flex flex-row justify-between"
            style={{ paddingLeft: "2%" }}
          >
            {/* flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4 */}
            <div
              className="
            flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4
            "
            >
              <p>Punchline</p>
              <p>lorem ipsum </p>
            </div>
            <div className="flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4">
              <p>Punchline</p>
              <p>lorem ipsum </p>
            </div>
            <div className="flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4">
              <p>Punchline</p>
              <p>lorem ipsum </p>
            </div>
            <div className="flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4">
              <p>Punchline</p>
              <p>lorem ipsum </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Container;
