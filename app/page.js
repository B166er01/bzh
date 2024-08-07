import Image from "next/image";
import LoadingAnimation from "./components/LoadingAnimation";
import Screen from "./components/Screen";
import Navigation from "./components/Navigation";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="">
      <LoadingAnimation />
      <Navigation />
      <Screen />
      <Marquee />
      <Screen />
    </main>
  );
}
