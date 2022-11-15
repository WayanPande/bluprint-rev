import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { Modalprops } from "./SearchModal";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const MenuModal: React.FC<Modalprops> = ({ isOpen = false, closeHandler }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeHandler}
      size={"full"}
      closeOnOverlayClick={false}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(7px) hue-rotate(90deg)"
      />
      <ModalContent margin={".6rem"} borderRadius={"2xl"}>
        <button
          className="bg-blue-300 w-fit p-3 mt-3 ml-3 rounded-full"
          onClick={closeHandler}
        >
          <IoClose />
        </button>
        <ModalBody mt={"1rem"}>
          <div className="w-full h-32 rounded-md bg-blue-300 mb-5"></div>
          <div className="flex flex-col justify-center gap-3">
            <Button
              colorScheme="facebook"
              variant="ghost"
              fontWeight={"bold"}
              justifyContent={"flex-start"}
              className={"font-quicksand"}
            >
              All template
            </Button>
            <hr />
            <Button
              colorScheme="facebook"
              variant="ghost"
              fontWeight={"bold"}
              justifyContent={"flex-start"}
              className={"font-quicksand"}
            >
              About
            </Button>
            <hr />
            <Button
              colorScheme="facebook"
              variant="ghost"
              fontWeight={"bold"}
              justifyContent={"flex-start"}
              className={"font-quicksand"}
            >
              Login
            </Button>
          </div>
        </ModalBody>
        <ModalFooter justifyContent={"center"}>
          <div className="flex items-center">
            <Image
              src="/favicon.png"
              width={50}
              height={50}
              alt="logo bluprint"
              className="w-10 h-10"
            />
            <h1 className="font-bold text-2xl md:text-3xl font-inter">
              Bluprint.
            </h1>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MenuModal;
