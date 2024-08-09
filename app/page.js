import LoadingAnimation from "./components/LoadingAnimation";
import Screen from "./components/Screen";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

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
