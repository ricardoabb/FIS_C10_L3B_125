import { Intro } from "./components/Intro";
import { PrincipalContainer } from "./components/PrincipalContainer";
import { TextBox } from "./components/TextBox";
import { info } from "./utils/info";
import { CardModal } from "./components/CardModal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
     <Intro />
     <div className="relative w-full h-[200px] bg-gradient-to-b from-yellow-400 to-sky-950"></div>
     <PrincipalContainer />
     <div className="relative py-20 bg-[#4f2708] z-10">
     <TextBox title="Conclusão" content={info.conclusion} bgColor='bg-[#2F1704] bg-opacity-75 text-white' />
     </div>
     <CardModal />
    </main>
  );
}
