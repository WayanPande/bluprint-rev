import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";

interface Iprops {
  isOpen: boolean;
  closeHandler: () => void;
}

const SearchModal: React.FC<Iprops> = ({ isOpen = false, closeHandler }) => {
  return (
    <Modal isOpen={isOpen} size={"xl"} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent className="py-3">
        <ModalBody className="flex items-center gap-4">
          <HiOutlineSearch size={"1.5em"} className="text-slate-400" />
          <Input
            variant="unstyled"
            placeholder="Cari template"
            className="font-medium font-inter"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
