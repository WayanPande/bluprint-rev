import { Card, CardBody, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  type: string;
  img: string[];
}

const HomeCardModel: React.FC<IProps> = ({ type, img }) => {
  return (
    <Card
      as={Link}
      cursor={"pointer"}
      className="group md:w-56 lg:w-72 xl:w-96 hover:shadow-model transition-all"
      href={`/model/${type.toLowerCase()}`}
    >
      <CardBody className="overflow-visible">
        <div className="lg:h-64 xl:h-80 object-contain overflow-visible">
          <Image
            src={img[0]}
            alt={type}
            width={1024}
            height={1024}
            className="w-full h-full group-hover:scale-110 transition-all rounded-lg"
          />
        </div>
        <Heading size="md" mt={6}>
          {type}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default HomeCardModel;
