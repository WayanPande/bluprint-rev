import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Modalprops } from "./SearchModal";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

const MenuModal: React.FC<Modalprops> = ({ isOpen = false, closeHandler }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(7px)" />
      <ModalContent margin={".6rem"} borderRadius={"2xl"}>
        <IconButton
          className="w-fit mt-3 mr-3 self-end"
          rounded={"full"}
          onClick={closeHandler}
          icon={<IoClose />}
          aria-label="Close"
        />

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
              as={Link}
              href="/account/login"
            >
              Login
            </Button>
            <hr />
            <div className="flex items-center justify-between px-3">
              <h3 className="font-quicksand font-bold text-lg">Switch theme</h3>
              <ThemeButton />
            </div>
          </div>
        </ModalBody>
        <ModalFooter justifyContent={"center"} className="mt-10">
          <div className="flex items-center gap-2">
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
