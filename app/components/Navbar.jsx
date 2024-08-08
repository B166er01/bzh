"use client";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";

const Navbar = ({ setMenuOpen }) => {
  const navRef = useRef(null);
  const lastScrollTop = useRef(0);

  // Initial animation useEffect
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { translateY: "-100%" },
      {
        translateY: "0%",
        duration: 0.3,
        delay: 6.8,
      }
    );
  }, []);

  // Scroll animation useEffect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 200) {
        // Scrolling down and passed 200px
        gsap.to(navRef.current, { translateY: "-100%", duration: 0.3 });
      } else if (currentScrollTop < lastScrollTop.current) {
        // Scrolling up
        gsap.to(navRef.current, { translateY: "0%", duration: 0.3 });
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-30 flex items-center justify-between w-full h-20 px-6 bg-myRed text-myWhite"
    >
      <a
        href="#"
        className="flex items-center text-5xl cursor-pointer font-creamCake"
      >
        <svg viewBox="0 0 100 100" className="star" width="40" height="40">
          <path
            d="M50 10 L61.8 35.4 L89.5 39.1 L68 60.4 L71.6 87.5 L50 72.6 L28.4 87.5 L32 60.4 L10.5 39.1 L38.2 35.4 Z"
            fill="#fef2f2"
          />
        </svg>
        <div className="ml-3">Breizh Cola</div>
      </a>

      <div onClick={() => setMenuOpen(true)} className="cursor-pointer">
        <Menu className="w-10 h-10 " />
      </div>
    </nav>
  );
};

export default Navbar;
