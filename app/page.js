import Image from "next/image";
import LoadingAnimation from "./components/LoadingAnimation";
import Screen from "./components/Screen";
import Navigation from "./components/Navigation";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="">
      <LoadingAnimation />
      <Navigation />
      <Section />
      <Screen />
      <Marquee />
      {/* <Experience /> */}
      <Footer />
      {/* <Test /> */}
    </main>
  );
}
