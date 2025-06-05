"use client";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium, Sf_pro_regular } from "../utils/font";
import john from "@/public/landingPage/JohnAdams.webp";
import johnThumb from "@/public/landingPage/johnAdamsThumb.webp";

import snyder from "@/public/landingPage/snyder.webp";
import snyderThumb from "@/public/landingPage/synderThum.webp";

import tory from "@/public/landingPage/davies.webp";
import toryThumb from "@/public/landingPage/daviesThumb.webp";

import jenni from "@/public/landingPage/Jennidavis.webp";
import jenniThumb from "@/public/landingPage/JenniDavisThumb.webp";

import sky from "@/public/landingPage/sky.webp";
import skyThumb from "@/public/landingPage/skythumb.webp";
import followers from "@/public/landingPage/followers.png";
import ButtonCtn from "./button";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SomethingNewIsComing = () => {
  const creators = [
    {
      name: "John Adams",
      username: "@Marysnyder_",
      followers: "48.2k",
      image: john,
      avatar: johnThumb,
    },
    {
      name: "Mary Snyder",
      username: "@Marysnyder_",
      followers: "71.5k",
      image: snyder,
      avatar: snyderThumb,
    },
    {
      name: "Tory Davies",
      username: "@Marysnyder_",
      followers: "59.9k",
      image: tory,
      avatar: toryThumb,
    },
    {
      name: "Sky",
      username: "@Marysnyder_",
      followers: "63.1k",
      image: sky,
      avatar: skyThumb,
    },
    {
      name: "Jenni Davis",
      username: "@Marysnyder_",
      followers: "76.4k",
      image: jenni,
      avatar: jenniThumb,
    },
  ];

  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end end"], // ✅ 20% visible → fully in view
  });

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  // Phase 2 → collapse back (scroll 0.5 → 0.9)

  const xIn = [211, 105.5, 0, -105.5, -211];
  const xOut = [40, 20, 0, -20, -40];

  const xCombined = xIn.map((inVal, i) => {
    const outVal = xOut[i];
    return useTransform(
      scrollYProgress,
      [0, 0.4, 0.45, 0.9],
      [`${inVal}%`, `${outVal}%`, `${outVal}%`, `${0}%`]
    );
  });
  //   const yIn = [0, 0, 0, 0, 0]; // or adjust similarly if needed
  const XIn2 = [100, -20, 0, 100, 200]; // or adjust similarly if needed

  const yIn = [-50, -25, 0, 25, 50]; // or adjust similarly if needed

  const yOut = [0, 0, 0, 0, 0];
  const yCombined = yIn.map((inVal, i) => {
    const outVal = yOut[i]; // corresponding value for same index
    return useTransform(
      scrollYProgress,
      [0, 0.4, 0.45, 0.9],
      ["0%", `${inVal}%`, `${inVal}%`, `${0}%`] // holds yIn during 0.5–0.8, animates to yOut after 0.8
    );
  });

  const scrollRef = useRef<any>(null);

  const scrollByCard = (direction: any) => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector("div")?.offsetWidth || 300;
    const gap = 32; // Tailwind gap-[2rem] = 32px
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 👇 Only run scroll on mobile
    scrollByCard("next");
  }, [scrollRef]);
  return (
    <>
      <div className="w-full flex flex-col items-center mt-[7rem] md:w-[120rem] max-w-full lg:max-w-[95%] mx-auto ">
        <div className="flex-col  z-[10]  mb-[2.5rem] items-center lg:mb-[-18vh] flex gap-5 md:gap-8">
          {" "}
          <h2
            className={`${Sf_pro_bold.className} text-center  text-[60px] leading-[80%] md:text-[130px] md:leading-[75%]`}
          >
            Something <br /> new is <br /> coming
          </h2>
          <ButtonCtn />
        </div>

        <div className="lg:h-[150vh]  w-full relative" ref={ref}>
          <div className="w-full lg:sticky top-0 lg:h-[100vh] left-0 ">
            <div
              ref={scrollRef}
              className="flex w-full snap-mandatory snap-x lg:overflow-hidden overflow-x-auto  h-full items-center gap-[0.8rem] lg:gap-[1%] lg:px-0 md:px-[0.5rem] px-[0.8rem] "
            >
              {creators.map((e, i) => {
                return (
                  <motion.div
                    style={
                      isLargeScreen
                        ? {
                            x: xCombined[i],
                            y: yCombined[i],
                            transition: "0.4s ease-out",
                            zIndex: creators.length - i,
                          }
                        : {}
                    }
                    // style={isLargeScreen ? { x: xCombined[i], y: yCombined[i] } }

                    key={i}
                    className="  bg-white/18 snap-center backdrop-blur-md md:p-[0.2rem] overflow-hidden relative lg:w-full md:w-[20rem] w-[80%] aspect-[1/1.3] md:aspect-[1/1.6]  shrink-0 lg:shrink  rounded-[40px] md:rounded-[22px]"
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-[22px] ">
                      <Image
                        src={e.image}
                        alt={e.name}
                        className="w-full h-full object-cover "
                      />
                      <div className="backdrop-blur-md flex items-center absolute left-[50%] translate-x-[-50%] top-[1rem] gap-2 px-2 py-[5px] text-white bg-[#95988F]/50 rounded-[10px]">
                        <Image
                          src={followers}
                          alt={"followers"}
                          className="w-[1rem] "
                        />
                        <p className={`text-[10px] ${Sf_pro_medium.className}`}>
                          {e.followers} followers
                        </p>
                      </div>
                      <div className=" h-[50%]  p-[8%]  items-end justify-between flex md:p-[5%] w-full bg-gradient-to-b to-black z-[10] absolute bottom-0">
                        <div className="flex gap-2  items-center">
                          <div
                            className={`rounded-[100%]  aspect-square overflow-hidden md:w-[20%] lg:w-[40%] ${Sf_pro_regular.className}`}
                          >
                            <Image
                              src={e.avatar}
                              alt={e.name}
                              className="w-full h-full object-cover  "
                            />
                          </div>
                          <div className="flex text-white text-sm md:text-[9px] flex-col">
                            <p className="">{e.username}</p>
                            <p className=" opacity-50">{e.name}</p>
                          </div>
                        </div>

                        <button
                          className={`bg-gradient-to-br text-white text-sm md:text-xs rounded-full px-3 py-2 from-[#EB1845] to-[#FF7235] ${Sf_pro_medium.className}`}
                        >
                          Follow
                        </button>
                      </div>{" "}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SomethingNewIsComing;
