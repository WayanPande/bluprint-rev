import { Container, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HomeCardModel from "../card/HomeCardModel";
import PriceCard, { PRICING_TYPE } from "../card/PriceCard";
import HomeMarquee from "../marquees/HomeMarquee";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeCarousel from "../carousel/HomeCarousel";
import SocialMediaList from "../list/SocialMediaList";

const Home = () => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 48em)");
  const [isMaxScreenWidthMd] = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <Container maxW={"container.xl"}>
        <section className="flex flex-col items-center justify-center p-8 lg:p-32">
          <h1 className="font-inter font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl lg:py-3 md:px-40 lg:px-24 text-center">
            Sajikan hadiah dengan{" "}
            <span className="text-fuchsia-900">Cinta & Cerita.</span>
          </h1>
          <Image
            src="/image/hero.png"
            width={1024}
            height={1024}
            className="w-full md:w-10/12 rounded-xl dark:mt-5"
            alt="raffi nagita original"
          />
        </section>

        {isScreenWidthMd && (
          <div className="h-[130vh] xl:h-[150vh]">
            <div className="rounded-full w-96 h-96 bg-yellow-300 absolute right-80 -z-10"></div>
            <h1 className="font-quicksand font-bold md:text-[6rem] lg:text-[10rem] text-slate-700/30  text-center">
              Bluprint
            </h1>
            <video
              width={isMaxScreenWidthMd ? "240" : "340"}
              autoPlay
              muted
              loop
              className="absolute left-1/2 right-1/2 -translate-x-1/2 shadow-sm"
            >
              <source
                src="https://bluprinthink.id/Denisumargo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}

        <h1 className="font-inter font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:py-3 md:px-40 text-center mb-5">
          Model / Template Bluprint
        </h1>
        <section className="flex flex-col md:flex-row items-center justify-center p-8 gap-7 lg:gap-9">
          <HomeCardModel
            type="Mozaik"
            key="Mozaik"
            img={[
              "/image/mozaik/rich-brian.png",
              "/image/mozaik/rich-brian-frame.jpg",
            ]}
          />
          <HomeCardModel
            type="Flower"
            key="Flower"
            img={["/image/flower/thofu.png", "/image/flower/thofu-frame.jpg"]}
          />
          <HomeCardModel
            type="Original"
            key="Original"
            img={[
              "/image/original/billar.png",
              "/image/original/billar-frame.jpg",
            ]}
          />
        </section>
      </Container>
      <HomeMarquee />
      <Container maxW={"container.xl"} className="mt-32 mb-96">
        <h1 className="font-inter font-bold text-2xl lg:text-6xl lg:py-3 md:px-40 text-center mb-5">
          Pricing
        </h1>
        <p className="text-center lg:text-xl font-inter">
          Price list untuk memesan jasa editing pada bluprint
        </p>
        <div className="flex flex-col md:flex-row items-start lg:gap-16 xl:gap-24 lg:px-10 xl:px-20 gap-10 mt-20">
          <PriceCard type={PRICING_TYPE.hardfile} />
          <PriceCard type={PRICING_TYPE.softfile} />
        </div>
        <HomeCarousel />
      </Container>
      {!isMaxScreenWidthMd && <SocialMediaList />}
    </>
  );
};

export default Home;
