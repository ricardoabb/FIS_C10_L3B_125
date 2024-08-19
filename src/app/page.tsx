import Image from "next/image";
import { Intro } from "./components/Intro";
import { PrincipalContainer } from "./components/PrincipalContainer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
     <Intro />
     <div className="relative w-full h-[200px] bg-gradient-to-b from-yellow-400 to-sky-950"></div>
     <PrincipalContainer />
    </main>
  );
}
