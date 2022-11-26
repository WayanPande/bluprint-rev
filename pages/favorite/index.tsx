import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import Favorite from "../../components/layout/Favorite";
import Footer from "../../components/layout/Footer";
import { useThemeStore } from "../../store/theme-store";

const FavoritePage = () => {
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
      <Favorite />
      <Footer />
    </>
  );
};

export default FavoritePage;
