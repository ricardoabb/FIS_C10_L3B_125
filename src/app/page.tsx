import Image from "next/image";
import { Intro } from "./components/Intro";
import { PrincipalContainer } from "./components/PrincipalContainer";
import { Starts } from "./components/Start";
import { TextBox } from "./components/TextBox";
import { info } from "./utils/info";
import { CardModal } from "./components/CardModal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
     <Intro />
     <div className="relative w-full h-[200px] bg-gradient-to-b from-yellow-400 to-sky-950"></div>
     <PrincipalContainer />
     <div className="py-20 bg-[#4f2708]">
     <TextBox title="Conclusão" content={info.conclusion} bgColor='bg-[#2F1704]' />
     </div>
     <CardModal />
    </main>
  );
}
