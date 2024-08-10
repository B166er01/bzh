"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BreizhHome from "../experience/view/BreizhHome";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const title4Ref = useRef(null);
  const title5Ref = useRef(null);
  const title6Ref = useRef(null);
  const title7Ref = useRef(null);

  const landingRef = useRef(null);
  const b1Ref = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        onComplete: () => {
          document.body.style.overflowY = "auto";
        },
      })

      .to(
        [
          titleRef.current,
          title2Ref.current,
          title3Ref.current,
          title4Ref.current,
          title5Ref.current,
          title6Ref.current,
          title7Ref.current,
        ],
        {
          y: 0,
          duration: 0.4,
          ease: "power4.out",
          stagger: 0.1,
          delay: 5.6,
        }
      );
  }, []);

  return (
    <div
      ref={landingRef}
      id="landing"
      className="relative flex flex-col justify-center w-full h-screen overflow-hidden font-bold uppercase font-poppins bg-myRed text-myWhite"
    >
      <BreizhHome b1ref={b1Ref} />
      <div className="flex overflow-hidden pl-28">
        <div
          ref={titleRef}
          className="inline translate-y-full text-[150px] pr-20"
        >
          breizh
        </div>
        <div ref={title2Ref} className="flex translate-y-full text-[150px]">
          cola
        </div>
      </div>
      <div className="flex ml-10 overflow-hidden">
        <div
          ref={title3Ref}
          className="flex items-center mr-10 translate-y-full text-7xl -rotate-12"
        >
          le
        </div>
        <div ref={title4Ref} className="inline translate-y-full text-[150px]">
          cola
        </div>
        <div
          ref={title5Ref}
          className="flex items-center pl-10 translate-y-full text-7xl -rotate-12"
        >
          du
        </div>
      </div>
      <div className="flex ml-20 overflow-hidden">
        <div
          ref={title6Ref}
          className="inline translate-y-full text-[150px] pr-20"
        >
          phare
        </div>
        <div ref={title7Ref} className="inline translate-y-full text-[150px]">
          ouest
        </div>
      </div>
    </div>
  );
};

export default Landing;
