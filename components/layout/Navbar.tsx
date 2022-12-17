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
  MenuGroup,
  MenuItem,
  MenuList,
  Tooltip,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SearchModal from "../ui/SearchModal";
import { AiFillLike, AiOutlineMenu } from "react-icons/ai";
import MenuModal from "../ui/MenuModal";
import Link from "next/link";
import ThemeButton from "../ui/ThemeButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { signOut, User } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  const searchModal = useDisclosure();
  const menuModal = useDisclosure();
  const [atTopOfPage, setAtTopOfPage] = useState(true);
  const [userData, setUserData] = useState<User | null | undefined>();
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [isScreenWidthMd] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setUserData(user);
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
        className={`flex justify-between items-center md:gap-14 ${
          userData ? "lg:gap-28" : "lg:gap-28 xl:gap-52"
        }`}
        maxW={"container.xl"}
      >
        <IconButton
          rounded={"full"}
          display={{ md: "none", base: "flex" }}
          onClick={menuModal.onOpen}
          icon={<AiOutlineMenu />}
          aria-label="Open menu"
        />

        <Link
          href={"/"}
          className="flex items-center cursor-pointer gap-2 md:gap-0"
        >
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="logo bluprint"
            className="w-10 h-10"
          />
          <h1 className="font-bold text-2xl lg:text-3xl font-inter dark:text-white">
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
          className="w-full cursor-pointer bg-white dark:bg-gray-700 "
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

        <div className="hidden md:flex gap-3 md:items-center ">
          <div className="flex">
            <ThemeButton />

            {userData && (
              <>
                <Tooltip label="Recommendation">
                  <IconButton
                    id="recommendation"
                    as={Link}
                    href="/recommendation"
                    padding="3"
                    colorScheme="gray"
                    disabled={router.pathname === "/recommendation"}
                    variant={"ghost"}
                    aria-label="recommendation button"
                    icon={<AiFillLike size={"1.5em"} />}
                  />
                </Tooltip>

                <Tooltip label="Favorite">
                  <IconButton
                    as={Link}
                    href="/favorite"
                    padding="3"
                    colorScheme="gray"
                    disabled={router.pathname === "/favorite"}
                    variant={"ghost"}
                    aria-label="favorite button"
                    icon={<MdFavorite size={"1.5em"} />}
                  />
                </Tooltip>
              </>
            )}
          </div>

          {!userData && (
            <Button
              colorScheme={"facebook"}
              className="font-quicksand hidden dark:bg-white dark:text-gray-800 dark:hover:bg-gray-300"
              paddingInline={isScreenWidthMd ? "4" : "5"}
              paddingBlock={isScreenWidthMd ? "5" : "6"}
              fontWeight={"bold"}
              as={Link}
              href="/account/login"
              size={isScreenWidthMd ? "sm" : "md"}
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
                <MenuGroup title={userData?.displayName ?? ""} id="popup_menu">
                  <MenuItem as={Link} href="/account/overview">
                    My Account
                  </MenuItem>
                  <MenuItem onClick={() => signOut(auth)}>
                    <p className="text-red-500 font-bold flex items-center gap-3">
                      <BiLogOut className="text-xl" />
                      Log out
                    </p>
                  </MenuItem>
                </MenuGroup>
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
