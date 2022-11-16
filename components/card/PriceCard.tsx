import { Button, Card, CardBody } from "@chakra-ui/react";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface IProps {
  type: string;
}

export const PRICING_TYPE = {
  hardfile: "hardfile",
  softfile: "softfile",
};

const PriceCard: React.FC<IProps> = ({ type }) => {
  const description = `${
    type === PRICING_TYPE.hardfile
      ? "Hasil yang didapat berupa softfile yang akan dikirimkan lewat E-mail dan juga hardfile dalam bentuk hasil yang telah diberi bingkai."
      : "Hasil yang didapat berupa softfile yang akan dikirimkan lewat E-mail."
  }`;

  const benefit =
    type === PRICING_TYPE.hardfile ? (
      <>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Free revisi up to 3 kali
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Pengerjaan cepat
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Garansi uang kembali
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            File gambar kualitas HD
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Request ukuran bingkai
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Free ongkos kirim *
          </p>
        </div>
      </>
    ) : (
      <>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Free revisi up to 3 kali
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Pengerjaan cepat
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            Garansi uang kembali
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillCheckCircleFill className="text-blue-500 text-xl lg:text-2xl" />
          <p className="font-quicksand font-semibold lg:text-lg">
            File gambar kualitas HD
          </p>
        </div>
      </>
    );

  const price = `${type === PRICING_TYPE.hardfile ? "100.000" : "50.000"}`;

  return (
    <Card className="w-full px-4 h-fit lg:px-9 lg:py-5">
      <CardBody className="flex flex-col gap-3 px-4 ">
        <h1 className="font-quicksand font-bold text-xl lg:text-4xl lg:text-start text-center text-blue-500">
          {type === PRICING_TYPE.hardfile ? "Hardfile" : "Softfile"}
        </h1>
        <p className="font-quicksand text-sm text-center lg:text-base lg:text-start ">
          {description}
        </p>
        <div className="flex flex-col gap-2 mt-8">
          <span className="font-quicksand font-bold text-xs lg:text-sm text-gray-400">
            Startin at
          </span>
          <p className="font-quicksand font-bold text-3xl lg:text-4xl">
            Rp. {price}{" "}
            <span className="text-xs lg:text-sm  text-gray-400">/model</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-6">{benefit}</div>
        <Button variant={"solid"} colorScheme="facebook" className="mt-5">
          Pesan sekarang
        </Button>
      </CardBody>
    </Card>
  );
};

export default PriceCard;
