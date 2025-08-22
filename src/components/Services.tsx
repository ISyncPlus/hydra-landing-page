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

        <article className="flex items-center">
          <section className="w-[50%]">
            <h1 className="font-bold text-4xl"> <span className="block">WHY BUILD</span> <span className="font-light">WITH HYDRA?</span> <img src={arrow} alt="arrow" className="inline" /> </h1>
          </section>

          <p className="w-[60%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus fuga exercitationem temporibus dolores facere omnis perspiciatis alias molestias earum! Ab praesentium minus error rem libero magnam dolore animi qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim sapiente tenetur!</p>
        </article>

        <section className="flex items-center gap-5 mt-15">
            <Service
            image={simulation}
            altText='simulation'
            title='SIMULATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis itaque? Accusantium dignissimos esse, eos sed quaerat'
            buttonText='TRY IT NOW'
            />

            <Service
            image={education}
            altText='simulation'
            title='SIMULATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis itaque? Accusantium dignissimos esse, eos sed quaerat'
            buttonText='TRY IT NOW'
            />

            <Service
            image={selfcare}
            altText='simulation'
            title='SIMULATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis itaque? Accusantium dignissimos esse, eos sed quaerat'
            buttonText='TRY IT NOW'
            />

            <Service
            image={outdoor}
            altText='simulation'
            title='SIMULATION'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis itaque? Accusantium dignissimos esse, eos sed quaerat'
            buttonText='TRY IT NOW'
            />

        </section>

    </div>
  );
}