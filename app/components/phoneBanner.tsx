"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import lines from "@/public/landingPage/lines.png";
import img from "@/public/landingPage/phonebanner.webp";

const PhoneBanner = () => {
  const [calwidth, setcalwidth] = useState(0);

  const [start_anime, setstart_anime] = useState(false);

  const ref = useRef(null);
  const img_scale = useRef(null);

  const { scrollYProgress: enterProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "start 20%"], // 2% in → 80% in
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ["end 80%", "end 40%"], // 30% out → 60% out
  });

  const enterAnimation = useTransform(
    enterProgress,
    [0, 1],
    [globalThis.innerWidth < 760 ? 85 : 50, 100]
  ); // Grow
  const exitAnimation = useTransform(
    exitProgress,
    [0, 1],
    [100, globalThis.innerWidth < 760 ? 85 : 70]
  ); // Shrink

  const [container_width, setcontainer_width] = useState(25);
  //   Tab active item

  const [width, setWidth] = useState(50);

  useMotionValueEvent(enterAnimation, "change", (val) => {
    setWidth(val);
  });
  useMotionValueEvent(exitAnimation, "change", (val) => {
    setWidth(val);
  });

  useEffect(() => {
    gsap.to(img_scale.current, {
      width: `${width}%`,
      duration: 0.4,
    });
  }, [width, start_anime]);

  const [active, setactive] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className=" mb-[5rem] mx-auto md:max-w-full  w-full md:w-[120rem]  min-h-[100vh]     rounded-[40px] mt-[5rem]  items-center justify-center relative overflow-hidden flex"
      >
        <div
          ref={img_scale}
          className=" absolute bg-[#FFC6E2] w-full md:w-[25rem] rounded-[20px] overflow-hidden h-full"
        ></div>
        <div className="flex flex-col w-full items-center py-[3rem] md:py-[5rem] z-[10] text-center gap-[1.5rem]">
          <h2
            className={`${Sf_pro_bold.className} text-[#5F002F] text-lg md:text-2xl`}
          >
            Get ready to step into the <br />
            future of digital interaction!
          </h2>

          <div className="md:w-[50rem]   w-full relative flex items-center  md:max-w-[87%]">
            <Image
              src={lines}
              alt=""
              className=" absolute w-[85%] md:w-[60%]  top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] "
            />
            <div className="md:w-[13rem] w-[55%] mx-auto relative md:max-w-[50%]">
              <Image src={img} alt="" className=" w-full" />
            </div>
          </div>
          <p
            className={`${Sf_pro_medium.className} text-[#5F002F]  text-[17px] leading-[110%] `}
          >
            Start a live video to engage with <br /> friends and followers in
            real time
          </p>

          {/* <div className="flex  bg-[#FFFFFF]/40  rounded-full p-[0.4rem]">
            <button
              onClick={() => {
                setactive(false);
              }}
              style={{ transition: "1s ease" }}
              className={`${
                Sf_pro_medium.className
              } px-6 cursor-pointer rounded-full py-2 ${
                active ? "" : "bg-[#E21179] text-white"
              }`}
            >
              Go live
            </button>
            <button
              onClick={() => {
                setactive(true);
              }}
              style={{ transition: "1s ease" }}
              className={`${
                Sf_pro_medium.className
              } px-6 cursor-pointer rounded-full py-2 ${
                !active ? "" : "bg-[#E21179] text-white"
              }`}
            >
              Auto racing
            </button>
          </div> */}
          <div className="relative  flex w-[15rem] bg-[#FFFFFF]/40 rounded-full p-1">
            {/* Sliding background pill */}
            <div
              className="absolute top-1 left-1 h-[85%] w-1/2 bg-[#E21179] rounded-full z-0 transition-all duration-500 ease-in-out"
              style={{
                transform: active
                  ? "translateX(calc(100% - 0.5rem))"
                  : "translateX(0%)",
              }}
            />

            {/* Buttons */}
            <button
              onClick={() => setactive(false)}
              className={`relative z-10  cursor-pointer w-full whitespace-nowrap  py-[0.7rem]  rounded-full transition-colors duration-500 ${
                !active ? "text-white" : "text-black"
              } ${Sf_pro_medium.className}`}
            >
              Go live
            </button>
            <button
              onClick={() => setactive(true)}
              className={`relative z-10  cursor-pointer w-full whitespace-nowrap py-[0.7rem] rounded-full transition-colors duration-500 ${
                active ? "text-white" : "text-black"
              } ${Sf_pro_medium.className}`}
            >
              Auto racing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneBanner;
