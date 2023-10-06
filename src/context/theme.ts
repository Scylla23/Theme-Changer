import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;


//This is a simple hook that will provide all the values inside the theme context 
//and we do not have to import multiple things in other components
//if not used then also fine
export default function useTheme(){
    return useContext(ThemeContext);
}