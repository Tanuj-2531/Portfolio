import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const [theme] = useContext(ThemeDataContext)
    const projectCardClass = `${theme === 'dark' ? 'bg-[#1e1e1e] text-white shadow-white/30' : 'bg-[#eae8e0] text-gray-900 shadow-black/30'} text-gray-900 min-h-[850px] rounded-3xl shadow-lg z-10 overflow-hidden flex flex-col `
    const viewProjectClass = `flex items-center bg-gray-300 text-gray-800 m-5 px-2 py-1 rounded-lg font-bold cursor-pointer hover:scale-105 ${theme === 'dark' ? 'bg-white text-gray-950' :'bg-gray-950 text-white'}`
  return (
    <div className={`${theme === 'dark' ? 'bg-[#252526] text-white' : 'bg-[#efeee8] text-[#111]'} h-full w-full p-20`} id='project'>
      <div className='flex flex-col items-center justify-center gap-4 mb-5'>
        <h1 className='text-4xl font-bold '>My Projects</h1>
        <p className='text-2xl max-w-2xl text-center'>A collection of projects that reflect my skills and learning journey.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-11 h-full w-full gap-10'>
        {props.projects.map((item) => {
          return(
            <div key={item.id} className={projectCardClass}>
              <img className='w-full h-58 object-cover' src={item.image} alt="" />
              <div className="flex flex-col flex-1">
                <h1 className='font-sans font-bold text-2xl text-center mt-2'>{item.title}</h1>
                <p className='p-3 mx-2 font-semibold text-justify min-h-32'>{item.description}</p>
                <div className='flex gap-5 flex-wrap gap-x-5 gap-y-1 px-4 font-semibold font-sans text-gray-500 mt-2 min-h-24 items-center'>
                  {item.technologies.map((tech, idx) => {
                    return(
                      <p className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md text-sm font-semibold" key={idx}>{tech}</p>
                    ) 
                  })}
                </div>
                <div className='flex flex-col p-3 my-3 text-justify gap-3 min-h-36'>
                  {item.features.slice(0, 3).map((feature, idx) => {
                    return(
                      <div key={idx} className='flex gap-2 min-h-12'>
                        <ArrowRight className='shrink-0 mt-1' size={16} />
                        <p className='font-semibold'>{feature}</p>
                      </div>
                    )
                  })}
                </div>
                <div className='flex justify-between items-center mr-5 mt-auto'>
                  <Link to={`/project/${item.projectURL}`}>
                    <button className={viewProjectClass}><ArrowRight size={16} />View Project</button>
                  </Link>
                  <div className='flex items-center gap-4'>
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