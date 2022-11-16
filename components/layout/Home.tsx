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
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineGift, AiOutlineHeart } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";
import SocialMediaList from "../list/SocialMediaList";

const Home = () => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      <Container maxW={"container.xl"}>
        <section className="flex flex-col items-center justify-center p-8 lg:p-32">
          <h1 className="font-inter font-bold text-2xl lg:text-6xl lg:py-3 md:px-40 text-center">
            Sajikan hadiah dengan{" "}
            <span className="text-fuchsia-900">Cinta & Cerita.</span>
          </h1>
          <Image
            src="/image/hero.png"
            width={3000}
            height={3000}
            className="w-full md:w-10/12"
            alt="raffi nagita original"
          />
        </section>

        {isScreenWidthMd && (
          <div className="h-[150vh]">
            <div className="rounded-full w-96 h-96 bg-yellow-300 absolute right-80  -z-10"></div>
            <h1 className="font-quicksand font-bold text-[10rem] text-slate-700/30  text-center">
              Bluprint
            </h1>
            <video
              width="340"
              autoPlay
              muted
              loop
              className="absolute left-1/2 right-1/2 -translate-x-1/2 shadow-sm"
            >
              <source src="/video/DeniSumargo.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        <h1 className="font-inter font-bold text-2xl lg:text-6xl lg:py-3 md:px-40 text-center mb-5">
          Model / Template Bluprint
        </h1>
        <section className="flex flex-col lg:flex-row items-center justify-center p-8 gap-7 lg:gap-9">
          <HomeCardModel
            type="Mozaik"
            key="Mozaik"
            img={[
              "/image/mozaik/rich-brian.jpg",
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
              "/image/original/billar.jpg",
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
        <p className="text-center font-inter">
          Price list untuk memesan jasa editing pada bluprint
        </p>
        <div className="flex flex-col md:flex-row items-end lg:gap-24 lg:px-20 gap-10 mt-20">
          <PriceCard type={PRICING_TYPE.hardfile} />
          <PriceCard type={PRICING_TYPE.softfile} />
        </div>
        {!isScreenWidthMd && <HomeCarousel />}
        {isScreenWidthMd && (
          <div className="flex justify-between mt-32">
            <div className="flex flex-col justify-center items-center gap-3">
              <FaRegSmile className="text-4xl text-yellow-500" />
              <h1 className="font-quicksand font-bold ">Art to Spread Joy</h1>
              <p className="font-quicksand ">We hope we made you smile today</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <AiOutlineGift className="text-4xl text-green-500" />
              <h1 className="font-quicksand font-bold ">The Perfect Gift</h1>
              <p className="font-quicksand ">For all occasions, trust us</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <IoIosPricetag className="text-4xl text-pink-500" />
              <h1 className="font-quicksand font-bold ">Dirt Cheap</h1>
              <p className="font-quicksand ">Cheapest one in the wild</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <AiOutlineHeart className="text-4xl text-red-500" />
              <h1 className="font-quicksand font-bold ">Made with Love</h1>
              <p className="font-quicksand ">All orders are packed with love</p>
            </div>
          </div>
        )}
      </Container>
      {isScreenWidthMd && <SocialMediaList />}
    </>
  );
};

export default Home;
