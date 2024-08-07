"use client";
import gsap from "gsap";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Menu = ({ menuOpen, setMenuOpen }) => {
  const leftPartRef = useRef(null);
  const rightPartRef = useRef(null);
  const menuRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);

  const socialRef = useRef(null);
  const social2Ref = useRef(null);
  const social3Ref = useRef(null);
  const social4Ref = useRef(null);

  const logoRef = useRef(null);
  const crossRef = useRef(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const tlOpen = gsap
      .timeline({
        paused: true,
        onStart: () => {
          document.body.style.overflow = "hidden";
        },
      })

      .to(menuRef.current, { top: "0%", duration: 0 })
      .to([leftPartRef.current, rightPartRef.current], {
        translateY: 0,
        duration: 0.3,
        stagger: 0.1,
      })
      .to([logoRef.current, crossRef.current], {
        opacity: 1,
        duration: 0.15,
      })
      .to(
        [
          link1Ref.current,
          link2Ref.current,
          link3Ref.current,
          link4Ref.current,
          link5Ref.current,
        ],
        { translateY: 0, duration: 0.2, stagger: 0.2 }
      )
      .to(
        [
          socialRef.current,
          social2Ref.current,
          social3Ref.current,
          social4Ref.current,
        ],
        {
          opacity: 1,
          translateY: 0,
          duration: 0.15,
          stagger: 0.1,
        }
      );

    const tlClose = gsap
      .timeline({
        paused: true,
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      })

      .to(
        [
          socialRef.current,
          social2Ref.current,
          social3Ref.current,
          social4Ref.current,
        ],
        {
          opacity: 0,
          translateY: "100%",
          duration: 0.1,
          stagger: 0.07,
        }
      )
      .to(
        [
          link5Ref.current,
          link4Ref.current,
          link3Ref.current,
          link2Ref.current,
          link1Ref.current,
        ],
        { translateY: "100%", duration: 0.12, stagger: 0.15 }
      )
      .to([logoRef.current, crossRef.current], { opacity: 0, duration: 0.15 })
      .to([leftPartRef.current, rightPartRef.current], {
        translateY: "100%",
        duration: 0.3,
        stagger: 0.1,
      })
      .to(menuRef.current, { top: "100vh", duration: 0 });

    if (flag) {
      if (menuOpen) {
        tlOpen.play();
      } else {
        tlClose.play();
      }
    } else setFlag(true);

    return () => {
      tlOpen.kill();
      tlClose.kill();
    };
  }, [menuOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed z-50 -top-[100vh] left-0  w-full h-screen  text-myRed overflow-hidden"
    >
      <div
        ref={leftPartRef}
        className="fixed top-0 left-0 w-1/2 h-screen translate-y-full bg-myWhite"
      ></div>
      <div
        ref={rightPartRef}
        className="fixed top-0 w-1/2 h-screen translate-y-full bg-myWhite left-1/2"
      ></div>
      <div>
        <div className="flex items-center justify-between h-20 px-6">
          <div
            ref={logoRef}
            id="logo"
            className="relative text-5xl opacity-0 font-creamCake"
            onClick={() => setMenuOpen(false)}
          >
            <a href="#blue">Breizh Cola</a>
          </div>
          <div
            ref={crossRef}
            className="opacity-0 cursor-pointer "
            onClick={() => setMenuOpen(false)}
          >
            <X className="relative w-10 h-10" />
          </div>
        </div>

        <ul className="flex font-poppins flex-col justify-center items-center text-6xl uppercase mt-[18vh] gap-4">
          <li className="overflow-hidden ">
            <div
              onClick={() => setMenuOpen(false)}
              ref={link1Ref}
              className="block transition translate-y-full cursor-pointer hover:text-red-900"
            >
              <a href="#landing">accueil</a>
            </div>
          </li>
          <li className="overflow-hidden ">
            <div
              onClick={() => setMenuOpen(false)}
              ref={link2Ref}
              className="block transition translate-y-full cursor-pointer hover:text-red-900"
            >
              <a href="#blue">about</a>
            </div>
          </li>{" "}
          <li className="overflow-hidden ">
            <div
              onClick={() => setMenuOpen(false)}
              ref={link3Ref}
              className="block transition translate-y-full cursor-pointer hover:text-red-900"
            >
              <a href="#blue">produits</a>
            </div>
          </li>{" "}
          <li className="overflow-hidden ">
            <div
              onClick={() => setMenuOpen(false)}
              ref={link4Ref}
              className="block transition translate-y-full cursor-pointer hover:text-red-900"
            >
              <a href="#sponsorts">sponsorts</a>
            </div>
          </li>{" "}
          <li className="overflow-hidden ">
            <div
              onClick={() => setMenuOpen(false)}
              ref={link5Ref}
              className="block transition translate-y-full cursor-pointer hover:text-red-900"
            >
              <a href="#blue">contact</a>
            </div>
          </li>
        </ul>
      </div>

      <ul className="flex justify-center gap-6 mt-[10vh]">
        <li ref={socialRef} className="relative translate-y-full opacity-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            className="transition cursor-pointer hover:scale-110"
          >
            <path
              fill="#450a0a "
              d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"
            ></path>
          </svg>
        </li>
        <li ref={social2Ref} className="translate-y-full opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            className="transition cursor-pointer hover:scale-110"
          >
            <path
              fill="#450a0a "
              d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
            ></path>
          </svg>
        </li>
        <li ref={social3Ref} className="translate-y-full opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            className="transition cursor-pointer hover:scale-110"
          >
            <path
              fill="#450a0a "
              d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
            ></path>
          </svg>
        </li>
        <li ref={social4Ref} className="translate-y-full opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 32 32"
            className="transition cursor-pointer hover:scale-110"
          >
            <path
              d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z"
              fill="#450a0a "
            ></path>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
