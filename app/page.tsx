import Image from "next/image";
import { Sf_pro_bold } from "./utils/font";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import PhoneBanner from "./components/phoneBanner";
import Topfeatures from "./components/TopFeatures";
import SomethingNewIsComing from "./components/SomethingNewIsComing";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Topfeatures />
      <PhoneBanner />
      <SomethingNewIsComing />
      <Footer />
    </>
  );
}
