import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import Skills from './Skills'

const About = () => {
    const [theme] = useContext(ThemeDataContext)
    const aboutParaStyle = 'bg-gray-300 text-gray-800 px-2 rounded-lg font-sans font-semibold'
    const aboutCardStyle = `${theme === 'dark' ? 'bg-[#1e1e1e] text-white shadow-white/30' : 'bg-[#eae8e0] text-gray-900 shadow-black/30'}`
  return (
    <div className={`${theme === 'dark' ? 'bg-[#2d2d30] text-white' : 'bg-[#f4f3ef] text-[#111]'} h-full w-full p-20`} id='about'>
        <div className='flex flex-col items-center justify-center gap-4 mb-5'>
            <h1 className='text-4xl font-bold '>About Me</h1>
            <p className='text-2xl'>Gate to know about my background and skills</p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 p-10 h-full w-full gap-10'>
            <div className={`${aboutCardStyle} text-gray-900 h-auto p-6 lg:p-10 rounded-3xl shadow-lg z-10`}>
                <h2 className='text-center text-2xl p-4 font-serif font-bold'>Who I am</h2>
                <p className='text-justify'>Hi, I'm Tanuj Agarwal, a final-year B.Tech Computer Science & Engineering student at Vivekananda Institute of Technology, Jaipur. I am based in Jaipur, Rajasthan, and passionate about building modern, responsive, and user-friendly web applications. I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS, and I'm currently learning the MERN Stack to become a Full Stack Developer. I enjoy solving real-world problems through code and continuously improving my skills by working on practical projects and exploring new technologies. I love turning ideas into reality.</p>
            </div>
            <div className={`${aboutCardStyle} h-auto p-6 lg:p-10 rounded-3xl shadow-black/30 shadow-lg z-10`}>
                <h2 className='text-center text-2xl p-4 font-serif font-bold'>Skills</h2>
                <Skills />
            </div>
            <div className={`${aboutCardStyle} text-gray-900 h-auto p-6 lg:p-10 rounded-3xl shadow-black/30 shadow-lg z-10`}>
                <h2 className='text-center text-2xl p-4 font-serif font-bold'>Education & Certification</h2>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-lg'>B.tech (Computer Science & Engineering)</h3>
                    <p className='font-sans font-semibold text-gray-500'>Vivekananda Institute of Technology, Jaipur <br />August 2022 - May 2026 <br />Affiliated to RTU, Kota <br />Building a strong foundation in software development.</p>
                    <h3 className='font-bold text-lg mt-5'>Full Stack Development</h3>
                    <p className='font-sans font-semibold text-gray-500'>Internshala Trainings, Virtual <br />September 2025 - February 2026 <br />Hands-on training with real-world projects.</p>
                </div>
            </div>
            <div className={`${aboutCardStyle} text-gray-900 h-auto p-6 lg:p-10 rounded-3xl shadow-black/30 shadow-lg z-10`}>
                <h2 className='text-center text-2xl p-4 font-serif font-bold'>What I Do?</h2>
                <p className='text-justify'>I am an aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. My career objective is to create impactful digital solutions while continuously improving my skills in the MERN stack and modern web technologies. I am currently expanding my knowledge through hands-on learning, exploring new tools and best practices, and working on real-world projects that strengthen my problem-solving abilities. Alongside my learning journey, I am preparing to take on freelance projects to gain practical experience, collaborate with clients, and deliver high-quality web solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default About