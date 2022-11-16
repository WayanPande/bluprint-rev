import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface IProps {
  isFooter?: boolean;
}

const SocialMediaList: React.FC<IProps> = ({ isFooter = false }) => {
  const className = `${
    isFooter
      ? "justify-center flex text-gray-400"
      : "flex flex-col fixed top-1/2 left-3 text-gray-400 -translate-y-1/2 z-50"
  }`;

  return (
    <div className={className}>
      <Button
        as={Link}
        href="https://www.tiktok.com/@bluprinthink.id"
        target={"_blank"}
        className="p-3"
        colorScheme={"gray"}
        variant={"ghost"}
      >
        <FaTiktok />
      </Button>
      <Button
        as={Link}
        href="https://www.instagram.com/bluprint.id/"
        target={"_blank"}
        className="p-3"
        colorScheme={"gray"}
        variant={"ghost"}
      >
        <AiFillInstagram />
      </Button>
      <Button
        as={Link}
        href="https://www.facebook.com/bluprinthink/"
        target={"_blank"}
        className="p-3"
        colorScheme={"gray"}
        variant={"ghost"}
      >
        <FaFacebookF />
      </Button>
      <Button
        as={Link}
        href="https://api.whatsapp.com/send?phone=6281236360123"
        target={"_blank"}
        className="p-3"
        colorScheme={"gray"}
        variant={"ghost"}
      >
        <FaWhatsapp />
      </Button>
      <Button
        as={Link}
        href="https://youtube.com/channel/UC7Gf_4qmvSN4qiyOe4ZkAPg"
        target={"_blank"}
        className="p-3"
        colorScheme={"gray"}
        variant={"ghost"}
      >
        <AiFillYoutube />
      </Button>
    </div>
  );
};

export default SocialMediaList;
