import { useState } from "react";
import Image from "next/image";

const FlagDropdown = ({ defaultSelected, modifier, flagsSrc }) => {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <>
      <div className="dropdown py-5 group cursor-pointer relative">
        <div className="dropdownHeading flex items-center">
          {/* {`${modifier ? modifier : ""} `} */}
          <Image src={selected.src} width="50px" height="25px" alt="" />
          <span>
            <i className="pl-5 fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="group-hover:block hidden absolute top-[100%] left-0 md:right-[50%] bg-white text-black text-12 min-w-[150px] shadow-2xl border border-gray z-[2]">
          <div className="">
            {flagsSrc.map((flag) => (
              <div
                key={flag.src}
                onClick={() => setSelected(flag)}
                className={`relative p-10 border-b-gray after:h-1 after:w-[90%] after:absolute after:top-[100%] after:bg-gray after:left-[50%] after:transform after:translate-x-[-50%] after:last:hidden hover:bg-gray transition-all duration-400 ${
                  flag === selected ? "font-bold dropdownTick" : "font-medium"
                } flex gap-10`}
              >
                <Image width="50px" height="25px" src={flag.src} alt="Flag" />
                <p>{flag.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FlagDropdown;
