import React, { useContext } from 'react'
import { Download } from "lucide-react";
import { ThemeDataContext } from '../Context/ThemeContext';
import profile from '../assets/profile.jpg'
import resume from '../assets/tanuj_resume.pdf';

const Home = () => {
    const [theme] = useContext(ThemeDataContext)
    const iconClass = `h-8 w-8 ${theme === "dark" ? "invert-0" : "invert"} hover:scale-120`
  return (
    <div className={`px-5 py-10 lg:p-20 flex flex-col lg:flex-row items-center justify-around gap-5 lg:gap-40 ${theme === 'dark' ? 'bg-[#3e3e42] text-[#f9f9f7]' : 'bg-[#f9f9f7] text-gray-900'}`}>
        <img className={`${theme === 'dark' ? 'shadow-white/30' : 'shadow-black/30'} m-12 h-80 w-80 xl:h-120 xl:w-120 rounded-full object-cover shadow-lg`} src={profile} alt="" />
        <div className='w-full lg:w-[40%] flex flex-col gap-5 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-5xl font-extrabold'>Hey Guys, I'm Tanuj Agarwal</h1>
            <h3 className='text-xl sm:text-2xl font-semibold font-serif'>Frontend Developer</h3>
            <p className='text-sm sm:text-base leading-7'>Passionate Frontend Developer with expertise in HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, and Responsive Web Design. I enjoy building modern, fast, and user-friendly web applications with clean code, intuitive interfaces, and seamless user experiences.</p>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6 w-full'>
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 invert'>
                    <a className='' href="https://github.com/Tanuj-2531" target='_blank'>
                        <img className={iconClass} src="/github.png" alt="" />
                    </a>
                    <a href="https://linkedin.com/in/tanuj-agarwal2531" target='_blank'>
                        <img className={iconClass} src="/linkedin.png" alt="" />
                    </a>
                    <a href="https://wa.me/917877798784" target='_blank'>
                        <img className={iconClass} src="/whatsapp.png" alt="" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanujag.2531@gmail.com" target='_blank'>
                        <img className={iconClass} src="/email.png" alt="" />
                    </a>
                    <a href="tel:+917877798784" target='_blank'>
                        <img className={iconClass} src="/phone-call.png" alt="" />
                    </a>
                </div>
                <a className={`flex items-center gap-4 ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-[#f9f9f7]'} font-bold rounded-md px-4 py-2 mr-0 hover:scale-110`} href={resume} download><Download strokeWidth={2.5} /> Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Home