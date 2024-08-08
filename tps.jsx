import React from "react";
import BreizhZero from "./BreizhZero";
const Screen = () => {
  return (
    <div id="blue" className="relative w-full h-screen p-12 bg-myWhite">
      <ul className="flex gap-5">
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            matieres grasses
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>{" "}
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>{" "}
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>{" "}
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>{" "}
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>{" "}
        <li className="relative w-32 h-48 rounded-md bg-myRed ">
          <p className="flex items-center justify-center w-full text-2xl capitalize h-1/2 text-myWhite">
            energie
          </p>
          <div className="absolute flex justify-center pt-6 text-xl origin-center rounded-full left-2 -bottom-14 bg-myWhite w-28 h-28">
            123 kcal
          </div>
        </li>
      </ul>

      {/* <h3 className="capitalize text-myRed">valeurs nutritionnelles</h3>
        <ul className="flex gap-3">
          <li className="relative bg-myRed">
            <p className="text-myWhite">energie</p>
          </li>
        </ul> */}
      <BreizhZero />
    </div>
  );
};

export default Screen;
