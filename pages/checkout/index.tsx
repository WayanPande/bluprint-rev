import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import Checkout from "../../components/layout/Checkout";
import Navbar from "../../components/layout/Navbar";
import { useThemeStore } from "../../store/theme-store";

const CheckoutPage = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      setColorMode("dark");
    } else {
      root.classList.remove("dark");
      setColorMode("light");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Bluprint.id</title>
      </Head>
      <Navbar />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
