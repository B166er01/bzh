"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Marquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  let direction = -1;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        pinSpacer: false,
        onUpdate: (e) => (direction = e.direction * 1),
      },
    });

    requestAnimationFrame(animate);

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent -= 0.04 * direction;
  };

  return (
    <div className="relative flex h-[33vh] w-full overflow-hidden bg-myWhite ">
      <div className="absolute z-0 -translate-x-3 top-2/4 border-y-2 border-myRed rotate-3 border-skin-border bg-myWhite">
        <div
          ref={slider}
          className="relative capitalize whitespace-nowrap font-creamCake text-8xl text-myRed"
        >
          <p className="relative pr-5 m-0 " ref={firstText}>
            {" "}
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola
            -
          </p>
          <p className="absolute top-0 left-[100%] m-0 pr-5 " ref={secondText}>
            {" "}
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola
            -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
