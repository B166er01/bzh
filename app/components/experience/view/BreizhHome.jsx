"use client";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { B1 } from "../models/B1";
import { useGSAP } from "@gsap/react";

const BreizhHome = () => {
  const cameraRef = useRef(null);
  useEffect(() => {
    if (cameraRef.current) {
      console.log("Camera:", cameraRef.current);
      // Example of a GSAP animation
      gsap.to(cameraRef.current, {
        zoom: 25,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => cameraRef.current.updateProjectionMatrix(),
      });
    }
  }, [cameraRef.current]); // Dependency array to re-run when cameraRef.current is set
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
