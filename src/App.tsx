import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [themeMode,setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  //theme swither in html 
  useEffect(() => {
    const htmlClasslist = document.querySelector('html')?.classList;
    htmlClasslist?.remove('light','dark');
    htmlClasslist?.add(themeMode);

  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme , darkTheme}}>
      <div className="flex items-center justify-center"></div>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
        <ThemeBtn/>
        <div className="w-full max-w-sm mx-auto"></div>
        <Card/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
