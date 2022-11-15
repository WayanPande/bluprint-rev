import { Button, Card, CardBody, Container, Kbd, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SearchModal from "../ui/SearchModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "/") return;
      e.preventDefault();
      setIsModalOpen((prevState) => !prevState);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <header className="py-5">
      <Container
        className="flex justify-between items-center gap-52"
        maxW={"container.xl"}
      >
        <div className="flex items-center">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="logo bluprint"
          />
          <h1 className="font-bold text-3xl font-inter">Bluprint.</h1>
        </div>
        <Card
          size={"sm"}
          className="w-full cursor-pointer"
          rounded={"lg"}
          onClick={modalHandler}
        >
          <CardBody className="flex justify-between">
            <div className="flex items-center gap-4 text-slate-400">
              <HiOutlineSearch size={"1.5em"} />
              <p className="font-semibold font-quicksand">Cari template</p>
            </div>
            <Kbd className="w-7 flex justify-center font-inter font-bold">
              /
            </Kbd>
          </CardBody>
        </Card>
        <Button colorScheme={"facebook"} className="font-quicksand">
          Login
        </Button>
      </Container>
      <SearchModal isOpen={isModalOpen} closeHandler={modalHandler} />
    </header>
  );
};

export default Header;
