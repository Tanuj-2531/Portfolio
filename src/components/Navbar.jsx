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
    const classes = 'hover:underline hover:translate-y-0.5 transition-all duration-200'
    return(
      location.pathname === '/' ? <a href={`#${section}`} className={classes} onClick={() => setIsOpen(false)}>{text}</a> : <Link to={`/${section}`} className={classes} onClick={() => setIsOpen(false)}>{text}</Link>
    )
  }

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className={`${theme === 'dark' ? 'bg-[#1e1e1e]/30 text-white' : 'bg-[#e5e3d9]/30 text-[#111]'} backdrop-blur-md shadow-lg flex items-center justify-between z-50 rounded-full fixed h-16 top-4 left-3 right-3 sm:left-6 sm:right-6 lg:left-20 lg:right-20`}>
      <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='px-4 sm:px-6 lg:px-8 flex items-center'>
          <img className={`h-12 sm:h-14 md:h-20 ${theme === "dark" ? "invert-0" : "invert"}`} src="/logo.png" alt="" />
          <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold'>Tanuj Agarwal</h1>
      </Link>
      <div className='flex items-center gap-5 m-4 md:m-15 font-semibold'>
        <div className="hidden md:flex gap-10 font-semibold">
          <Link to="/" className='hover:underline hover:translate-y-0.5 transition-all duration-200' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
          {samePage('about', 'About')}
          {samePage('project', 'Project')}
        </div>
        <button className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'} transition`} onClick={changeTheme} aria-label="Toggle Theme">{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</button>
        <button className="md:hidden cursor-pointer" onClick={hamBurger}>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {isOpen && (
        <div className={`${theme === 'dark' ? 'bg-[#1e1e1e]/80 text-white shadow-white/30' : 'bg-[#e5e3d9]/80 text-[#111] shadow-black/30'} absolute top-18 right-4 w-52 flex flex-col gap-5 text-center p-5 rounded-xl shadow-lg font-extrabold md:hidden`}>
          <Link to="/" onClick={hamBurger} aria-label="Toggle Menu">Home</Link>
          {samePage("about", "About")}
          {samePage("project", "Project")}
        </div>
      )}
    </div>
  )
}

export default Navbar