"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./sections/Menu";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navigation;
