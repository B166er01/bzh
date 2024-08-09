import Footer from "./components/sections/Footer";
import LoadingAnimation from "./components/sections/LoadingAnimation";
import Marquee from "./components/Marquee";
import Navigation from "./components/Navigation";
import Landing from "./components/sections/Landing";
import Screen from "./components/sections/Screen";

export default function Home() {
  return (
    <main className="">
      <LoadingAnimation />
      <Navigation />
      <Landing />
      <Screen />
      <Marquee />
      <Footer />
    </main>
  );
}
