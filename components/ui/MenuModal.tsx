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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const MenuModal: React.FC<Modalprops> = ({ isOpen = false, closeHandler }) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const logoutHandler = () => {
    signOut(auth);
    closeHandler();
  };

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
              variant={router.pathname === "/model/[type]" ? "solid" : "ghost"}
              fontWeight={"bold"}
              justifyContent={"flex-start"}
              className={"font-quicksand"}
              as={Link}
              href="/model/mozaik"
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
            {user && (
              <>
                <Button
                  colorScheme="facebook"
                  variant={
                    router.pathname === "/account/[slug]" ? "solid" : "ghost"
                  }
                  fontWeight={"bold"}
                  justifyContent={"flex-start"}
                  className={"font-quicksand"}
                  as={Link}
                  href="/account/overview"
                >
                  Profile
                </Button>
                <hr />
                <Button
                  colorScheme="facebook"
                  variant={
                    router.pathname === "/recommendation" ? "solid" : "ghost"
                  }
                  fontWeight={"bold"}
                  justifyContent={"flex-start"}
                  className={"font-quicksand"}
                  onClick={closeHandler}
                  as={Link}
                  href="/recommendation"
                >
                  Recommendation
                </Button>
                <hr />
                <Button
                  colorScheme="facebook"
                  variant={router.pathname === "/favorite" ? "solid" : "ghost"}
                  fontWeight={"bold"}
                  justifyContent={"flex-start"}
                  className={"font-quicksand"}
                  as={Link}
                  href="/favorite"
                >
                  Favorite
                </Button>
                <hr />
              </>
            )}

            {!user && (
              <Button
                colorScheme="facebook"
                variant={
                  router.pathname === "/account/login" ? "solid" : "ghost"
                }
                fontWeight={"bold"}
                justifyContent={"flex-start"}
                className={"font-quicksand"}
                onClick={closeHandler}
                as={Link}
                href="/account/login"
              >
                Login
              </Button>
            )}
            {user && (
              <Button
                colorScheme="red"
                variant="ghost"
                fontWeight={"bold"}
                justifyContent={"flex-start"}
                className={"font-quicksand"}
                leftIcon={<BiLogOut className="text-xl" />}
                onClick={logoutHandler}
              >
                Log out
              </Button>
            )}
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
