"use client";
import { Environment, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { BeerBottle } from "./models/BeerBottle";

const BreizhThe = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas>
        <Suspense>
          <Environment preset="sunset" />
          <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
          <BeerBottle />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BreizhThe;
