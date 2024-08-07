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
      className="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-20 px-6 bg-myRed text-myWhite"
    >
      <div className="text-5xl font-creamCake">Breizh Cola</div>
      <div onClick={() => setMenuOpen(true)} className="cursor-pointer">
        <Menu className="w-10 h-10 " />
      </div>
    </nav>
  );
};

export default Navbar;
