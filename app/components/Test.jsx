"use client";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BottleCoca } from "./experience/models/BottleCoca";

const Test = () => {
  return (
    <div>
      <div>
        <div
          className="absolute z-20 w-full h-full pointer-events-none"
          id="titi"
          style={{ pointerEvents: "none" }}
        >
          <Canvas
            style={{ pointerEvents: "none" }}
            className="pointer-events-none"
          >
            <Suspense>
              <Environment preset="sunset" />
              <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
              <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[0.2, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
              >
                <BottleCoca />
              </Float>
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div>
        {" "}
        <div className="relative flex items-center justify-center w-screen h-screen">
          <button className="px-4 py-2 text-white bg-blue-500 rounded">
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
