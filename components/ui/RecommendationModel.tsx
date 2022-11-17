import { Button } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import RecommendationCarousel from "../carousel/RecommendationCarousel";

interface Iprops {
  title: string;
  desc?: string;
}

const RecommendationModel: React.FC<Iprops> = ({ title, desc }) => {
  return (
    <div
      className={`px-3 flex flex-col ${
        title === "Flower" ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-center lg:justify-around items-center`}
    >
      <div className="flex flex-col items-center justify-center gap-6 w-56">
        <div className="font-quicksand flex flex-col justify-center items-center gap-3">
          <h2 className="font-black text-2xl md:text-2xl lg:text-3xl font-quicksand dark:text-white">
            {"Model " + title}
          </h2>
          <p className="text-center text-sm lg:text-base">
            Model paling banyak dipesan dan terfavorit di bluprint
          </p>
        </div>
        <Button
          className="flex items-center w-fit"
          colorScheme={"facebook"}
          rightIcon={<IoIosArrowDroprightCircle className="text-[1.2em]" />}
        >
          Pesan
        </Button>
      </div>
      <div className="w-full lg:w-1/2  mb-32 flex items-center justify-center mt-5 lg:my-20">
        <RecommendationCarousel type={title.toLowerCase()} />
      </div>
    </div>
  );
};

export default RecommendationModel;
