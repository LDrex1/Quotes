import React, { useContext, useState } from "react";

const ThemeContest = React.createContext();

export const useTheme = () => useContext(ThemeContest);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme((prevtheme) => !prevtheme);

  return (
    <ThemeContest.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContest.Provider>
  );
}

export default ThemeProvider;
