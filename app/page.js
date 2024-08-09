import LoadingAnimation from "./components/section/LoadingAnimation";
import Marquee from "./components/Marquee";
import Navigation from "./components/Navigation";
import Footer from "./components/section/Footer";
import Landing from "./components/section/Landing";
import ProductOriginal from "./components/section/ProductOriginal";
import Screen from "./components/section/Screen";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <LoadingAnimation />
      <Landing />
      {/* <Screen /> */}

      <ProductOriginal />
      <Marquee />
      <Footer />
    </main>
  );
}
