import { FaArrowRight } from "react-icons/fa6";
import arrow from '../vectors/big-arrow-right.svg'
import Vector_15 from '../vectors/Vector 15.png'
export default function HowTo() {
  return (
    <div id="howTo" className="py-5 px-3 lg:px-7 my-20 scroll-mt-25">

        <article className="flex items-center mb-20">
          <section className="w-[50%]">
            <h1 className="font-bold text-4xl"> <span className="block">HOW WE BUILD</span> <span className="font-light">WITH HYDRA VR</span> <img src={arrow} alt="arrow" className="inline" /> </h1>
          </section>

          <p className="w-[60%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus fuga exercitationem temporibus dolores facere omnis perspiciatis alias molestias earum! Ab praesentium minus error rem libero magnam dolore animi qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim sapiente tenetur!</p>
        </article>

        <section className="flex justify-between items-center relative z-99">
            <img src={Vector_15} alt="v-15" className="absolute top-0 right-10 -z-10 w-[85%]" />
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