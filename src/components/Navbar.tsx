import Logo from '/Logo.svg'
import Title from '/Title.svg'
import Button from './Button';
import hamburger from '../img/Hamburger-Button.svg'
import { LuPanelRightClose } from "react-icons/lu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-5 pr-7 md:px-7 flex justify-between items-center bg-transparent fixed z-100 w-screen">
      <a href='#' className="flex items-center gap-3 px-4 md:px-4 rounded-full backdrop-blur-xs">
        <img src={Logo} alt="Logo" className="w-[50%]" />
        <img src={Title} alt="title" className="w-[50%]" />
      </a>

      {/* Hamburger for mobile */}
      <div className="lg:hidden relative z-50">
        {!open ? (
          <img
            src={hamburger}
            alt="ham"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        ) : (
          <LuPanelRightClose
            className="text-[#8176AF] text-4xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        )}
      </div>

      {/* Desktop Nav */}
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
        <Button variant="primary">JOIN HYDRA</Button>
      </section>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-[#201C3B] text-white flex flex-col gap-8 pt-24 px-8 transition-transform duration-300 ease-in-out z-40
        ${open ? "translate-x-0" : "translate-x-full"} origin-right`}
        style={{ boxShadow: open ? "-4px 0 24px rgba(0,0,0,0.2)" : "none" }}
      >
        <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#services" onClick={() => setOpen(false)}>SERVICES</a>
        <a href="#technologies" onClick={() => setOpen(false)}>TECHNOLOGIES</a>
        <a href="#howTo" onClick={() => setOpen(false)}>HOW TO</a>
        <a href="#contact" onClick={() => setOpen(false)}>
          <Button variant="secondary" className="backdrop-blur-sm w-full">CONTACT US</Button>
        </a>
        <Button variant="primary" className="w-full">JOIN HYDRA</Button>
      </div>
    </nav>
  );
}