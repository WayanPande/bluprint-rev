import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineGift, AiOutlineHeart } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";

const HomeCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-40 mt-32"
    >
      <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-3">
          <FaRegSmile className="text-4xl text-yellow-500" />
          <h1 className="font-quicksand font-bold ">Art to Spread Joy</h1>
          <p className="font-quicksand ">We hope we made you smile today</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-3">
          <AiOutlineGift className="text-4xl text-green-500" />
          <h1 className="font-quicksand font-bold ">The Perfect Gift</h1>
          <p className="font-quicksand ">For all occasions, trust us</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-3">
          <IoIosPricetag className="text-4xl text-pink-500" />
          <h1 className="font-quicksand font-bold ">Dirt Cheap</h1>
          <p className="font-quicksand ">Cheapest one in the wild</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-3">
          <AiOutlineHeart className="text-4xl text-red-500" />
          <h1 className="font-quicksand font-bold ">Made with Love</h1>
          <p className="font-quicksand ">All orders are packed with love</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
