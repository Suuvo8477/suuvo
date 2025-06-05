"use client";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";

const ButtonCtn = ({ text }: any) => {
  return (
    <>
      <button
        className={` bg-[#F3A21B] hover:opacity-80 cursor-pointer w-fit  capitalize ${Sf_pro_bold.className} rounded-full md:px-[2.6rem] px-[2rem] py-[0.8rem] text-[#3C1702]`}
        style={
          {
            // boxShadow: "inset 0px -5px 4px #8D5800", // ✅ fixed the syntax
          }
        }
      >
        {text ? text : "Pre-Register Now"}
      </button>
    </>
  );
};

export default ButtonCtn;
