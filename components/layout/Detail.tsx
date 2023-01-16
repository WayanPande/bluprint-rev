import {
  Button,
  Container,
  Tooltip,
  useControllableState,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import SimilarArtsCarousel from "../carousel/SimilarArtsCarousel";

interface IProps {
  type: string;
  name: string;
}

const Detail: React.FC<IProps> = ({ type, name }) => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");
  const [isFavorite, setIsFavorite] = useControllableState({
    defaultValue: false,
  });

  const router = useRouter();

  const closeButtonHandler = () => {
    router.back();
  };

  return (
    <Container
      maxW={"container.xl"}
      className="flex flex-col items-center gap-5 mb-56"
    >
      <div className="mx-10 flex flex-col items-center h-fit w-full  lg:justify-evenly lg:gap-32">
        <div className="absolute bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg w-11/12 h-[28rem] lg:h-[100vh] lg:rounded-2xl" />
        <div className="flex justify-between w-full items-center md:px-10 md:pt-5 px-3 pt-3 relative z-[25]">
          <button
            onClick={closeButtonHandler}
            className="p-3 bg-white/30 rounded-full text-white hover:scale-110 hover:shadow-md active:shadow-lg transition-transform active:scale-125"
          >
            <AiOutlineClose size={isScreenWidthMd ? 25 : 20} />
          </button>

          <button
            className="p-3 bg-white/30 rounded-full text-white block lg:hidden hover:scale-110 hover:shadow-md active:shadow-lg transition-transform active:scale-125"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <AiFillHeart size={20} />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </button>
        </div>
        <div className="h-full lg:px-10 xl:px-0 relative z-[25] flex flex-col items-center lg:flex-row-reverse lg:justify-evenly w-full">
          <div className="flex gap-3 justify-center lg:items-start items-center flex-col pb-10 text-white lg:gap-3 xl:gap-5 lg:w-1/2">
            <div className="flex justify-between lg:w-full">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
                {type}
              </h1>
              <Tooltip label="Add to favorite" aria-label="A tooltip">
                <button
                  className="p-3 bg-white/30 rounded-full text-white hidden lg:block hover:scale-110 hover:shadow-md active:shadow-lg transition-transform active:scale-125"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  {isFavorite ? (
                    <AiFillHeart size={25} />
                  ) : (
                    <AiOutlineHeart size={25} />
                  )}
                </button>
              </Tooltip>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
              {name}
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-white/70">
              Starting at
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">
              Rp. 50.000{" "}
              <span className="text-xs md:text-sm lg:text-base text-white/70">
                /model
              </span>
            </p>
            <p className="text-xs md:text-base lg:text-xl lg:text-start text-center">
              Kumpulkan semua cerita dan kenanganmu terhadap seseorang dalam
              satu hadiah.
            </p>
            <Button
              colorScheme={"facebook"}
              size={`${isScreenWidthMd ? "md" : "sm"}`}
              className="lg:w-full"
              as={Link}
              href="/checkout"
            >
              Pesan
            </Button>
          </div>
          <Image
            src={`/image/${type}/${name}.png`}
            width={500}
            height={500}
            alt={`gambar ${name}`}
            className="bg-white w-80 lg:w-[22rem] xl:w-[25rem] z-[25] rounded-xl shadow-md"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center gap-10 mt-56 lg:flex-row-reverse lg:mt-52 lg:justify-evenly mb-32 xl:mb-44 xl:mt-60 ">
        <div className="flex flex-col items-center md:flex-row-reverse justify-around">
          <Image
            src="/image/mozaik/rich-brian-frame.jpg"
            width={1024}
            height={1024}
            alt={` frame`}
            className="rounded-lg shadow-md h-80 w-80 object-cover mt-10 lg:mt-0 xl:h-[25rem] xl:w-[25rem]"
          />
        </div>
        <div className="flex flex-col gap-5 mx-5 md:w-1/3">
          <h1 className="font-bold lg:text-2xl">
            Model juga dapat disimpan kedalam bingkai 🖼️
          </h1>
          <p className="lg:text-xl">
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
      <div className="flex flex-col w-full items-center">
        <h1 className="font-bold text-2xl lg:text-4xl">Similar art's</h1>
        <div className="w-full lg:w-full  flex items-center justify-center mt-5 xl:my-20">
          <SimilarArtsCarousel type={type} />
        </div>
      </div>
    </Container>
  );
};

export default Detail;
