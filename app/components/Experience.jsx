"use client";
// ModelViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Can } from "./models/Can";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";

const ModelViewer = () => {
  return (
    <div className="fixed top-0 left-0 z-0 w-full h-screen">
      <Canvas style={{ pointerEvents: "none" }}>
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
  );
};

export default ModelViewer;
