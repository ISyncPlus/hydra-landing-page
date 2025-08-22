import unreal from '../img/unreal-engine.png'
import unity from '../img/unity.png'
import oculus from '../img/oculus.png'
import vive from '../img/vive.png'
import { IoIosArrowDown } from "react-icons/io";
export default function Technologies() {
  return (
    <div id="technologies" className="py-5 px-3 lg:px-7 my-20 relative z-99 scroll-mt-20">
        <section className="rounded-full bg-[url('/technologies.png')] bg-cover bg-center text-4xl w-full flex flex-col items-center py-30 relative">
        <h1 className="font-bold">TECHNOLOGIES &amp; HARDWARE
        </h1>
        <p className="font-light mt-3">USED BY HYDRA VR</p>
            <IoIosArrowDown className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] rounded-full p-3 absolute -bottom-7 outline-10 outline-[#0e0e0e5e] hover:cursor-pointer hover:scale-95 transition-all duration-300" size={65}/>
        </section>

        <figure className="flex items-center justify-between mt-10">
            <img src={unreal} alt="unreal engine" className="w-[15%]"/>
            <img src={unity} alt="unreal engine" className="w-[20%]"/>
            <img src={oculus} alt="unreal engine" className="w-[20%]"/>
            <img src={vive} alt="unreal engine" className="w-[20%]"/>
        </figure>
    </div>
  );
}