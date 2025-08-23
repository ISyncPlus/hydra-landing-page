import arrow from '../vectors/big-arrow-right.svg'
import about from '../img/About.png'
import Button from './Button';
import AboutVectors from '../VectorBgs/AboutVectors'
export default function About() {
  return (
    <div id="about" className="py-5 px-3 lg:px-7 my-20 relative z-99 scroll-mt-25">
        <AboutVectors/>
        <article className="flex justify-center lg:justify-normal items-center">
          <section className="w-[70%] lg:w-[50%]">
            <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left"> <span className="block">INTRODUCTION</span> <span className="font-light">TO HYDRA VR</span> <img src={arrow} alt="arrow" className="hidden lg:inline" /> </h1>
          </section>

          <p className="hidden lg:block w-[60%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus fuga exercitationem temporibus dolores facere omnis perspiciatis alias molestias earum! Ab praesentium minus error rem libero magnam dolore animi qui? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim sapiente tenetur!</p>
        </article>

        <section className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
          <img src={about} alt="about" className="w-[80%] lg:w-[40%]"/>

          <article>
            <h1 className="hidden lg:block font-bold text-4xl">ABOUT</h1>
            <h2 className="text-4xl font-extralight mb-10 mt-3 hidden lg:block">HYDRA VR</h2>

            <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, impedit quibusdam amet quam vitae ea dignissimos quos voluptatum ullam, ad rem repellendus ratione earum tenetur aspernatur, non exercitationem nobis necessitatibus.
            Exercitationem libero excepturi adipisci magni eius aliquam reprehenderit quaerat iure, pariatur nostrum, voluptate architecto reiciendis earum. Veniam, itaque. Pariatur, ea. Error iusto itaque molestiae obcaecati iure laudantium facilis inventore consequuntur.</p>

            <div className="flex justify-center lg:justify-start items-center">
              <Button variant="primary" className="w-[60%] lg:w-[40%]">
                LET'S GET IN TOUCH
              </Button>
            </div>
            
          </article>
        </section>
    </div>
  );
}