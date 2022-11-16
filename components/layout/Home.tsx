import { Container, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HomeCardModel from "../card/HomeCardModel";
import HomeMarquee from "../marquees/HomeMarquee";

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
      <Container maxW={"container.xl"}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Container>
    </>
  );
};

export default Home;
