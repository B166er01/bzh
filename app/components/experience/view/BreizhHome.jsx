"use client";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { B1 } from "../models/B1";
import { useGSAP } from "@gsap/react";

const BreizhHome = () => {
  const cameraRef = useRef(null);
  useEffect(() => {
    console.log(cameraRef.current);
  }, [cameraRef.current]);
  return (
    <div
      className="absolute z-20 w-full h-screen pointer-events-none"
      id="titi"
      style={{ pointerEvents: "none" }}
    >
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Suspense>
          <Environment preset="sunset" />
          <OrthographicCamera
            ref={cameraRef}
            makeDefault
            zoom={15}
            position={[0, 0, 50]}
          />
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0.2, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <B1 />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BreizhHome;
