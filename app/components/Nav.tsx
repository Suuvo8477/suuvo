"use client";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import logo from "@/public/landingPage/logo.webp";
import ButtonCtn from "./button";

const Nav = () => {
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "features", label: "Features", href: "#features" },
    { id: "pre-register", label: "Pre-register", href: "#pre-register" },
  ];
  return (
    <>
      <nav
        className={`${Sf_pro_medium.className} left-[50%] translate-x-[-50%] bg-white/70 md:p-[0.3rem] backdrop-blur-md fixed justify-between flex  top-[1rem] z-[100]  mx-auto md:w-[120rem] md:pl-[2rem] p-[2%] pl-[3%] w-full max-w-[94%] md:max-w-[90%] items-center rounded-full`}
      >
        <Image src={logo} alt="logo" className="w-[8rem] " />
        <div className="hidden absolute md:flex left-[50%] translate-x-[-50%] gap-[3rem]">
          {" "}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-black hover:text-[#F3A21B] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ButtonCtn text={"Contact Us"} />
      </nav>
    </>
  );
};

export default Nav;
