import React from "react";

const Transition = () => {
  return (
    <div>
      <div
        id="transition"
        className="fixed left-0 transition top-[-100%]  z-30 w-1/4 h-screen bg-[#5f0909]"
      ></div>
      <div
        id="transition2"
        className="fixed left-1/4 transition top-[-100%]  z-30 w-1/4 h-screen bg-[#6a0909]"
      ></div>{" "}
      <div
        id="transition3"
        className="fixed left-2/4 transition top-[-100%]  z-30 w-1/4 h-screen bg-[#5f0909]"
      ></div>{" "}
      <div
        id="transition4"
        className="fixed left-3/4 transition top-[-100%]  z-30 w-1/4 h-screen bg-[#6a0909]"
      ></div>
    </div>
  );
};

export default Transition;
