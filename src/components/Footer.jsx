import React, { useContext } from 'react'
import { Copyright } from 'lucide-react';
import { ThemeDataContext } from '../Context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const [theme] = useContext(ThemeDataContext)
    const location = useLocation()
    const samePage = (section, text) => {
        const classes ='hover:underline hover:translate-x-1 transition-all duration-200'
        return(
            location.pathname === '/' ? <a href={`#${section}`} className={classes}>{text}</a> : <Link to={`/${section}`} className={classes}>{text}</Link>
        )
    }
  return (
    <div className={`${theme === 'dark' ? 'bg-[#1e1e1e] text-white' : 'bg-[#e5e3d9] text-black'} h-full w-full px-5 py-10 sm:px-8 lg:px-20`}>
        <div className='flex flex-col md:flex-row md:justify-between gap-10 lg:gap-16'>
            <div className='flex flex-col w-full md:w-2/5 lg:w-1/3 text-center md:text-left'>
                <h1 className='text-2xl font-bold mb-2'>Tanuj Agarwal</h1>
                <p className="text-sm sm:text-base leading-7">Building clean, responsive, and modern web experiences with a focus on performance and user experience. Always learning, always growing, and ready for new challenges.
                </p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-2xl font-bold mb-2'>Quick Links</h1>
                <Link to="/" className='hover:underline hover:translate-x-1 transition-all duration-200' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
                {samePage('about', 'About')}
                {samePage('project', 'Project')}
            </div>
            <div className='flex flex-col mb-2 items-center md:items-start'>
                <h1 className='text-2xl font-bold mb-2'>Connect</h1>
                <div className={`flex items-center gap-4 justify-center md:justify-start ${theme === 'dark' ? 'invert' : 'invert-0'}`}>
                    <a className='' href="https://github.com/Tanuj-2531" target='_blank'>
                        <img className='h-8 w-8 hover:scale-110 transition-transform duration-200' src="/github.png" alt="" />
                    </a>
                    <a href="https://linkedin.com/in/tanuj-agarwal2531" target='_blank'>
                        <img className='h-8 w-8 hover:scale-110 transition-transform duration-200' src="/linkedin.png" alt="" />
                    </a>
                    <a href="https://wa.me/917877798784" target='_blank'>
                        <img className='h-8 w-8 hover:scale-110 transition-transform duration-200' src="/whatsapp.png" alt="" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanujag.2531@gmail.com" target='_blank'>
                        <img className='h-8 w-8 hover:scale-110 transition-transform duration-200' src="/email.png" alt="" />
                    </a>
                    <a href="tel:+917877798784" target='_blank'>
                        <img className='h-8 w-8 hover:scale-110 transition-transform duration-200' src="/phone-call.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center border-t pt-5 mt-10 opacity-70'>
            <h1 className='flex items-center justify-center gap-1 text-center text-sm md:text-base'><Copyright size={16} /> 2026 Tanuj Agarwal. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer