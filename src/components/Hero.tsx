import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from './Button';
import hero from '../img/Hero.png'
import arrow from '../vectors/arrow-small-right.svg'
import HeroVectors from '../VectorBgs/HeroVectors';
import Location from  '../img/Location-Icon.png'
import Phone from '../img/phone-call.png'
import Message from '../img/mail.png'
export default function Hero() {
    const [active, setActive] = useState(0);

  const items = [
    {
      img: Location,
      title: "Pay Us a Visit",
      text: "Union St, Seattle, WA 98101, United States",
    },
    {
      img: Phone,
      title: "Give Us a Call",
      text: "(+234) 808 680 3164",
    },
    {
      img: Message,
      title: "Send Us a Message",
      text: "eezedimbu@gmail.com",
    },
  ];

  const prev = () =>
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="py-5 px-3 lg:px-7 z-99 relative">
    <HeroVectors/>
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center md:my-15 px-5">
        <article className="w-[100%] lg:w-[50%] xl:w-[38%]">
            <h1 className="text-3xl lg:text-4xl font-bold leading-15 mt-10 md:mt-0 mb-5 text-center md:text-left">
                <span className="bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent text-4xl  lg:text-5xl">Dive</span> Into The Depths Of <span className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent text-4xl  lg:text-5xl">Virtual Reality </span>
            </h1>

            <p className="hidden md:block mb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            nisl tincidunt eget. Lectus mauris eros in vitae .</p>

            <div className=" flex justify-center md:justify-start items-center gap-5 w-full">
                <Button variant="primary" className="w-full">BUILD YOUR WORLD</Button>
                <img src={arrow} alt="arrow-right" className="hidden lg:block" />
            </div>
        </article>

        <figure className="flex-1 flex justify-end">
            <img src={hero} alt="hero image" className=" w-full lg:w-[90%] xl:w-[70%] outline-15 rounded-bl-[15.5em] rounded-tl-[6em] rounded-tr-[6em] rounded-br-[7em] outline-black/20 bg-black/20"/>
        </figure>

    </section>


    {/* Mobile: one item with arrows */}
      <div className="flex md:hidden items-center gap-3 w-full mt-10 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-full p-5">
          <ChevronLeft size={45} className="p-2 text-white hover:cursor-pointer hover:scale-90 active:hover-90 duration-300 transition-all" onClick={prev}/>

        <figure className="flex justify-evenly items-center gap-2 w-full">
          <img src={items[active].img} alt={items[active].title} className="w-15 transition-all duration-300" />
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm">{items[active].text}</p>
          </div>
        </figure>

          <ChevronRight size={45} className="p-2 text-white hover:cursor-pointer active:scale-90 hover:scale-90 duration-300 transition-all" onClick={next}/>
      </div>

      {/* PC view */}
    <section className="hidden md:flex justify-evenly w-full items-center bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-full py-5 md:px-7 xl:px-10">

        <figure className="flex md:flex-col lg:flex-row items-center gap-2 py-7 flex-1">
            <img src={Location} alt="pin" className="w-17. 5 md:w-15 xl:w-17.5"/>
            <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xl lg:text-2xl md:hidden lg:block">Pay Us a Visit</h2>
                <p className="text-sm md:text-center lg:text-left">Union St, Seattle, WA 98101, United States</p>
            </div>
        </figure>

        <figure className="flex justify-center md:flex-col lg:flex-row items-center gap-5 border-x-1 py-7 border-[#C0B7E8] flex-1">
            <img src={Phone} alt="phone" className="w-15 md:w-13 xl:w-15"/>
            <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xl lg:text-2xl md:hidden lg:block">Give Us a Call</h2>
                <p className="text-sm">(+234) 808 680 3164</p>
            </div>
        </figure>

        <figure className="flex justify-center md:flex-col lg:flex-row items-center gap-5 py-7 flex-1">
            <img src={Message} alt="mail" className="w-15 md:w-13 xl:w-15"/>
            <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xl md:hidden lg:block">Send Us a Message</h2>
                <p className="text-sm">eezedimbu@gmail.com</p>
            </div>
        </figure>

    </section>
    </div>
  );
}