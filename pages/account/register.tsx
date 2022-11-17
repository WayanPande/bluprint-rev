import { useColorMode } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect } from "react";
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
      <Register />
    </>
  );
};

export default RegisterPage;
