import React from "react";
import Comment from "./Comment";
import Reaction from "./Reaction";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

const Modal = (props) => {
  return (
    <>
      {props.showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center p-8">
            <div className="relative w-1/1 my-6 mx-auto max-w-3/4 lg:p-32 md:p-12">
              <button
                className="mb-8 text-black text-3xl leading-none font-bold outline-none focus:outline-none flex justify-center items-center w-full"
                onClick={() => props.setShowModal(false)}
              >
                <span className="dark:text-white bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              {/*content*/}
              <div className="dark:text-slate-400 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
              </div>
              <div className="flex items-center justify-end flex-col rounded-b">
                <ChevronLeft />
                <ChevronRight />
                <Reaction />
                <Comment />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

{
  /* <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => props.setShowModal(false)}
                    >
                      Close
                    </button> */
}
{
  /* <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => props.setShowModal(false)}
                    >
                      Save Changes
                    </button> */
}
