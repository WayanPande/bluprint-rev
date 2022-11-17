import React from "react";
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "@chakra-ui/react";

interface Iprops {
  type: string;
}

const RecommendationCarousel: React.FC<Iprops> = ({ type }) => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");
  const [isScreenWidthLg] = useMediaQuery("(min-width: 1440px)");

  const imgUrl = () => {
    switch (type) {
      case "mozaik":
        return "/image/mozaik/rich-brian.jpg";
      case "flower":
        return "/image/flower/thofu.png";
      case "original":
        return "/image/original/billar.jpg";
      default:
        return "/image/mozaik/rich-brian.jpg";
    }
  };

  const loop = () => {
    let data: React.ReactElement<SwiperSlideProps>[] = [];
    for (let i = 0; i < 4; i++) {
      data.push(
        <SwiperSlide className="flex justify-center items-center">
          <div className="shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-56 w-56 xl:h-[16.5rem] xl:w-[16.5rem] flex justify-center items-center">
            <div className="bg-white h-48 w-48 xl:h-[14.5rem] xl:w-[14.5rem] flex justify-center items-center shadow-inner">
              <div className="shadow-frame flex justify-center p-2 lg:p-4 xl:p-7">
                <Image
                  src={imgUrl()}
                  width={130}
                  height={130}
                  alt="rich brian"
                />
              </div>
            </div>
          </div>
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
