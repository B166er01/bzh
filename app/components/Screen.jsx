"use client";
import React from "react";
import BreizhThe from "./BreizhThe";
import MagneticButtons from "./MagneticButtons";

const Screen = () => {
  return (
    <div id="blue" className="relative w-full h-screen bg-myWhite">
      <BreizhThe />
      {/* <MagneticButtons>
        <button className="relative  border-myRed h-[150px] text-3xl uppercase rounded-[50%] cursor-pointer w-[300px] bg-myWhite border-4 transition-colors font-bold text-myRed hover:text-myWhite hover:bg-myRed top-1/2 left-1/2 ">
          découvrez le
        </button>
      </MagneticButtons>
      <button className="relative">gy y uygyyu uy </button> */}

      <MagneticButtons>
        <button className="relative duration-300 -rotate-6 border-myRed h-[220px] text-6xl uppercase rounded-[50%] cursor-pointer w-[440px] bg-myWhite border transition-colors font-bold text-myRed hover:text-myWhite hover:bg-myRed top-[50%] left-1/2 ">
          découvrez le
        </button>
      </MagneticButtons>

      <div className="flex flex-col gap-6 ml-20 uppercase font-poppins text-8xl text-myRed">
        <p>
          la recette{" "}
          <span className="text-myWhite text-stroke text-stroke-myRed">
            originale
          </span>
        </p>
        <p>
          <span className="text-myWhite text-stroke text-stroke-myRed">
            Son
          </span>{" "}
          Secret ?
        </p>
        <p className="text-7xl">
          le dosage{" "}
          <span className="text-myWhite text-stroke text-stroke-myRed">
            parfait
          </span>
        </p>
        <p className="text-7xl">des ingredients !</p>
      </div>
    </div>
  );
};

export default Screen;
