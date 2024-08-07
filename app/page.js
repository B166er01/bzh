import Image from "next/image";
import LoadingAnimation from "./components/LoadingAnimation";
import Screen from "./components/Screen";

export default function Home() {
  return (
    <main className="">
      <LoadingAnimation />
      <Screen />
      <Screen />
    </main>
  );
}
