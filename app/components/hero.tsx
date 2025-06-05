"use client";
import background from "@/public/landingPage/background.webp";
import phone from "@/public/landingPage/phone.webp";
import friendsRight from "@/public/landingPage/friendsRight.webp";
import avater from "@/public/landingPage/avater.webp";
import johnson from "@/public/landingPage/johnson.webp";
import blackfollowers from "@/public/landingPage/blackfollowers.png";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import ButtonCtn from "./button";
import fullbodyopt from "@/public/landingPage/fullbodyopt.webp";
import livestreaming from "@/public/landingPage/livestreaming.webp";
import videoCalling from "@/public/landingPage/videoCalling.webp";
import interactiveCasualGames from "@/public/landingPage/interactiveCasualGames.webp";
import mobHeroONe from "@/public/landingPage/mobHeroONe.webp";
import mobHeroTwo from "@/public/landingPage/mobHeroTwo.webp";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 760);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const featureCards = [
    {
      title: [
        { text: "Full ", bold: false },
        { text: " Body", bold: true },
        { text: " Filters", bold: false },
      ],
      description:
        "Express yourself like never before with every picture make it uniquely yours.",
      image: fullbodyopt,
    },

    {
      title: [
        { text: "Video", bold: true },
        { text: " Calling", bold: false },
      ],
      description:
        "Connect face-to-face with friends, fans, or your community. Enjoy real-time video chats that feel personal right inside the app.",
      image: videoCalling,
    },
  ];
  const featureCardsTwo = [
    {
      title: [
        { text: "Live", bold: false },
        { text: " Streaming", bold: true },
      ],
      description:
        "Connect in real time and feel the moment as it happens. Be part of the experience.",
      image: livestreaming,
    },
    {
      title: [
        { text: "Interactive", bold: true },
        { text: " Casual", bold: false },
        { text: " Games", bold: true },
      ],
      description:
        "Take a break and dive into fun! Enjoy light, interactive games you can play solo or with friends right inside the app.",
      image: interactiveCasualGames,
    },
  ];

  const [finalTop, setFinalTop] = useState(50);
  const [finalScale, setFinalScale] = useState(1);
  const [finalTranslateY, setFinalTranslateY] = useState(-50);
  const [finaltranslateBody, setfinaltranslateBody] = useState(0);
  const [startAnime, setstartAnime] = useState(false);
  const [startSecondAnime, setstartSecondAnime] = useState(false);

  useEffect(() => {
    setstartAnime(true);
    setTimeout(() => {
      setstartSecondAnime(true);
    }, 500);
  }, []);

  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end end"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [-70, -50, -40, -50]
  );
  const translateBodY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [0, 0, -40, -50]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 1],
    [1, 1.17, 1.17, 0.8]
  );
  const top = useTransform(scrollYProgress, [0, 1], [50, 50]);

  useMotionValueEvent(top, "change", (latest) => {
    setFinalTop(latest);
  });

  useMotionValueEvent(scale, "change", (latest) => {
    setFinalScale(latest);
  });

  useMotionValueEvent(translateY, "change", (latest) => {
    setFinalTranslateY(latest);
  });
  useMotionValueEvent(translateBodY, "change", (latest) => {
    setfinaltranslateBody(latest);
  });
  return (
    <>
      <div className=" relative overflow-x-clip w-full">
        <div className=" absolute top-0  flex md:gap-[2rem] gap-[1.5rem]  translate-x-[-50%] left-[50%] h-full  w-[100%]">
          <div className="  w-full absolute z-[10] h-[50%]">
            <Image
              src={background}
              alt="background"
              fill
              className="object-cover"
            />
            <div className=" w-full   absolute bottom-0 md:bottom-[-25%] md:h-[60%] h-[40%]  bg-white backdrop-blur-md blur-[200px]">
              <div className="md:h-[20%] h-full  absolute bottom-[-30%] w-full   blur-2xl bg-white"></div>
            </div>
          </div>
          <div className="w-full h-full  blur-[90px] md:blur-[150px]   bg-[#DDE5FE] rounded-b-full"></div>
          <div className="w-full h-full   blur-[90px] md:blur-[150px]   bg-[#FDDBFF] rounded-b-full"></div>
        </div>
        <div
          ref={ref}
          className="md:w-[120rem] md:mb-[20rem] mb-[14rem] md:max-w-full mx-auto   items-center flex flex-col pt-[10rem] relative "
        >
          <div
            className={` z-[10] md:pt-0 pt-[0rem] items-center relative flex flex-col gap-[1.5rem] md:gap-[1.5rem] text-center ${Sf_pro_medium.className}`}
          >
            {/* <Image
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
              }}
              src={mobHeroONe}
              alt="mobHeroONe"
              className={`w-[43%] ${
                !startAnime ? "" : "rotate-[-27deg]"
              }  z-[20] absolute left-[-18%] top-[0.4rem]  md:hidden`}
            /> */}
            {/* <Image
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
              }}
              src={mobHeroTwo}
              alt="mobHeroTwo"
              className={`w-[50%] ${
                !startAnime ? "" : "rotate-[20deg]"
              }   absolute right-[-10%] top-[-2rem]  md:hidden`}
            /> */}
            <h1
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
                transform: `translateY(${
                  startAnime ? (startSecondAnime ? 0 : 10) : -70
                }%)`, // ← just
              }}
              className={`text-center text-[45px] leading-[120%] md:text-[75px] md:leading-[110%] z-[10]  `}
            >
              The Future of <br /> Social Media
            </h1>
            <p
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
                transform: `translateY(${
                  startAnime ? (startSecondAnime ? 0 : -10) : 70
                }%)`, // ← just
              }}
              className=" md:px-0 px-[10%]"
            >
              {" "}
              A new way to connect, create, and engage. Experience a social
              media platform that <br className="md:block hidden" /> goes beyond
              likes—built for real connections, privacy, and engagement.
            </p>
            <div
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
                transform: `translateY(${
                  startAnime ? (startSecondAnime ? 0 : -10) : 70
                }%)`, // ← just
              }}
              className=""
            >
              <ButtonCtn />
            </div>
          </div>

          <div className="md:h-[100vh] md:mt-0 my-[3rem]  md:sticky  w-[80%] md:w-[20%]  left-[50%] md:translate-x-[-50%] top-0 z-[80] ">
            <div
              style={{
                transition: ` 0.4s ease-out`,
                opacity: startAnime ? 1 : 0,
                top: `${finalTop}%`, // ← just like Tailwind
                transform: `translateY(${
                  !startAnime ? 0 : !isLargeScreen ? 0 : finalTranslateY
                }%) scale(${
                  !startAnime
                    ? 1.4
                    : !startSecondAnime
                    ? 0.9
                    : !isLargeScreen
                    ? 1
                    : finalScale
                })`, // ← just
              }}
              className="md:absolute   md:rounded-[50px] md:top-[50%]  w-full"
            >
              <Image
                src={phone}
                alt="phone"
                className=" md:shadow-2xl md:rounded-[50px] md:shadow-black w-full"
              />
            </div>
          </div>

          <div className=" w-full md:flex  md:w-[120rem] md:max-w-[95%] hidden z-[10] mt-[-80vh] ">
            <div className="   w-full  gap-[3rem] flex flex-col">
              <div
                style={{
                  transition: ` 0.4s ease-out`,
                  opacity: startAnime ? 1 : 0,
                  transform: ` scale(${!startAnime ? 0 : 1})`, // ← just
                }}
                className="flex justify-end"
              >
                <div className="lg:aspect-[1/0.6] md:aspect-[1/1.2] md:w-[85%] p-[6%] lg:p-[4%] flex flex-col justify-between  relative rounded-[20px] lg:rounded-[25px] overflow-hidden ">
                  <Image
                    src={johnson}
                    alt="johnson"
                    className="w-full h-full absolute top-0 left-0 object-cover"
                  />

                  <div className=" w-full flex justify-between items-center ">
                    <div className="backdrop-blur-md flex items-center  gap-2 px-2 py-[5px]  rounded-full shadow-sm">
                      <Image
                        src={blackfollowers}
                        alt={"followers"}
                        className="w-[1rem] "
                      />
                      <p className={`text-[11px] ${Sf_pro_medium.className}`}>
                        65.8k{" "}
                        <span className="hidden lg:inline-flex">Followers</span>
                      </p>
                    </div>
                    <p
                      className={`text-[11px] opacity-50 ${Sf_pro_medium.className}`}
                    >
                      45 Posts uploaded
                    </p>
                  </div>
                  <div className="w-full  rounded-full p-[0.3rem] bg-[#F3F3FA]/70 backdrop-blur-md flex justify-between items-center">
                    <p
                      className={`${Sf_pro_bold.className} text-xs pl-[3%] opacity-50`}
                    >
                      Alexandreya Johnson
                    </p>
                    <button
                      className={`bg-white text-black/50 cursor-pointer hover:bg-[#BE8469] hover:text-white text-sm rounded-full px-4 py-2 ${Sf_pro_medium.className}`}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={` flex lg:flex-row flex-col  gap-3 ${Sf_pro_bold.className}`}
              >
                <div className="lg:w-[7rem] w-[5rem] aspect-square rounded-[100%]">
                  <Image
                    src={avater}
                    alt="avater"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  style={{
                    transition: ` 0.4s ease-out`,
                    opacity: startAnime ? 1 : 0,
                    transform: ` scale(${
                      !startAnime ? 0 : !startSecondAnime ? 1.1 : 1
                    })`, // ← just
                  }}
                  className="flex flex-col w-full  justify-between"
                >
                  <p className="text-xl opacity-70">Hello John Alexis 👋</p>
                  <div className="flex gap-1 cursor-pointer   w-fit text-[#BE8469] group">
                    <button className="rounded-full group-hover:bg-[#BE8469] group-hover:text-white  cursor-pointer px-4 py-3 bg-white shadow-md">
                      Start live session{" "}
                    </button>
                    <div className="h-full group-hover:bg-[#BE8469] group-hover:text-white aspect-square text-2xl bg-white flex justify-center items-center shadow-md rounded-full">
                      <i className="bi bi-arrow-right "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full "></div>
            <div className=" w-full  gap-[4rem] flex flex-col">
              <div
                style={{
                  transition: ` 0.4s ease-out`,
                  opacity: startAnime ? 1 : 0,
                  transform: `translateY(${startAnime ? 0 : 70}%)  scale(${
                    !startAnime ? 0 : !startSecondAnime ? 1.1 : 1
                  })`, // ← just
                }}
                className="w-[15rem] rounded-[25px] justify-center pt-[3%] relative flex overflow-hidden aspect-[1/1] "
              >
                <Image
                  src={friendsRight}
                  alt="friendsRight"
                  className="w-full h-full absolute top-0 left-0 object-cover"
                />
                <p
                  className={`${Sf_pro_bold.className} text-black/40 z-[10] text-center `}
                >
                  Add up your close <br />{" "}
                  <span className="text-black">friends</span> &{" "}
                  <span className="text-black">community</span>
                </p>
              </div>

              <div
                style={{
                  transition: ` 0.56s ease-out`,
                  opacity: startAnime ? 1 : 0,
                  transform: `translateY(${startAnime ? 0 : -70}%)  scale(${
                    !startAnime ? 0 : 1
                  })`, // ← just
                }}
                className=" flex  bg-white rounded-[25px] w-fit gap-3  px-7 py-10"
              >
                <div className=" bg-gradient-to-b from-black w-[2.5px]"></div>
                <div className=" flex flex-col  text-sm gap-2">
                  <p className={`${Sf_pro_bold.className} text-black `}>
                    SUUVO
                  </p>
                  <p
                    className={`${Sf_pro_medium.className} text-black/40  z-[10]  `}
                  >
                    One app, with endless opportunities, an app that lets <br />{" "}
                    you connect with
                    <span className="text-black"> friends globally</span> and
                    also <span className="text-black"> play games </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* element spacing on here  */}
          <div className="h-[40rem] md:block hidden w-full z-[10]">
            {/* What <br /> Makes <br /> SUUVO <br /> Unique? */}
          </div>

          {/* insert it here  */}
          <div className=" mb-[-20%] md:hidden sticky top-[50%] translate-y-[-50%] md:mb-[5rem] mt-[40%] w-full z-[10]">
            <h2
              className={` gradient text-[20vw] leading-[90%]  ${Sf_pro_bold.className} text-white text-center z-[10] [mask-image:radial-gradient(ellipse_at_center,white_100%,transparent_100%)][mask-size:100%_100%] [mask-repeat:no-repeat]`}
            >
              What <br /> Makes <br /> SUUVO <br /> Unique?
            </h2>
          </div>
          <div className=" w-full grid md:grid-cols-3 z-[10] md:max-w-[95%]  md:gap-0 gap-[1.5rem] mx-auto md:mt-[5rem]">
            <div className="w-full lg:pl-[5%] items-center md:items-end  flex flex-col md:gap-[3rem] gap-[1.5rem] ">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md lg:rounded-[40px] rounded-[30px]  flex flex-col justify-between  w-[95%] md:w-[22rem] max-w-full shrink relative overflow-hidden"
                >
                  <div
                    className={` ${Sf_pro_medium.className} md:px-[6%] md:py-[8%]  p-[10%] flex flex-col`}
                  >
                    <h3 className="md:text-xl text-2xl capitalize mb-2 z-[10] leading-tight">
                      {card.title.map((part, i) => (
                        <span
                          key={i}
                          className={`${
                            part.bold ? " text-black" : "text-black opacity-50"
                          } ${Sf_pro_bold.className}`}
                        >
                          {part.text}
                        </span>
                      ))}
                    </h3>
                    <p className=" opacity-50 z-[10]">{card.description}</p>
                  </div>
                  <div className=" md:aspect-[1/0.6] aspect-[1/0.5] w-full  overflow-hidden relative  z-[10] ">
                    <Image
                      src={card.image}
                      alt="feature"
                      className="w-full h-fit bottom-0 absolute  left-0  "
                    />{" "}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full  justify-center items-center md:flex hidden ">
              <h2
                className={`lg:text-[140px] md:text-[100px] leading-[90%] text-center  text-white z-[10] ${Sf_pro_bold.className} [mask-image:radial-gradient(ellipse_at_center,white_100%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]`}
              >
                What <br /> Makes <br /> SUUVO <br /> Unique?
              </h2>
            </div>
            <div className="w-full lg:pr-[5%] md:items-start items-center  flex flex-col gap-[1.5rem] md:gap-[3rem] ">
              {featureCardsTwo.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md lg:rounded-[40px] rounded-[30px]  flex flex-col justify-between  w-[95%] md:w-[22rem] max-w-full shrink relative overflow-hidden"
                >
                  <div
                    className={` ${Sf_pro_medium.className} md:px-[6%] md:py-[8%]  p-[10%] flex flex-col`}
                  >
                    <h3 className="md:text-xl text-2xl capitalize mb-2 z-[10] leading-tight">
                      {card.title.map((part, i) => (
                        <span
                          key={i}
                          className={`${
                            part.bold ? " text-black" : "text-black opacity-50"
                          } ${Sf_pro_bold.className}`}
                        >
                          {part.text}
                        </span>
                      ))}
                    </h3>
                    <p className=" opacity-50 z-[10]">{card.description}</p>
                  </div>
                  <div className=" md:aspect-[1/0.6] aspect-[1/0.5] w-full  overflow-hidden relative  z-[10] ">
                    <Image
                      src={card.image}
                      alt="feature"
                      className="w-full h-fit bottom-0 absolute  left-0  "
                    />{" "}
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
