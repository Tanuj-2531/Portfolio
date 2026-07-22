import React, { useContext } from 'react'
import { Download } from "lucide-react";
import { ThemeDataContext } from '../Context/ThemeContext';

const Home = () => {
    const [theme] = useContext(ThemeDataContext)
    const iconClass = `h-8 w-8 ${theme === "dark" ? "invert-0" : "invert"} hover:scale-120`
  return (
    <div className={`p-24 flex items-center justify-around gap-40 ${theme === 'dark' ? 'bg-[#3e3e42] text-[#f9f9f7]' : 'bg-[#f9f9f7] text-gray-900'}`}>
        <img className={`${theme === 'dark' ? 'shadow-white/30' : 'shadow-black/30'} h-120 w-120 rounded-full object-cover shadow-lg`} src="src/assets/profile.jpg" alt="" />
        <div className='w-[40%] flex flex-col gap-5'>
            <h1 className='text-4xl font-extrabold'>Hey Guys, I'm Tanuj Agarwal</h1>
            <h3 className='text-2xl font-semibold font-serif'>Frontend Developer</h3>
            <p>Passionate Frontend Developer with expertise in HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, and Responsive Web Design. I enjoy building modern, fast, and user-friendly web applications with clean code, intuitive interfaces, and seamless user experiences.</p>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-4 invert'>
                    <a className='' href="https://github.com/Tanuj-2531" target='_blank'>
                        <img className={iconClass} src="/github.png" alt="" />
                    </a>
                    <a href="https://linkedin.com/in/tanuj-agarwal2531" target='_blank'>
                        <img className={iconClass} src="/linkedin.png" alt="" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanujag.2531@gmail.com" target='_blank'>
                        <img className={iconClass} src="/email.png" alt="" />
                    </a>
                    <a href="tel:+917877798784" target='_blank'>
                        <img className={iconClass} src="/phone-call.png" alt="" />
                    </a>
                </div>
                <a className={`flex items-center gap-4 ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-[#f9f9f7]'} font-bold rounded-md px-3 py-1 mr-5 hover:scale-110`} href='src/assets/tanuj_resume.pdf' download><Download strokeWidth={2.5} /> Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Home