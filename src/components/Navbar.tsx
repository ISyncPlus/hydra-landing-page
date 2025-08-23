import Logo from '/Logo.svg'
import Title from '/Title.svg'
import Button from './Button';
import hamburger from '../img/Hamburger-Button.svg'
export default function Navbar() {
  return (
    <nav className="py-5 px-3 md:px-7 flex justify-between items-center bg-transparent fixed z-100 w-screen">
        <a href='#' className="flex items-center gap-3 px-4 md:px-4 rounded-full backdrop-blur-xs">
            <img src={Logo} alt="Logo" className="w-[50%]"/>
            <img src={Title} alt="title" className="w-[50%]" />
        </a>

        {/* hamburger */}
        <div className="lg:hidden">
          <img src={hamburger} alt="ham" />
        </div>

        <section className="text-white text-xs font-medium hidden lg:flex items-center gap-10 p-5 backdrop-blur-xs rounded-full">
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#technologies">TECHNOLOGIES</a>
            <a href="#howTo">HOW TO</a>
        </section>

        <section className="hidden lg:flex items-center gap-7 ">
            <a href="#contact">
              <Button variant="secondary" className="backdrop-blur-sm">CONTACT US</Button>
            </a>
            <Button variant="primary" >JOIN HYDRA</Button>
        </section>
    </nav>
  );
}