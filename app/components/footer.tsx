"use client";
import footerImg from "@/public/landingPage/footer.webp";
import Check from "@/public/landingPage/Check.png";
import AppleLogo from "@/public/landingPage/AppleLogo.webp";
import GooglePlayLogo from "@/public/landingPage/GooglePlayLogo.webp";
import mobFooterBackground from "@/public/landingPage/mobileFooter.webp";
import Image from "next/image";
import logo from "@/public/landingPage/whiteLogo.webp";

import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import Link from "next/link";
import ButtonCtn from "./button";
import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const benefits = [
    "Free Coins to kickstart your journey",
    "Exclusive Welcome Gifts just for you",
    "Priority Access to new feature",
  ];
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "", // 🆕 added location
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Optional: basic frontend validation
    if (!formData.name || !formData.email) {
      setStatus("error");
      setFeedback("Please fill in your name and email.");
      return;
    }

    try {
      setStatus("loading");
      setFeedback(""); // Clear any previous message

      const res = await axios.post("/api/subscribe", {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        location: formData.location, // ✅ add this
      });

      if (res.data.success) {
        setStatus("success");
        setFeedback(" You’ve successfully subscribed to SUUVO updates!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          location: "",
        });
      } else {
        setStatus("error");
        setFeedback(
          res.data.message || "Subscription failed. Please try again."
        );
      }
    } catch (err: any) {
      setStatus("error");
      setFeedback(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const locationString = `${data.city}, ${data.region}, ${data.country_name}`;
        setFormData((prev) => ({ ...prev, location: locationString }));
      } catch (error) {
        console.warn("Failed to fetch location");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div
      className={` overflow-clip  pt-[5rem] md:gap-0 gap-[5rem]  bg-[#FFF8F6] flex flex-col relative w-full ${Sf_pro_medium.className}`}
    >
      {/* Modal Container */}
      <div className="w-full mx-auto md:w-[120rem] max-w-full  items-center gap-[0.15rem] flex flex-col z-[10]">
        <div className="relative w-full  items-center z-20 max-w-[97%]    grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#EFEFEF]/81 backdrop-blur-[62px] rounded-[25px] md:rounded-[2rem] px-[4%] pb-[6%] pt-[10%]  md:p-[3rem]">
          {/* Left Section */}
          <div
            className={`text-black md:pl-[5%] flex flex-col gap-[1.5rem] md:gap-[2rem] ${Sf_pro_bold.className}`}
          >
            <div className=" flex flex-col gap-[0.5rem] ">
              <h2 className="text-3xl md:text-[60px] font-bold leading-[105%]">
                Pre-Register &<br /> Get Exclusive Rewards!
              </h2>
              <p
                className={` opacity-[50%] text-lg ${Sf_pro_medium.className}`}
              >
                Be the first to experience SUUVO – Sign up early and enjoy
              </p>
            </div>
            <ul className=" flex flex-col gap-[1.2rem] text-sm md:text-base text-black">
              {benefits.map((e, index) => {
                return (
                  <li
                    key={index}
                    className={` md:text-lg flex items-start gap-4 ${Sf_pro_medium.className}`}
                  >
                    <Image src={Check} alt="check" className="w-[1.5rem]" />
                    <p className="">{e}</p>
                  </li>
                );
              })}
            </ul>

            <div
              className={`md:mt-4 mt-3 flex items-center gap-4  ${Sf_pro_medium.className}`}
            >
              <button
                className={`bg-white gap-2 cursor-pointer hover:bg-gray-400 flex items-center px-7 py-4 rounded-full text-sm  `}
              >
                <Image src={AppleLogo} alt="applelogo" className="w-[1.3rem]" />
                <Image
                  src={GooglePlayLogo}
                  alt="GooglePlayLogo"
                  className="w-[1.3rem]"
                />
                Download app
              </button>{" "}
              <div className="  border-r text-black/0   border-r-black/50 opacity-50">
                |
              </div>
              <span className="text-lg opacity-[50%] ">Coming soon</span>
            </div>
            <div
              className={` ${Sf_pro_medium.className} flex text-xs md:flex-row  justify-between md:justify-start items-center md:text-base `}
            >
              <a href="mailto:info@suuvo.com">info@suuvo.com </a>{" "}
              <span className=" hidden md:block">&nbsp; | &nbsp; </span>
              <p>
                Designed & Developed by{" "}
                <Link
                  href={"http://malkain.com/"}
                  className="underline opacity-50 underline-offset-4"
                >
                  Malkain Designs
                </Link>
              </p>
            </div>
          </div>

          {/* Right Section: Form */}
          <form className="bg-white text-center rounded-[30px] px-[4%]  md:px-10 py-[7%] md:py-10 flex flex-col gap-2 md:gap-4 text-sm md:text-base">
            <div className="flex flex-col gap-[0.2rem] md:gap-[0.4rem]">
              <h3
                className={`md:text-3xl text-2xl font-bold text-black ${Sf_pro_bold.className}`}
              >
                Pre-Register Now
              </h3>
              <p className={` opacity-50 mb-4 ${Sf_pro_medium.className}`}>
                Register First, Get Updated First
              </p>
            </div>

            <div className="flex flex-col gap-[0.7rem] md:gap-[1rem]">
              <input
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-[#000000]/5 rounded-[12px] h-[3.5rem] md:h-[4rem] px-5 border-black/0 border focus:border-black/30 transition duration-300 outline-none"
              />
              <input
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-[#000000]/5 rounded-[12px] h-[3.5rem] md:h-[4rem] px-5 border-black/0 border focus:border-black/30 transition duration-300 outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-[#000000]/5 rounded-[12px] h-[3.5rem] md:h-[4rem] px-5 border-black/0 border focus:border-black/30 transition duration-300 outline-none"
              />
              {feedback && status !== "idle" && (
                <div
                  className={`flex items-center gap-2 text-sm md:text-base px-4 py-3 rounded-md transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status === "success" ? (
                    <svg
                      className="w-5 h-5 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 shrink-0 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span>{feedback}</span>
                </div>
              )}

              <div className="flex justify-center w-full ">
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className={`bg-[#F3A21B] flex items-center justify-center gap-2 w-fit capitalize ${
                    Sf_pro_bold.className
                  } md:rounded-full max-w-full px-[3.5rem] py-[0.8rem] rounded-[17px] md:px-[5rem] text-lg mt-2 md:py-[1rem] cursor-pointer ${
                    status === "loading"
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:opacity-80"
                  } text-[#3C1702]`}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-[#3C1702]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Branding (Logo and text) */}
        {/* <div className="relative   backdrop-blur-[70px] flex items-center justify-between w-full  rounded-full z-20 max-w-[97%] pl-5  bg-[#FFFFFF]/80 p-4 text-center text-sm  ">
          <Image src={logo} alt="logo" className="w-[8rem] " />
          <div className=" flex text-xs md:flex-row flex-col items-center md:text-base">
            <a href="mailto:info@suuvo.com">info@suuvo.com </a>{" "}
            <span className=" hidden md:block">&nbsp; | &nbsp; </span>
            <Link href={"http://malkain.com/"} className="textsst">
              {" "}
              Designed & Developed by malkain designs{" "}
            </Link>
          </div>
        </div> */}
      </div>

      <div className="aspect-[1/0.3] md:aspect-[1/0.21]"></div>

      <div className=" absolute  w-full md:w-[120rem] max-w-full left-[50%] translate-x-[-50%] bottom-0">
        <Image
          src={footerImg}
          alt="footer image"
          className="w-full h-fit hidden md:block  object-cover"
        />
        <Image
          src={mobFooterBackground}
          alt="footer image"
          className="w-full h-fit  md:hidden object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
