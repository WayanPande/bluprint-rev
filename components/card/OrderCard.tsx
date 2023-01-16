import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Iprops {
  price: string;
  type: string;
  img: string;
  status: string;
  icon: JSX.Element;
}

const OrderCard: React.FC<Iprops> = ({ price, img, status, type, icon }) => {
  return (
    <Card className={`border-2 cursor-pointer`}>
      <CardBody className="flex justify-evenly md:gap-10">
        <Image
          src={img}
          width={150}
          height={200}
          alt={type}
          className="h-full"
        />
        <div className="border border-gray-200 p-3 w-full flex flex-col gap-2 rounded-md">
          <div className="flex gap-3 items-center justify-between">
            <div>
              <p className="font-bold">{type}</p>
              <span className="text-xs">Softfile</span>
            </div>
            <span className="font-bold text-sm">Rp. {price}</span>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Status</p>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-200 flex justify-center items-center p-1">
                {icon}
              </div>
              <span className="text-sm font-semibold">{status}</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderCard;
