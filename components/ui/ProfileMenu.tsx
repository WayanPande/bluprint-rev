import { Button, Collapse, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  RiAccountPinBoxFill,
  RiHistoryLine,
  RiShoppingBag3Fill,
  RiSignalTowerFill,
} from "react-icons/ri";
import { auth } from "../../config/firebase";
import { ProfileType } from "../../pages/account/[slug]";

interface IProps {
  isOpen: boolean;
  onToggle: () => void;
  type: string;
}

const ProfileMenu: React.FC<IProps> = ({ isOpen, onToggle, type }) => {
  const [isScreenWidthMd] = useMediaQuery("(min-width: 1024px)");
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();

  const logoutHandler = async () => {
    await signOut();
    await router.replace("/");
  };

  return (
    <div className="flex flex-col gap-5 mt-12 lg:w-1/4">
      <div className="flex justify-between">
        {isScreenWidthMd ? (
          <Button variant={"ghost"}>
            <h1 className="font-bold">My Account</h1>
          </Button>
        ) : (
          <Button
            variant={"ghost"}
            rightIcon={
              isOpen ? (
                <IoIosArrowUp className="text-[1.2em]" />
              ) : (
                <IoIosArrowDown className="text-[1.2em]" />
              )
            }
            onClick={onToggle}
          >
            <h1 className="font-bold">My Account</h1>
          </Button>
        )}
        <Button variant={"outline"} colorScheme="red" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
      <Collapse in={isScreenWidthMd ? true : isOpen} animateOpacity>
        <div className="flex flex-col gap-5 p-3 bg-gray-100 rounded-xl">
          <Link
            href="/account/overview"
            className={`flex items-center w-full gap-3 p-3 font-bold bg-white  rounded-xl ${
              type === ProfileType.OVERVIEW &&
              "shadow-lg border-blue-400 border-2"
            }`}
          >
            <RiSignalTowerFill />
            <p>Overview</p>
          </Link>
          {/* <Link
            href="/account/products"
            className={`flex items-center w-full gap-3 p-3 font-bold bg-white  rounded-xl ${
              type === ProfileType.PRODUCTS &&
              "shadow-lg border-blue-400 border-2"
            }`}
          >
            <RiShoppingBag3Fill />
            <p>Shop</p>
          </Link> */}
          <Link
            href="/account/orders"
            className={`flex items-center w-full gap-3 p-3 font-bold bg-white  rounded-xl ${
              type === ProfileType.ORDERS &&
              "shadow-lg border-blue-400 border-2"
            }`}
          >
            <RiHistoryLine />
            <p>Order History</p>
          </Link>
          <Link
            href="/account/details"
            className={`flex items-center w-full gap-3 p-3 font-bold bg-white  rounded-xl ${
              type === ProfileType.DETAILS &&
              "shadow-lg border-blue-400 border-2"
            }`}
          >
            <RiAccountPinBoxFill />
            <p>Account Details</p>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default ProfileMenu;
