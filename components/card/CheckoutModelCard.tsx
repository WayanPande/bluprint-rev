import { Card, CardBody, useRadio } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

// @ts-expect-error
const CheckoutModelCard = (props) => {
  const { img, ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <label
      {...htmlProps}
      className="cursor-pointer hover:scale-105 hover:shadow-md active:shadow-lg transition-transform"
    >
      <input {...getInputProps({})} hidden />
      <Card
        className={`border-2 ${state.isChecked && "border-blue-300"}`}
        {...getCheckboxProps()}
      >
        <CardBody>
          <Image
            src={`/image/template/${img}`}
            width={150}
            height={200}
            alt={img}
            className="w-full h-full"
          />
        </CardBody>
      </Card>
    </label>
  );
};

export default CheckoutModelCard;
