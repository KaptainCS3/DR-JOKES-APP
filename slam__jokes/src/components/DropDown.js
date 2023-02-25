import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import jokes from "../jokes";
const DropDown = (props) => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const styles = {
    width: props.width,
  };
  // const category = jokes.map(el=>{

  // })
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">{props.text}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={styles}
          className="absolute z-10 mt-3 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <h3 className="text-xl text-[#6200EE] p-4">{props.header}</h3>
          <div className="py-8 flex flex-wrap justify-center items-center h-full">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  African
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  Western World
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  Family
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  Relationship
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  Education
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-sm w-1/2"
                  )}
                >
                  Tech Jokes
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DropDown;


// <Menu.Items
//   style={styles}
//   className="absolute z-10 mt-3 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
// >
//   <h3 className="text-xl text-[#6200EE] p-4">{props.header}</h3>
//   <div className="py-8 flex flex-wrap justify-center items-center h-full">
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           African
//         </a>
//       )}
//     </Menu.Item>
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           Western World
//         </a>
//       )}
//     </Menu.Item>
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           Family
//         </a>
//       )}
//     </Menu.Item>
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           Relationship
//         </a>
//       )}
//     </Menu.Item>
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           Education
//         </a>
//       )}
//     </Menu.Item>
//     <Menu.Item>
//       {({ active }) => (
//         <a
//           href="#"
//           className={classNames(
//             active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//             "block px-4 py-4 text-sm w-1/2"
//           )}
//         >
//           Tech Jokes
//         </a>
//       )}
//     </Menu.Item>
//   </div>
// </Menu.Items>;
