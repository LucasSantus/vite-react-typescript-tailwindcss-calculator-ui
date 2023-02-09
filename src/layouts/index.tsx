import React, { createContext, FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface Theme {
  backgroundColor: string;
  textColor: string;
}

const themes: { [key: string]: Theme } = {
  blue: {
    backgroundColor: "bg-blue-500",
    textColor: "text-black",
  },
  green: {
    backgroundColor: "bg-green-500",
    textColor: "text-black",
  },
  red: {
    backgroundColor: "bg-red-500",
    textColor: "text-black",
  },
  yellow: {
    backgroundColor: "bg-yellow-500",
    textColor: "text-black",
  },
};

interface ThemeContextProps {
  theme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.blue,
  setTheme: () => {},
});

const App: React.FC = () => {
  const [themeName, setThemeName] = useState(
    localStorage.getItem("selectedTheme") || "blue"
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", themeName);
  }, [themeName]);

  const setSelectedTheme = (selectedTheme: string) => {
    if (themes[selectedTheme]) {
      setThemeName(selectedTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], setTheme: setSelectedTheme }}
    >
      <div className="flex h-screen">
        <div
          className={`w-1/2 h-full ${themes[themeName].backgroundColor} ${themes[themeName].textColor}`}
        >
          <h1 className="text-5xl">Hello World!</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <h2 className="text-xl">Select your theme:</h2>
          <div className="flex flex-wrap">
            {Object.keys(themes).map((themeKey) => (
              <div
                key={themeKey}
                className={`w-1/2 p-4 rounded-lg hover:shadow-lg cursor-pointer ${
                  themeName === themeKey ? "shadow-lg" : ""
                }`}
                style={{ backgroundColor: themes[themeKey].backgroundColor }}
                onClick={() => setSelectedTheme(themeKey)}
                aria-label={`Select ${themeKey} theme`}
              >
                <p
                  className={`${themes[themeKey].textColor} text-xl font-bold`}
                >
                  {themeKey}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

export const Layout: FC = () => {
  return (
    <div className="flex w-screen h-screen ">
      <div className="w-screen">
        {/* <ThemesMode /> */}
        {/* <Header /> */}
        <App />
        <Outlet />
      </div>
    </div>
  );
};
