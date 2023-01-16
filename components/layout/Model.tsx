import { Button, Container, Select, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ModelData } from "../../util/data";
import ModelFrame from "../card/ModelFrame";
import HomeCarousel from "../carousel/HomeCarousel";

const Model: React.FC<ModelData> = ({ type, img, imgFrame }) => {
  const router = useRouter();
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push("/model/" + e.target.value);
  };

  return (
    <Container maxW={"container.xl"} className="pt-20 md:pt-32 pb-20 ">
      <div className="flex flex-col justify-center items-center gap-5 mb-20">
        <div className="flex items-center">
          <Image
            src="/favicon.png"
            width={300}
            height={300}
            alt="logo bluprint"
            className="w-10 h-10 md:w-20 md:h-20"
          />
          <h1 className="font-bold text-2xl md:text-6xl dark:text-white capitalize">
            {type}
          </h1>
        </div>
        <Select
          width={"fit-content"}
          size={`${isScreenWidthMd ? "lg" : "sm"}`}
          variant="filled"
          colorScheme={"facebook"}
          onChange={selectChangeHandler}
          value={type}
        >
          <option value="mozaik">Mozaik</option>
          <option value="flower">Flower</option>
          <option value="original">Original</option>
        </Select>
        {/* <p className="font-quicksand font-bold text-center text-sm lg:text-base xl:text-xl">
          Model atau template direkomendasikan di bluprint
        </p> */}
      </div>

      <div className="flex flex-col justify-between items-center gap-5 md:flex-row flex-wrap">
        {img.map((url, index) => (
          <ModelFrame
            url={url}
            alt={url}
            key={index}
            className={`${
              index < 2 && !isScreenWidthMd ? "order-1" : "order-3"
            }`}
          />
        ))}
        <div className="flex flex-col items-center justify-center gap-6 w-56 xl:w-[37rem] lg:px-28 xl:px-36 lg:w-[30rem] my-20 order-2">
          <div className="font-quicksand flex flex-col justify-center items-center gap-3">
            <h2 className="font-black text-2xl md:text-2xl lg:text-3xl font-quicksand dark:text-white capitalize">
              {"Model " + type}
            </h2>
            <p className="text-center text-sm lg:text-base xl:text-xl">
              Model paling banyak dipesan dan terfavorit di bluprint
            </p>
          </div>
          <Button
            className="flex items-center w-fit"
            colorScheme={"facebook"}
            rightIcon={<IoIosArrowDroprightCircle className="text-[1.2em]" />}
            size={`${isScreenWidthMd ? "lg" : "sm"}`}
            as={Link}
            href="/checkout"
          >
            Pesan
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row-reverse mt-20 xl:mt-56 justify-around">
        <Image
          src={imgFrame}
          width={1024}
          height={1024}
          alt={`${type} frame`}
          className="rounded-lg shadow-md h-56 w-56 object-cover md:h-[18rem] md:w-[18rem] lg:h-[20rem] lg:w-[20rem] xl:h-[25rem] xl:w-[25rem]"
        />
        <div className="flex flex-col my-20 gap-5 mx-5 md:w-1/2 xl:w-1/3">
          <h1 className="font-bold md:text-base lg:text-2xl">
            Model juga dapat disimpan kedalam bingkai 🖼️
          </h1>
          <p className="md:text-base lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit doloribus beatae voluptatem quisquam aut magni unde
            cum adipisci dolore quaerat!
          </p>
          <Button
            className="flex items-center w-fit"
            colorScheme={"facebook"}
            rightIcon={<IoIosArrowDroprightCircle className="text-[1.2em]" />}
            size={`${isScreenWidthMd ? "lg" : "sm"}`}
            as={Link}
            href="/checkout"
          >
            Pesan
          </Button>
        </div>
      </div>
      <Container maxW={"container.xl"} className="mb-56 mt-60">
        <HomeCarousel />
      </Container>
    </Container>
  );
};

export default Model;
