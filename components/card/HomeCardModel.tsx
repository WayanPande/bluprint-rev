import { Card, CardBody, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface IProps {
  type: string;
  img: string[];
}

const HomeCardModel: React.FC<IProps> = ({ type, img }) => {
  return (
    <Card maxW="sm" cursor={"pointer"} className="group">
      <CardBody>
        <div className="lg:h-80 object-contain">
          <Image
            src={img[0]}
            alt="Green double couch with wooden legs"
            width={1024}
            height={1024}
            className="group-hover:opacity-0 group-hover:hidden"
          />
          <Image
            src={img[1]}
            width={1024}
            height={1024}
            alt=""
            className="opacity-0 hidden group-hover:opacity-100 group-hover:block object-contain w-full h-full"
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