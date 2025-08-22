import About from "./components/About";
import Hero from "./components/Hero";
import HowTo from "./components/HowTo";
import JoinHydra from "./components/JoinHydra";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <>
    <div className="bg-[#302C42] min-h-screen font-montserrat text-white overflow-hidden scroll-smooth">
      <div className="pb-40">
        <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Services/>
      <Technologies/>
      <HowTo/>
      <JoinHydra/>
    </div>
    </>
  );
}