import { Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { mozaikData } from "../../util/data";
import ModelFrame from "../card/ModelFrame";

const Favorite = () => {
  const tempData = mozaikData;

  return (
    <Container maxW={"container.xl"} className="mt-32 mb-52">
      <div className="flex flex-col justify-center items-center gap-2 mb-20">
        <Image
          src="/favicon.png"
          width={300}
          height={300}
          alt="logo bluprint"
          className="w-16 h-16"
        />
        <h1
          className="font-bold text-2xl md:text-3xl font-inter dark:text-white"
          id="favorite_page"
        >
          Favorite
        </h1>
        <p className="font-quicksand font-bold text-center text-sm">
          Model atau template yang anda sukai
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between items-center gap-10">
        {tempData.img.map((image) => (
          <ModelFrame url={image} />
        ))}
      </div>
    </Container>
  );
};

export default Favorite;
