import { FaArrowRight } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import arrow from '../vectors/big-arrow-right.svg'
import Vector_15 from '../vectors/Vector 15.png'
export default function HowTo() {
    const [active, setActive] = useState<number>(0);
    const items = [
        {
            number: "01",
            title: "3D Conception & Design"
        },
        {
            number: "02",
            title: "Interaction Design"
        },
        {
            number: "03",
            title: "VR World User Testing"
        },
        {
            number: "04",
            title: "Hydra VR Deploy"
        } 
    ]

    const prev = () => {
        setActive((prev) => ( 
            prev === 0 ? items.length - 1 : prev - 1
        ))
        console.log("clicked left")
    };

    const next = () => {
        setActive((prev) => (
            prev === items.length - 1 ? 0 : prev + 1
        ))
        console.log("clicked right")
    };
  return (
    <div id="howTo" className="py-5 px-3 lg:px-7 my-20 scroll-mt-25">

        <article className="flex flex-col lg:flex-row items-center mb-20">
          <section className="lg:w-[50%]">
            <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left"> <span className="block">HOW WE BUILD</span> <span className="font-light">WITH HYDRA VR</span> <img src={arrow} alt="arrow" className="hidden lg:inline" /> </h1>
          </section>

          <p className="lg:w-[60%] text-center lg:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus fuga exercitationem temporibus dolores facere omnis perspiciatis alias molestias earum! Ab praesentium minus error rem libero magnam dolore animi qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim sapiente tenetur!</p>
        </article>

        {/* Mobile View */}
        <section className="lg:hidden relative">
            <ChevronLeft className="absolute p-1.5 text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full outline-13 outline-[#00000037] bottom-2 left-5 z-10" size={45} onClick={prev}/>

            <figure className="flex flex-col items-center lg:hidden relative gap-10">
                <div className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-6xl px-11 py-12 rounded-full font-bold outline-20 outline-[#00000037]">{items[active].number}</div>

                <p className="font-bold text-2xl w-[50%] text-center">{items[active].title}</p>

            </figure>

            <ChevronRight className="absolute p-1.5 text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full outline-13 outline-[#00000037] bottom-2 right-5" size={45} onClick={next}/>
        </section>

        {/* PC View */}
        <section className="hidden lg:flex justify-between items-center relative z-99">
            <img src={Vector_15} alt="v-15" className="absolute top-0 right-10 -z-10 w-[85%] hidden lg:block" />

            <figure className="flex flex-col items-center">
                <div className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-6xl p-10 rounded-full font-bold outline-20 outline-[#00000037]">01</div>

                <section className="flex mt-10 justify-center gap-2" >
                    <FaArrowRight className="text-[#C0B7E8]" size={30}/>
                    <p className="font-bold text-2xl w-[60%]">3D Conception &amp; Design</p>
                </section>
            </figure>

            <figure className="flex flex-col items-center">
                <div className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-6xl px-8 py-10 rounded-full font-bold outline-20 outline-[#00000037]">02</div>

                <section className="flex mt-10 justify-center gap-2" >
                    <FaArrowRight className="text-[#C0B7E8]" size={30}/>
                    <p className="font-bold text-2xl w-[60%]">Interaction Design</p>
                </section>
            </figure>

            <figure className="flex flex-col items-center">
                <div className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-6xl px-8 py-10 rounded-full font-bold outline-20 outline-[#00000037]">03</div>

                <section className="flex mt-10 justify-center gap-2" >
                    <FaArrowRight className="text-[#C0B7E8]" size={30}/>
                    <p className="font-bold text-2xl w-[60%]">VR World User Testing</p>
                </section>
            </figure>

            <figure className="flex flex-col items-center">
                <div className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-6xl px-8 py-10 rounded-full font-bold outline-20 outline-[#00000037]">04</div>

                <section className="flex mt-10 justify-center gap-2" >
                    <FaArrowRight className="text-[#C0B7E8]" size={30}/>
                    <p className="font-bold text-2xl w-[60%]">Hydra VR Deploy</p>
                </section>
            </figure>
            
        </section>

    </div>
  );
}