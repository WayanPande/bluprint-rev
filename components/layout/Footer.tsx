import { Container, Divider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SocialMediaList from "../list/SocialMediaList";

const Footer = () => {
  return (
    <footer className="pt-4">
      <Container maxW={"container.xl"}>
        <div className="flex flex-col justify-center md:items-start items-center gap-10 mb-28">
          <div className="flex items-center gap-2">
            <Image
              src="/favicon.png"
              width={50}
              height={50}
              alt="logo bluprint"
              className="w-16 h-16"
            />
            <h1 className="font-bold text-5xl md:text-5xl font-inter dark:text-white">
              Bluprint.
            </h1>
          </div>
          <p className="font-quicksand font-medium text-xl md:text-2xl">
            Sajikan hadiah dengan Cinta & Cerita.
          </p>
        </div>
        <Divider className="border-2" />
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-3 py-7">
          <SocialMediaList isFooter={true} />
          <p className="font-quicksand font-medium text-center text-gray-400">
            @2022 Bluprint. All rights reserved.{" "}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
