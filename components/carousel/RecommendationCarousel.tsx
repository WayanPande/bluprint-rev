import React from "react";
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "@chakra-ui/react";
import ModelFrame from "../card/ModelFrame";

interface Iprops {
  type: string;
}

const RecommendationCarousel: React.FC<Iprops> = ({ type }) => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");
  const [isScreenWidthLg] = useMediaQuery("(min-width: 1440px)");

  const imgUrl = () => {
    switch (type) {
      case "mozaik":
        return "/image/mozaik/rich-brian.png";
      case "flower":
        return "/image/flower/thofu.png";
      case "original":
        return "/image/original/billar.png";
      default:
        return "/image/mozaik/rich-brian.png";
    }
  };

  const loop = () => {
    let data: React.ReactElement<SwiperSlideProps>[] = [];
    for (let i = 0; i < 4; i++) {
      data.push(
        <SwiperSlide
          className="flex justify-center items-center"
          key={`${type} ${i}`}
        >
          <ModelFrame url={imgUrl()} alt={type} key={`${type} ${i}`} />
        </SwiperSlide>
      );
    }
    return data;
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={isScreenWidthLg ? -10 : 10}
      slidesPerView={isScreenWidthMd ? 2 : 1}
      autoplay
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-[20rem] lg:h-[24rem] items-center cursor-grab active:cursor-grabbing"
    >
      {loop()}
    </Swiper>
  );
};

export default RecommendationCarousel;
