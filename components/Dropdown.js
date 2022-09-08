import { useState } from "react";

const Dropdown = ({ options, defaultSelected, modifier }) => {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <>
      <div className="dropdown py-5 group cursor-pointer relative">
        <div className="dropdownHeading">
          {`${modifier ? modifier : ""} ${selected}`}
          <span>
            <i className="pl-5 fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="group-hover:block hidden absolute top-[100%] left-0 md:right-[50%] bg-white text-black text-12 min-w-[150px] shadow-2xl border border-gray z-[2]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => setSelected(option)}
              className={`relative p-10 border-b-gray after:h-1 after:w-[90%] after:absolute after:top-[100%] after:bg-gray after:left-[50%] after:transform after:translate-x-[-50%] after:last:hidden ${
                option === selected ? "font-bold dropdownTick" : "font-medium"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Dropdown;
