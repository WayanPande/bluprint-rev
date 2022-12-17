import { useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import Login from "../../components/layout/Login";
import Navbar from "../../components/layout/Navbar";
import { useThemeStore } from "../../store/theme-store";

const LoginPage: NextPage = () => {
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
      <Navbar />
      <Login />
    </>
  );
};

export default LoginPage;
