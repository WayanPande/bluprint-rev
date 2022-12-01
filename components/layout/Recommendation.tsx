import { Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import RecommendationModel from "../ui/RecommendationModel";

const Recommendation = () => {
  return (
    <Container maxW={"container.xl"} className="pt-20 md:pt-32 pb-20">
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
          id="recommendation_page"
        >
          Recommendation.
        </h1>
        <p className="font-quicksand font-bold text-center text-sm">
          Model atau template direkomendasikan di bluprint
        </p>
      </div>

      <RecommendationModel key="Mozaik" title="Mozaik" />
      <RecommendationModel key="Flower" title="Flower" />
      <RecommendationModel key="Original" title="Original" />
    </Container>
  );
};

export default Recommendation;
