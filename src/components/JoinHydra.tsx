import Vector_16 from '../vectors/Vector 16.svg'
import Button from './Button';
export default function JoinHydra() {
  return (
    <div id="contact" className="py-5 px-3 lg:px-7 my-10 lg:my-20 scroll-mt-15">
        <form className="p-10 bg-gradient-to-b from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-[60px] flex flex-col items-center">
            <h1 className="font-bold text-4xl">JOIN HYDRA</h1>
            <img src={Vector_16} alt="v-16" className="py-10" />
            <p className="font-light text-3xl lg:text-4xl text-center mb-10">Let's Build <span className="block lg:inline">Your VR Experience</span> </p>


            <section className="w-full mb-10">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <input type="text" placeholder="First Name" className="px-6 py-5 w-full border-2 border-white rounded-full"/>
                    <input type="text" placeholder="Last Name" className="px-6 py-5 w-full border-2 border-white rounded-full"/>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 mt-5">
                    <input type="text" placeholder="Email" className="px-6 py-5 w-full border-2 border-white rounded-full"/>
                    <input type="text" placeholder="Phone Number" className="px-6 py-5 w-full border-2 border-white rounded-full"/>
                </div>
            
                <input type="text" placeholder="Subject" className="px-6 py-5 w-full border-2 border-white rounded-full block mt-5"/>

                <textarea name="" id="" cols={30} rows={10} placeholder="Tell Us Something..." className="px-6 py-5 w-full border-2 border-white rounded-[40px] mt-5"></textarea>
            </section>

            <Button variant="primary" className="w-full lg:w-[20%]">
                SEND TO HYDRA
            </Button>
        </form>
    </div>
  );
}