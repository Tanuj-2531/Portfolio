import React, { createContext, useEffect, useState } from 'react'

export const ThemeDataContext = createContext()
const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(()=>{
      return localStorage.getItem('theme') || 'light'
    })

    useEffect(()=>{
      localStorage.setItem('theme', theme)
    }, [theme])
  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext