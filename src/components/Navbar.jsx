import React, { useContext, useState } from 'react'
import { Sun, Moon } from 'lucide-react';
import { ThemeDataContext } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log(theme);
  }
  return (
    <div className={`${theme === 'dark' ? 'bg-[#1e1e1e]/30 text-white' : 'bg-[#e5e3d9]/30 text-[#111]'} backdrop-blur-md shadow-md h-15 top-4 left-25 right-25 flex items-center justify-between fixed z-50 rounded-full`}>
        <div className='p-15 flex items-center'>
            <img className={`h-25 ${theme === "dark" ? "invert-0" : "invert"}`} src="/logo.png" alt="" />
            <h1 className='text-2xl font-bold'>Tanuj Agarwal</h1>
        </div>
        <div className='flex gap-10 m-15 font-semibold'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
            <button className='cursor-pointer' onClick={changeTheme}>{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</button>
        </div>
    </div>
  )
}

export default Navbar