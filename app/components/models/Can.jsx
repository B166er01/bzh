"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function Can(props) {
  const canRef = useRef(null);
  const { nodes, materials } = useGLTF("/model/untitled.glb");

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#blue",
        start: "top top",
        end: "bottom top",
        // scrub: 0.9,
        pin: true,
        markers: true,
      },
    });

    // Animate the position of the can
    tl.to(canRef.current.position, {
      x: -150,
      ease: "power4.out",
      onUpdate: () => {
        // Manually trigger a render after each update
        canRef.current.updateMatrix();
      },
    });
  }, []);

  // Use the render loop to update the scene

  return (
    <group ref={canRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5} position={[170, -33, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.blinn2SG}
          position={[0.034, -0.696, 10.77]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.blinn1SG}
          position={[-0.007, 0.081, 6.578]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/untitled.glb");
