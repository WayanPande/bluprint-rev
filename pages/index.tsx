import { useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import { useThemeStore } from "../store/theme-store";

const Home: NextPage = () => {
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
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white dark:bg-slate-800">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="font-bold text-5xl mb-[4rem] dark:text-white">
            Bluprint.id
          </h1>
        </main>
      </div>
    </>
  );
};

export default Home;
