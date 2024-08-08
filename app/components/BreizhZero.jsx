"use client";
// ModelViewer.js
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BottleCoca } from "./models/BottleCoca";
import { Can } from "./models/Can";

const BreizhZero = () => {
  return <div className="absolute top-0 left-0 z-10 w-full h-screen"></div>;
};

export default BreizhZero;
