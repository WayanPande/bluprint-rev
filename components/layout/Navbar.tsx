import {
  Avatar,
  Button,
  Card,
  CardBody,
  Container,
  IconButton,
  Kbd,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SearchModal from "../ui/SearchModal";
import { AiOutlineMenu } from "react-icons/ai";
import MenuModal from "../ui/MenuModal";
import Link from "next/link";
import ThemeButton from "../ui/ThemeButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { signOut, User } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const searchModal = useDisclosure();
  const menuModal = useDisclosure();
  const [atTopOfPage, setAtTopOfPage] = useState(true);
  const [userData, setUserData] = useState<User | null | undefined>();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    setUserData(user);
    console.log(user);
  }, [user]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (
        key === "k" &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        e.preventDefault();
        if (searchModal.isOpen) {
          searchModal.onClose();
        } else {
          searchModal.onOpen();
        }
        return;
      }

      if (key === "esc" && searchModal.isOpen) {
        e.preventDefault();
        searchModal.onClose();
        return;
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [searchModal.isOpen]);

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
      className={`py-5 sticky top-0 z-30 w-full items-center ${
        !atTopOfPage ? "shadow-sm" : ""
      } bg-white transition-shadow duration-500 dark:bg-slate-800`}
    >
      <Container
        className="flex justify-between items-center md:gap-24 lg:gap-52 "
        maxW={"container.xl"}
      >
        <IconButton
          rounded={"full"}
          display={{ md: "none", base: "flex" }}
          onClick={menuModal.onOpen}
          icon={<AiOutlineMenu />}
          aria-label="Open menu"
        />

        <Link href={"/"} className="flex items-center cursor-pointer gap-2">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="logo bluprint"
            className="w-10 h-10"
          />
          <h1 className="font-bold text-2xl md:text-3xl font-inter dark:text-white">
            Bluprint.
          </h1>
        </Link>

        <IconButton
          rounded={"full"}
          onClick={searchModal.onOpen}
          display={{ md: "none", base: "flex" }}
          icon={<HiOutlineSearch />}
          aria-label="Search"
        />

        <Card
          size={"sm"}
          className="w-full cursor-pointer bg-white dark:bg-gray-700"
          rounded={"lg"}
          onClick={searchModal.onOpen}
          display={{ base: "none", md: "block" }}
        >
          <CardBody className="flex justify-between">
            <div className="flex items-center gap-4 text-slate-400">
              <HiOutlineSearch size={"1.5em"} />
              <p className="font-semibold font-quicksand">Cari template</p>
            </div>
            <Kbd className="dark:bg-gray-700 dark:text-slate-400 dark:border-gray-500">
              Ctrl + K
            </Kbd>
          </CardBody>
        </Card>

        <div className="hidden md:flex gap-3 md:items-center">
          <ThemeButton />

          {!userData && (
            <Button
              colorScheme={"facebook"}
              className="font-quicksand hidden dark:bg-white dark:text-gray-800 dark:hover:bg-gray-300"
              paddingInline={"5"}
              fontWeight={"bold"}
              as={Link}
              href="/account/login"
            >
              Login
            </Button>
          )}
          {userData && (
            <Menu>
              <MenuButton
                as={Avatar}
                aria-label="Options"
                src={
                  userData.photoURL ??
                  `https://avatars.dicebear.com/api/initials/${userData?.email}.svg`
                }
                variant="outline"
                className="cursor-pointer"
              />

              <MenuList className="font-inter">
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={() => signOut(auth)}>
                  <p className="text-red-500 font-bold flex items-center gap-3">
                    <BiLogOut className="text-xl" />
                    Log out
                  </p>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>
      </Container>
      <SearchModal
        isOpen={searchModal.isOpen}
        closeHandler={searchModal.onClose}
      />
      <MenuModal isOpen={menuModal.isOpen} closeHandler={menuModal.onClose} />
    </header>
  );
};

export default Navbar;