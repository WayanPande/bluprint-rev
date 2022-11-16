import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { GiPolarStar } from "react-icons/gi";

const HomeMarquee = () => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 48em)");

  return (
    <Marquee className="bg-blue-400 py-3 my-10" gradient={false}>
      <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
        Murah
      </p>
      <GiPolarStar className="text-yellow-300 text-center w-full" size={25} />
      <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
        Mudah
      </p>
      <GiPolarStar className="text-yellow-300 text-center w-full" size={25} />
      <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
        Menarik
      </p>
      <GiPolarStar className="text-yellow-300 text-center w-full" size={25} />
      {isScreenWidthMd && (
        <>
          <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
            Murah
          </p>
          <GiPolarStar
            className="text-yellow-300 text-center w-full"
            size={25}
          />
          <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
            Mudah
          </p>
          <GiPolarStar
            className="text-yellow-300 text-center w-full"
            size={25}
          />
          <p className="text-white font-quicksand font-bold lg:text-2xl w-full text-center">
            Menarik
          </p>
          <GiPolarStar
            className="text-yellow-300 text-center w-full"
            size={25}
          />
        </>
      )}
    </Marquee>
  );
};

export default HomeMarquee;
