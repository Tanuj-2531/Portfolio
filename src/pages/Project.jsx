import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const [theme] = useContext(ThemeDataContext)
    const projectCardClass = `${theme === 'dark' ? 'bg-[#1e1e1e] text-white shadow-white/30' : 'bg-[#eae8e0] text-gray-900 shadow-black/30 text-gray-900'} h-full rounded-3xl shadow-lg overflow-hidden flex flex-col `
    const viewProjectClass = `flex items-center bg-gray-300 text-gray-800 m-5 px-3 py-2 text-sm rounded-lg font-bold cursor-pointer hover:scale-105 ${theme === 'dark' ? 'bg-white text-gray-950' :'bg-gray-950 text-white'}`
  return (
    <div className={`${theme === 'dark' ? 'bg-[#252526] text-white' : 'bg-[#efeee8] text-[#111]'} w-full px-5 py-10 lg:p-20`} id='project'>
      <div className='flex flex-col items-center justify-center gap-4 mb-5'>
        <h1 className='text-3xl sm:text-4xl font-bold '>My Projects</h1>
        <p className='text-base sm:text-xl lg:text-2xl max-w-2xl text-center'>A collection of projects that reflect my skills and learning journey.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mt-10'>
        {props.projects.map((item) => {
          return(
            <div key={item.id} className={projectCardClass}>
              <img className='w-full h-48 sm:h-56 lg:h-58 object-cover' src={item.image} alt="" />
              <div className="flex flex-col flex-1">
                <h1 className='font-sans font-bold text-xl sm:text-2xl text-center mt-2 min-h-16 flex items-center justify-center px-2'>{item.title}</h1>
                <p className='p-4 mx-2 font-semibold text-justify text-sm sm:text-base leading-7 min-h-52'>{item.description}</p>
                <div className='flex flex-wrap gap-2 px-4 mt-2 min-h-24 content-start'>
                  {item.technologies.map((tech, idx) => {
                    return(
                      <p className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold whitespace-nowrap hover:scale-105 transition-transform duration-200" key={idx}>{tech}</p>
                    ) 
                  })}
                </div>
                <div className='flex flex-col p-4 gap-3 min-h-40'>
                  {item.features.slice(0, 3).map((feature, idx) => {
                    return(
                      <div key={idx} className='flex gap-2'>
                        <ArrowRight className='shrink-0 mt-1' size={16} />
                        <p className='text-sm sm:text-base font-semibold'>{feature}</p>
                      </div>
                    )
                  })}
                </div>
                <div className='flex items-center justify-between px-4 pb-4 mt-auto gap-4'>
                  <Link to={`/project/${item.projectURL}`}>
                    <button className={viewProjectClass}><ArrowRight size={16} />View Project</button>
                  </Link>
                  <div className='flex items-center gap-3'>
                    <a className='' href={item.github} target='_blank'>
                    <img className={`h-8 w-8 ${theme === "dark" ? "invert" : "invert-0"} hover:scale-120`} src="/github.png" alt="" />
                    </a>
                    <a className='hover:scale-120' href={item.live} target='_blank'><SquareArrowOutUpRight size={28} /></a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project