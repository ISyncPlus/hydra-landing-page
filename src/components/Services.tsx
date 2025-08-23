import arrow from '../vectors/big-arrow-right.svg'
import simulation from '../img/simulation.png'
import education from '../img/education.png'
import selfcare from '../img/selfcare.png'
import outdoor from '../img/outdoor.png'
import Service from './Service';
import Vector_14 from '../vectors/Vector 14.svg'
export default function Services() {
  return (
    <div id="services" className="py-5 px-3 lg:px-7 my-20 relative z-99 scroll-mt-25">
      <img src={Vector_14} alt="v-14" className="absolute -bottom-70 left-0 -z-10"/>

        <article className="flex flex-col lg:flex-row items-center">
          <section className=" lg:w-[50%]">
            <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left mb-5 lg:mb-0"> <span className="block">WHY BUILD</span> <span className="font-extralight">WITH HYDRA?</span> <img src={arrow} alt="arrow" className="hidden lg:inline" /> </h1>
          </section>

          <p className="text-center lg:text-left lg:w-[60%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus fuga exercitationem temporibus dolores facere omnis perspiciatis alias molestias earum! Ab praesentium minus error rem libero magnam dolore animi qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim sapiente tenetur!</p>
        </article>

        <section className="flex items-center gap-5 mt-5 lg:mt-15 overflow-x-scroll scrollbar-none scroll-smooth w-full">
            <Service
            image={simulation}
            altText='simulation'
            title='SIMULATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis'
            buttonText='TRY IT NOW'
            />

            <Service
            image={education}
            altText='education'
            title='EDUCATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis'
            buttonText='TRY IT NOW'
            />

            <Service
            image={selfcare}
            altText='self care'
            title='SELF-CARE'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis'
            buttonText='TRY IT NOW'
            />

            <Service
            image={outdoor}
            altText='outdoor'
            title='OUTDOOR'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis'
            buttonText='TRY IT NOW'
            />

        </section>

    </div>
  );
}