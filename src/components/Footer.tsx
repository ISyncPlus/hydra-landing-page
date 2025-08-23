import Logo from '/Logo.svg'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import youtube from '../img/youtube.png'
import instagram from '../img/instagram.png'
import pinterest from '../img/pinterest.png'
import Button from './Button'
import Vector_17 from '../vectors/Vector 17.svg'
export default function Footer() {
  return (
    <footer className="py-5 px-3 lg:px-7 z-99 relative">
        <section className="flex flex-col lg:flex-row justify-between items-center">
            <a href='#' className="flex-1">
                <img src={Logo} alt="logo" className="w-50" />
            </a>

            <article className="hidden lg:flex flex-col items-center gap-6 font-bold flex-1 lg:border-x-4 border-[#C0B7E8] rounded-xs ">
                <a href='#about'>ABOUT</a>
                <a href='#services'>SERVICES</a>
                <a href='#technologies'>TECHNOLOGIES</a>
                <a href='#how-to'>HOW TO</a>
                <a href='#contact'>JOIN HYDRA</a>
            </article>

            <article className="hidden lg:flex flex-col items-center gap-6 font-bold flex-1">
                <p>F.A.Q</p>
                <p>SITEMAP</p>
                <p>CONDITIONS</p>
                <p>LICENSES</p>
            </article>

            <figure className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 flex-1 lg:border-l-4 border-[#C0B7E8] py-3 pl-5">
                <h1 className="font-bold">SOCIALIZE WITH HYDRA</h1>
                <section className="flex items-center gap-5 lg:gap-3">
                    <img src={facebook} alt="facebook" className="w-10"/>
                    <img src={twitter} alt="twitter" className="w-10"/>
                    <img src={linkedin} alt="linkedin" className="w-10"/>
                    <img src={youtube} alt="youtube" className="w-10"/>
                    <img src={instagram} alt="instagram" className="w-10"/>
                    <img src={pinterest} alt="pinterest" className="w-10"/>
                </section>

                <Button variant="primary" className="font-bold w-full">BUILD YOUR WORLD</Button>
            </figure>
        </section>

        <img src={Vector_17} alt="v-17" className="my-10 lg:my-20 w-full"/>

        <p className="text-center">2025 © HYDRA LANDING PAGE MADE WITH 💙 BY EBUBE - ALL RIGHTS RESERVED </p>

    </footer>
  );
}