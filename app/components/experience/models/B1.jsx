"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 b1.glb 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function B1(props) {
  const { nodes, materials } = useGLTF("/model/b1.glb");

  const b1Ref = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#landing",
        pin: true,
        start: "top top",
        end: "bottom top",
        pinSpacer: true,
        scrub: true,
      },
    });
    tl.to(b1Ref.current.position, {
      x: 0,
    });
  });

  return (
    <group
      ref={b1Ref}
      {...props}
      dispose={null}
      scale={83}
      position={[50, -37, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.161}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface5SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.aiStandardSurface2SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.aiStandardSurface3SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/b1.glb");
