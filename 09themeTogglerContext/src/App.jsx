import { useEffect, useState } from 'react'

import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/theme'
function App() {
  // Using the useState hook to manage the themeMode state
  const [themeMode , setThemeMode] = useState("dark");

  // Using the useState hook to manage the themeMode state
  const darkTheme = () => {
      setThemeMode("dark")

    } ;
  const lightTheme = () => {
    setThemeMode("light")
  };


   // Using the useEffect hook to update the class of the html element whenever themeMode changes
  useEffect(() => {
    document.querySelector("html").classList.remove("dark" , "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
     // Wrapping the component in the ThemeProvider and passing the themeMode and theme changing functions as value
    
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
    <div className='bg-white dark:bg-slate-600'>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </div>     
    </ ThemeProvider>
  )
}

export default App
