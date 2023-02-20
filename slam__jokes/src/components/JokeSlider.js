import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "../styles/container.module.css";
import JokeContainer from "./JokeContainer";
import jokes from "../jokes";
import Jokes from "./Jokes";
import Modal from "./Modal";
const JokeSlider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(true);
  };
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const jokesData = jokes.map((el) => {
    return <JokeContainer key={el.id} {...el} toggle={toggle} />;
  });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="sm:hidden">
      <motion.div
        className="flex w-full cursor-grab min-h[500px] overflow-hidden"
        ref={carousel}
      >
        <motion.div
          className={style.inner__carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div
            className={`flex flex-row justify-between w-full`}
            style={{ paddingLeft: "1%" }}
          >
            {jokesData}
            <Modal showModal={showModal} setShowModal={setShowModal} />
            {/* flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4 */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JokeSlider;
