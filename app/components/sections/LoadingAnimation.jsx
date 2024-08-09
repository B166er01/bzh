"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LoadingAnimation = () => {
  const starPathRef = useRef(null);
  const svgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const myRef = useRef(null);

  useGSAP(() => {
    const path = starPathRef.current;

    gsap
      .timeline({})
      .to(path, { display: "inline" })
      .to(path, { strokeDashoffset: 0, duration: 1, ease: "power1.inOut" })
      .to(
        path,
        { fill: "#450a0a", duration: 0.8, ease: "power1.inOut", delay: 0.4 },
        "one"
      )
      .to(
        svgRef.current,
        {
          rotate: "-288deg",
          scale: 0.15,
          duration: 0.8,
          y: "-10vh",
          delay: 0.2,
          ease: "power1.in",
        },
        "one"
      )
      .to(titleRef.current, { display: "flex" })
      .to(titleRef.current, { opacity: 1, duration: 0.5 })
      .to(
        containerRef.current,
        {
          translateY: "-70vh",
          rotation: "-70deg",
          duration: 0.6,
          delay: 0.6,
        },
        "two"
      )
      .to(
        leftRef.current,
        {
          translateY: "-100%",
          duration: 0.6,
          ease: "power1.in",
          delay: 0.7,
        },
        "two"
      )
      .to(
        rightRef.current,
        {
          translateY: "-100%",
          duration: 0.6,
          delay: 0.8,
        },
        "two"
      )
      .to(myRef.current, { display: "none" });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-40 flex items-center justify-center w-full"
      id="pp"
      ref={myRef}
    >
      {/* Intro */}
      <div className="flex-1 h-screen bg-red-50" ref={leftRef}></div>
      <div className="flex-1 h-screen bg-red-50" ref={rightRef}></div>

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        ref={containerRef}
      >
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <svg
            viewBox="0 0 100 100"
            className="star"
            width="300"
            height="300"
            ref={svgRef}
          >
            <path
              ref={starPathRef}
              d="M50 10 L61.8 35.4 L89.5 39.1 L68 60.4 L71.6 87.5 L50 72.6 L28.4 87.5 L32 60.4 L10.5 39.1 L38.2 35.4 Z"
              fill="none"
              stroke="#450a0a"
              strokeWidth="2"
              id="star-path"
            />
          </svg>
        </div>

        <div
          className="absolute flex-col items-center justify-center hidden -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 text-7xl font-creamCake"
          ref={titleRef}
        >
          <div>Breizh</div>
          <div>Cola</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
