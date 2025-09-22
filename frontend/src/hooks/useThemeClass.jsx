import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

/**
 * Returns the correct class string based on the current theme.
 * @param {string} lightClass - Classes for light mode
 * @param {string} darkClass - Classes for dark mode
 * @returns string
 */
export function useThemeClass(lightClass, darkClass) {
  const { theme } = useContext(ThemeContext);
  return theme === "light" ? lightClass : darkClass;
}
