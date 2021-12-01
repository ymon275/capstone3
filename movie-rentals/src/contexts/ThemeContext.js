import React, { useContext } from "react";
const ThemeContext = React.createContext("light");

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
