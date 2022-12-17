import { useColorMode } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Register from "../../components/layout/Register";
import { useThemeStore } from "../../store/theme-store";

const RegisterPage: NextPage = () => {
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
      <Register />
    </>
  );
};

export default RegisterPage;
