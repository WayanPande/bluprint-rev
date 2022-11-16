import { Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HomeCardModel from "../card/HomeCardModel";

const Home = () => {
  return (
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
  );
};

export default Home;
