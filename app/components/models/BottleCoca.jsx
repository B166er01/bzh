"use client";
import React, { useRef, useEffect, memo } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BottleCoca(props) {
  const bottleRef = useRef();
  const { nodes, materials } = useGLTF("/model/bottleCoca.glb");

  useEffect(() => {
    // Setup ScrollTrigger
    ScrollTrigger.create({
      trigger: "#blue",
      start: "center 70%", // Start the animation when the center of the container is in the center of the viewport
      end: "center 70%",
      markers: true,
      onEnter: () => animateBottle(true),
      onLeaveBack: () => animateBottle(false),
    });

    const animateBottle = (entering) => {
      gsap
        .timeline()
        .to(
          bottleRef.current.position,
          {
            x: entering ? 50 : 120,
            duration: 1,
            ease: "power4.out",
          },
          "one"
        )
        .to(
          bottleRef.current.rotation,
          {
            y: entering ? Math.PI * 2 : 0,
            duration: 1,
            ease: "power4.out",
          },
          "one"
        );
    };
  }, []);

  return (
    <group
      ref={bottleRef}
      {...props}
      dispose={null}
      scale={170}
      position={[120, -30, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.047}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Circle_Drink_0.geometry}
              material={materials.Drink}
            />
            <mesh
              geometry={nodes.Circle_DrinkLight_0.geometry}
              material={materials.DrinkLight}
            />
            <mesh
              geometry={nodes.Circle_DrinkLightYellow_0.geometry}
              material={materials.DrinkLightYellow}
            />
            <mesh
              geometry={nodes.Circle_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <mesh
            geometry={nodes.Circle001_Label_0.geometry}
            material={materials.Label}
            position={[0, 292.193, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[101, 101, 100]}
          />
          <mesh
            geometry={nodes.Circle002_Lid_0.geometry}
            material={materials.material}
            position={[0, 689.021, -0.828]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane_Label2_0.geometry}
            material={materials.Label2}
            position={[290.431, 348.576, 198.554]}
            rotation={[3.121, 0, Math.PI]}
            scale={[155.124, 54.021, 99.98]}
          />
          <mesh
            geometry={nodes.Plane001_Logo_0.geometry}
            material={materials.Logo}
            position={[575.758, 348.576, 198.554]}
            rotation={[3.121, 0, Math.PI]}
            scale={[113.859, 54.219, 973.874]}
          />
          <mesh
            geometry={nodes.Plane002_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 718.748, 0]}
            rotation={[-Math.PI / 2, 0, 0.419]}
            scale={[34.694, 12.561, 82.894]}
          />
          <mesh
            geometry={nodes.Text_Text_0.geometry}
            material={materials.Text}
            position={[103.224, 616.872, 90.918]}
            rotation={[-3.13, 0, 0]}
            scale={-100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model/bottleCoca.glb");
