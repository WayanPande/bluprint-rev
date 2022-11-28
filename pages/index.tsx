import { useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Home from "../components/layout/Home";
import Navbar from "../components/layout/Navbar";
import { useThemeStore } from "../store/theme-store";

const HomePage: NextPage = () => {
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
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
