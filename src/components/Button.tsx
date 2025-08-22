import React from "react";

type ButtonProps = {
        children: React.ReactNode,
        className?: string,
        variant: 'primary' | 'secondary'
    } & React.ComponentPropsWithRef<'button'>

export default function Button({ children, className, variant, ...rest }: ButtonProps) {
    const base:string = 'font-bold text-xs font-montserrat px-8 lg:px-6 py-4 rounded-full shadow-lg hover:cursor-pointer active:scale-95 hover:scale-95 transition-all duration-300';
    const variants = {
        primary: "bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045]",
        secondary: "bg-transparent text-white border-2 border-white"
    }
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
        { children }
    </button>
  );
}