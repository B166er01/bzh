"use client";
// ModelViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Can } from "./models/Can";
import { Environment, OrthographicCamera } from "@react-three/drei";

const ModelViewer = () => {
  return (
    <div className="fixed top-0 left-0 z-0 w-full h-screen">
      <Canvas style={{ pointerEvents: "none" }}>
        <Suspense>
          <Environment preset="sunset" />
          <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
          <Can />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
