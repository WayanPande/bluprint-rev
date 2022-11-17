import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../../components/layout/Footer";
import Recommendation from "../../components/layout/Recommendation";
import { useThemeStore } from "../../store/theme-store";

const RecommendationPage = () => {
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
      <Recommendation />
      <Footer />
    </>
  );
};

export default RecommendationPage;
