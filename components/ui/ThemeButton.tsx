import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { useThemeStore } from "../../store/theme-store";
import shallow from "zustand/shallow";
import { IoIosArrowDown } from "react-icons/io";

const ThemeButton = () => {
  const [darkMode, changeTheme] = useThemeStore(
    (state) => [state.darkMode, state.changeTheme],
    shallow
  );

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScreenWidthMd] = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  useEffect(() => {
    console.log(isScreenWidthMd);
  }, [isScreenWidthMd]);

  return (
    <Menu>
      {isScreenWidthMd && (
        <MenuButton as={Button} variant={"ghost"} colorScheme="gray">
          {isDarkMode ? (
            <MdLightMode size={"1.5em"} className="text-slate-400" />
          ) : (
            <MdModeNight size={"1.5em"} />
          )}
        </MenuButton>
      )}
      {!isScreenWidthMd && (
        <MenuButton
          as={Button}
          rightIcon={<IoIosArrowDown />}
          leftIcon={
            !isDarkMode ? (
              <MdLightMode size={"1.5em"} />
            ) : (
              <MdModeNight size={"1.5em"} />
            )
          }
        >
          <p className={`font-quicksand font-bold`}>
            {isDarkMode ? "Dark" : "Light"}
          </p>
        </MenuButton>
      )}
      <MenuList>
        <MenuItem className="gap-3" onClick={() => changeTheme(true)}>
          <MdLightMode
            size={"1.5em"}
            className={`${!isDarkMode && "text-violet-600"}`}
          />
          <p
            className={`${
              !isDarkMode && "text-violet-600"
            } font-quicksand font-bold`}
          >
            Light
          </p>
        </MenuItem>
        <MenuItem className="gap-3" onClick={() => changeTheme(false)}>
          <MdModeNight
            size={"1.5em"}
            className={`${isDarkMode && "text-violet-600"}`}
          />
          <p
            className={`${
              isDarkMode && "text-violet-600"
            } font-quicksand font-bold`}
          >
            Dark
          </p>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ThemeButton;
