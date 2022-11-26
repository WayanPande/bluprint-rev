import React from "react";
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "@chakra-ui/react";
import ModelFrame from "../card/ModelFrame";
import {
  flowerData,
  ModelData,
  mozaikData,
  originalData,
} from "../../util/data";

interface Iprops {
  type: string;
}

const SimilarArtsCarousel: React.FC<Iprops> = ({ type }) => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");
  const [isScreenWidthLg] = useMediaQuery("(min-width: 1440px)");

  const data = () => {
    switch (type) {
      case "mozaik":
        return mozaikData;
      case "flower":
        return flowerData;
      case "original":
        return originalData;
      default:
        return mozaikData;
    }
  };

  const loop = () => {
    return data().img.map((url, i) => (
      <SwiperSlide
        className="flex justify-center items-center"
        key={`${type} ${i}`}
      >
        <ModelFrame url={url} alt={type} key={`${type} ${i}`} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={isScreenWidthLg ? -10 : 10}
      slidesPerView={isScreenWidthMd ? 4 : 1}
      autoplay
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-[20rem] lg:h-[24rem] items-center cursor-grab active:cursor-grabbing"
    >
      {loop()}
    </Swiper>
  );
};

export default SimilarArtsCarousel;
