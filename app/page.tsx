import Image from "next/image";
import Hero  from "../components/hero"
import Grid from "../components/grid"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
<main className="relative min-h-screen bg-gradient-to-b from-[#04071d] to-[#080c2d] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name : 'Home', link : '/', icon: <FaHome/>}
        ]}/> 
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
