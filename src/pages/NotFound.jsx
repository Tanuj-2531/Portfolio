import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeDataContext } from '../Context/ThemeContext';

const NotFound = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className={`${theme === 'dark' ? 'bg-[#252526] text-white' : 'bg-[#efeee8] text-[#111]'} flex flex-col min-h-screen items-center justify-center px-4 py-8 lg:px-0 lg:py-0`}>
      <div className={`${theme === 'dark' ? 'shadow-white/30' : 'shadow-black/30'} w-full max-w-xl lg:max-w-2xl mx-auto text-center shadow-lg rounded-2xl`}>
        <div className={`${theme === 'dark' ? 'invert hue-rotate-180 ' : ''} flex h-100 items-center justify-center bg-center bg-no-repeat object-cover rounded-2xl`} style={{
            backgroundImage:
              "url('/404.gif')",
          }}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-70 font-serif text-black">404</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-2xl md:text-3xl font-extrabold mt-8">Looks like you're lost</h3>
        <p className="mt-2 text-sm md:text-base text-gray-500 font-semibold">The page you are looking for is not available!</p>
        <Link to="/" className="mt-4 rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 hover:scale-110 font-serif">Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound