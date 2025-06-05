"use client";

import { Sf_pro_bold, Sf_pro_medium, Sf_pro_regular } from "../utils/font";
import fullbody from "@/public/landingPage/fullbody.webp";
import ai from "@/public/landingPage/ai.webp";
import gamification from "@/public/landingPage/gamification.webp";
import sports from "@/public/landingPage/sports.webp";
import education from "@/public/landingPage/education.webp";
import shops from "@/public/landingPage/shops.webp";

import fullbodythumb from "@/public/landingPage/fullbodythumb.webp";
import aithumb from "@/public/landingPage/aithumb.webp";
import gamificationthumb from "@/public/landingPage/gamificationthumb.webp";
import sportsthumb from "@/public/landingPage/sportsthumb.webp";
import educationthumb from "@/public/landingPage/educationthumb.webp";
import Image from "next/image";
import { useEffect, useRef } from "react"; // already available since you're using hooks

const Topfeatures = () => {
  const scrollRef = useRef<any>(null);

  const features = [
    {
      title: "Full body filters",
      subtitle:
        "Transform your look in a tap. Apply AI-powered filters that style your entire body seamlessly and instantly, so every photo feels uniquely you.",
      tags: ["Filter", "Images"],
      image: fullbody,
      thumbnail: fullbodythumb,
      bg: "#FFC6E2",
      text: "#50072B",
    },
    {
      title: "AI Auto enhance features",
      subtitle:
        "Let AI do the magic auto enhance your photos and videos in seconds. Sharpen details, boost colors, and perfect your content with just one tap.",
      tags: ["AI", "Enhance"],
      image: ai,
      thumbnail: aithumb,
      bg: "#C3C1FF",
      text: "#03006A",
    },
    {
      title: "Gamification",
      subtitle:
        "Level up your experience with fun, rewarding challenges. Earn points, unlock badges, and climb the leaderboard just by engaging with the app.",
      tags: ["Game", "Experience"],
      image: gamification,
      thumbnail: gamificationthumb,
      bg: "#FFEAC6",
      text: "#8B5801",
    },
    {
      title: "Sports",
      subtitle:
        "Stay in the game with real-time updates, highlights, and conversations that bring the action to life.",
      tags: ["Play", "Sports"],
      image: sports,
      thumbnail: sportsthumb,
      bg: "#FFC6E2",
      text: "#50072B",
    },
    {
      title: "Education integration",
      subtitle:
        "Learning just got easier. Access educational content, join study communities, and explore interactive tools all seamlessly integrated into your daily flow.",
      tags: ["Learn", "Educate"],
      image: education,
      thumbnail: educationthumb,
      bg: "#C3C1FF",
      text: "#03006A",
    },
    {
      title: " SUUVO Shops",
      subtitle:
        "Discover a new way to shop directly from your favorite creators. Explore curated drops, exclusive merch, and social storefronts without leaving the app.",
      tags: ["Shop", "Creators"],
      image: shops,
      thumbnail: fullbodythumb,
      bg: "#FFC6E2",
      text: "#50072B",
    },
  ];
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
    <div className=" w-full flex flex-col items-center  z-[10]">
      <h2
        className={`${Sf_pro_bold.className} text-black sticky top-[50%] md:mb-0 mb-[3rem] md:top-[50%] translate-y-[-50%] text-center md:text-[150px] text-6xl md:leading-[88%]`}
      >
        Our top <br /> features
      </h2>
      <div
        ref={scrollRef}
        className=" scroll-hidden z-[40] w-full md:w-[80rem] snap-x snap-mandatory md:max-w-full lg:max-w-[90%] gap-[1rem] md:px-0 px-[3%] md:gap-[2rem] flex overflow-x-auto "
      >
        <div className="md:w-[25rem] w-[80%] shrink-0 "></div>
        {features.map((e, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: e.bg, color: e.text }}
              className=" md:w-[25rem] w-[90%] snap-center gap-[2rem] flex justify-between  flex-col overflow-hidden shrink-0 rounded-[30px] md:rounded-[40px] "
            >
              <div className="flex flex-col px-[7%] pt-[7%] gap-[1.5rem]">
                <div className="flex justify-between items-center">
                  <div className="flex w-full gap-[0.3rem] ">
                    {e.tags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className={`text-[0.8rem] ${Sf_pro_medium.className} px-3 py-2 rounded-full text-black bg-white whitespace-break-spaces`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <Image
                    src={e.thumbnail}
                    alt="feature thumbnail"
                    className="w-[2.6rem] "
                  />
                </div>
                <div className="flex flex-col  gap-[0.5rem]">
                  <h3
                    className={` ${Sf_pro_bold.className} text-[30px] leading-[100%]`}
                  >
                    {e.title}
                  </h3>
                  <p className={`${Sf_pro_regular.className} `}>{e.subtitle}</p>
                </div>
              </div>
              <div className="w-full md:rounded-[30px] rounded-[22px] overflow-hidden aspect-[1/0.8] ">
                <Image
                  src={e.image}
                  alt="feature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
        <div className="md:w-[25rem] w-[80%] shrink-0 "></div>
      </div>
      <div className="flex lef justify-center mt-[2rem]  z-[50] max-w-[90%] rounded-full p-[0.3rem] text-white  gap-[2rem]  ">
        <button
          onClick={() => scrollByCard("prev")}
          className=" text-xl w-[3.2rem] aspect-square  rounded-full bg-[#E21179]/70 backdrop-blur-md cursor-pointer   hover:bg-[#E21179] "
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          onClick={() => scrollByCard("next")}
          className=" text-xl w-[3.2rem] aspect-square  rounded-full bg-[#E21179]/70 backdrop-blur-md cursor-pointer  hover:bg-[#E21179]  "
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Topfeatures;
