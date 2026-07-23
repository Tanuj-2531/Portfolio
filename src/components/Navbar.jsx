import React, { useContext, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeDataContext } from '../Context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  const [isOpen, setIsOpen] = useState(false)
  const hamBurger = () => {
    setIsOpen(prev => !prev)
  }
  const location = useLocation()
  const samePage = (section, text) => {
    return(
      location.pathname === '/' ? <a href={`#${section}`}>{text}</a> : <Link to={`/${section}`}>{text}</Link>
    )
  }

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className={`${theme === 'dark' ? 'bg-[#1e1e1e]/30 text-white' : 'bg-[#e5e3d9]/30 text-[#111]'} backdrop-blur-md shadow-md flex items-center justify-between z-50 rounded-full fixed h-15 top-4 left-15 right-15 md:left-25 md:right-25`}>
      <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='p-4 md:p-15 flex items-center'>
          <img className={`h-15 md:h-25 ${theme === "dark" ? "invert-0" : "invert"}`} src="/logo.png" alt="" />
          <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Tanuj Agarwal</h1>
      </Link>
      <div className='flex items-center gap-5 m-4 md:m-15 font-semibold'>
        <div className="hidden md:flex gap-10 font-semibold">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
          {samePage('about', 'About')}
          {samePage('project', 'Project')}
        </div>
        <button className='cursor-pointer' onClick={changeTheme}>{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</button>
        <button className="md:hidden cursor-pointer" onClick={hamBurger}>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {isOpen && (
        <div className={`${theme === 'dark' ? 'bg-[#1e1e1e]/80 text-white shadow-white/30' : 'bg-[#e5e3d9]/80 text-[#111] shadow-black/30'} absolute top-18 right-5 flex flex-col gap-4 p-5 rounded-xl shadow-lg font-extrabold md:hidden`}>
          <Link to="/" onClick={hamBurger}>Home</Link>
          {samePage("about", "About")}
          {samePage("project", "Project")}
        </div>
      )}
    </div>
  )
}

export default Navbar