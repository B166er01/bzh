import LoadingAnimation from "./components/LoadingAnimation";
import Screen from "./components/Screen";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="">
      <LoadingAnimation />
      <Navigation />
      <Section />
      <Screen />
      <Marquee />
      <Footer />
    </main>
  );
}
