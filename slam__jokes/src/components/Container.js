import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import style from "../styles/container.module.css";
import JokeContainer from "./JokeContainer";
import jokes from "../jokes";
import Jokes from "./Jokes";
const Container = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(true);
  };
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const jokesData = jokes.map((el) => {
    return <JokeContainer key={el.id} {...el} toggle={toggle}/>;
  });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="sm:hidden lg:hidden">
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
            {showModal ? (
              // <Jokes />
              <>
                <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center p-8">
                  <div className="relative w-96 my-6 mx-auto max-w-5/6">
                    <button
                      className="mb-8 text-black text-3xl leading-none font-bold outline-none focus:outline-none flex justify-center items-center w-full"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I always felt like I could do anything. That’s the
                          main thing people are controlled by! Thoughts- their
                          perception of themselves! They're slowed down by their
                          perception of themselves.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {/* flex justify-center items-center w-64 h-64 my-16 rounded-xl shadow-2xl flex-col mr-4 */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Container;
