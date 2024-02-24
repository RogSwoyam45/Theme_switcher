import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './Context/Theme'
import Card from './Components/Card'
import Themebutton from './Components/Themebutton'


function App() {
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme = () => {setthemeMode("light")}

  const darkTheme = () => {setthemeMode("dark")}

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme , darkTheme}}>
      <h1 className='p-4 bg-green-200'>Themes Changer</h1>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Themebutton />
              </div>
              <div className="w-full max-w-sm mx-auto">
                 <Card />
              </div>
          </div>
      </div>

      
    </ThemeProvider>
  )
}

export default App
