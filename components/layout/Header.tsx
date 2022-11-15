import { Button, Card, CardBody, Container, Kbd, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SearchModal from "../ui/SearchModal";
import { AiOutlineMenu } from "react-icons/ai";
import MenuModal from "../ui/MenuModal";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [atTopOfPage, setAtTopOfPage] = useState(true);

  const searchModalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const menuModalHandler = () => {
    setIsMenuModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (
        key === "k" &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        e.preventDefault();
        setIsModalOpen((prevState) => !prevState);
        return;
      }

      if (key === "esc" && isModalOpen) {
        e.preventDefault();
        setIsModalOpen(false);
        return;
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 0) {
        setAtTopOfPage(false);
      } else {
        setAtTopOfPage(true);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`py-5 sticky top-0 z-30 w-full ${
        !atTopOfPage ? "shadow-sm" : ""
      } bg-white transition-shadow duration-500`}
    >
      <Container
        className="flex justify-between items-center md:gap-24 lg:gap-52 "
        maxW={"container.xl"}
      >
        <Button
          rounded={"full"}
          display={{ md: "none", base: "flex" }}
          onClick={menuModalHandler}
        >
          <AiOutlineMenu />
        </Button>

        <Link href={"/"} className="flex items-center cursor-pointer">
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
        </Link>

        <Button
          rounded={"full"}
          onClick={searchModalHandler}
          display={{ md: "none", base: "flex" }}
        >
          <HiOutlineSearch />
        </Button>

        <Card
          size={"sm"}
          className="w-full cursor-pointer"
          rounded={"lg"}
          onClick={searchModalHandler}
          display={{ base: "none", md: "block" }}
        >
          <CardBody className="flex justify-between">
            <div className="flex items-center gap-4 text-slate-400">
              <HiOutlineSearch size={"1.5em"} />
              <p className="font-semibold font-quicksand">Cari template</p>
            </div>
            <Kbd>Ctrl + K</Kbd>
          </CardBody>
        </Card>

        <Button
          colorScheme={"facebook"}
          className="font-quicksand hidden"
          display={{ base: "none", md: "flex" }}
          paddingInline={"7"}
        >
          Login
        </Button>
      </Container>
      <SearchModal isOpen={isModalOpen} closeHandler={searchModalHandler} />
      <MenuModal isOpen={isMenuModalOpen} closeHandler={menuModalHandler} />
    </header>
  );
};

export default Header;
