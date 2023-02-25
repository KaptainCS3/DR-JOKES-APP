import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "../styles/container.module.css";
import JokeContainer from "./JokeContainer";
import Modal from "./Modal";
const JokeSlider = (props) => {
  const toggle = () => {
    props.setShowModal(true);
  };
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const object = props.fetchData.map((el) => {
    return (
      <JokeContainer punchline={el.punchline} setup={el.setup} toggle={toggle} />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 3000);
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
            {object}
            <Modal
              showModal={props.showModal}
              setShowModal={props.setShowModal}
              object={object}
              catIndex={props.catIndex}
              setCatIndex={props.setCatIndex}
            />
            {/* flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4 */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JokeSlider;
