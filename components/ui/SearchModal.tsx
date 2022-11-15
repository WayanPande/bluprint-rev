import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Kbd,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";

export interface Modalprops {
  isOpen: boolean;
  closeHandler: () => void;
}

const SearchModal: React.FC<Modalprops> = ({
  isOpen = false,
  closeHandler,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      size={{ base: "sm", md: "xl" }}
      onClose={closeHandler}
    >
      <ModalOverlay
        bg="blackAlpha.200"
        backdropFilter="blur(6px) hue-rotate(90deg)"
      />
      <ModalContent className="py-3">
        <ModalBody className="flex items-center gap-4">
          <HiOutlineSearch size={"1.5em"} className="text-slate-400" />
          <Input
            variant="unstyled"
            placeholder="Cari template"
            className="font-medium font-inter"
          />
          <Kbd onClick={closeHandler} className="cursor-pointer">
            Esc
          </Kbd>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
