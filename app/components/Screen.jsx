"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BreizhThe from "./BreizhThe";
import MagneticButtons from "./MagneticButtons";

gsap.registerPlugin(ScrollTrigger);

const Screen = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null); // Add this ref
  const screenRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: screenRef.current,
          start: "top 40%", // Trigger animation when top of the section hits 60% of viewport height
        },
      })
      .to(
        [
          ref1.current,
          ref2.current,
          ref3.current,
          ref4.current,
          ref5.current,
          ref6.current,
          ref7.current,
        ],
        {
          y: 0, // Move elements into view
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.1, // Stagger animation by 0.1 seconds
        }
      );
  }, []);

  return (
    <div
      id="blue"
      className="relative w-full h-screen bg-myWhite"
      ref={screenRef}
    >
      <BreizhThe />

      <MagneticButtons>
        <button className="relative duration-300 -rotate-6 border-myRed h-[220px] text-6xl uppercase rounded-[50%] cursor-pointer w-[440px] bg-myWhite border transition-colors font-bold text-myRed hover:text-myWhite hover:bg-myRed top-[50%] left-1/2 ">
          découvrez le
        </button>
      </MagneticButtons>

      <div className="flex flex-col gap-6 ml-20 uppercase font-poppins text-8xl text-myRed">
        <p className="flex gap-8 overflow-hidden">
          <span ref={ref1} className="translate-y-full">
            la recette
          </span>
          <span
            ref={ref2}
            className="overflow-hidden translate-y-full text-myWhite text-stroke text-stroke-myRed"
          >
            originale
          </span>
        </p>
        <p className="flex gap-8 overflow-hidden">
          <span
            ref={ref3}
            className="translate-y-full text-myWhite text-stroke text-stroke-myRed"
          >
            Son
          </span>
          <span ref={ref4} className="overflow-hidden translate-y-full">
            secret ?
          </span>
        </p>
        <p className="flex gap-8 mt-12 overflow-hidden text-7xl">
          <span ref={ref5} className="translate-y-full">
            le dosage
          </span>
          <span
            ref={ref6}
            className="translate-y-full text-myWhite text-stroke text-stroke-myRed"
          >
            parfait
          </span>
        </p>

        <p className="flex gap-8 mt-12 overflow-hidden text-7xl">
          <span ref={ref7} className="translate-y-full">
            des ingredients
          </span>
        </p>
        {/* <p className="overflow-hidden">
          <div ref={ref7} className="translate-y-full">
            efzijfez
          </div>
        </p> */}
      </div>
    </div>
  );
};

export default Screen;
