// Importing createContext and useContext from react library
import { createContext , useContext } from "react";

// Creating a new context with default values
export  const ThemeContext = createContext({
    themeMode : "light", // Default theme mode is set to "light"
    darkTheme : () => {}, // Placeholder function for setting dark theme
    lightTheme : () => {} // Placeholder function for setting light theme
});   

// Exporting the Provider component of ThemeContext
export const ThemeProvider = ThemeContext.Provider;

// Default export of a custom hook that provides the ThemeContext
export function useTheme() {
    return useContext(ThemeContext); // Using useContext to make ThemeContext available to the component that uses this hook
}



