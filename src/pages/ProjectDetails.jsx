import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import { Link, useParams } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react'

const ProjectDetails = (props) => {
  const [theme] = useContext(ThemeDataContext)
  const MyProjectStyle = `${theme === 'dark' ? 'shadow-white/30' : 'shadow-black/30'}`
  const {projectURL} = useParams()
  const MyProject = props.projects.find((item)=> item.projectURL === projectURL)
  return (
    <div className={`${theme === 'dark' ? 'bg-[#2d2d30] text-white' : 'bg-[#f4f3ef] text-[#111]'} w-full  p-28`}>
      <h1 className='text-5xl font-extrabold text-center mb-15 underline font-sans'>{MyProject.title}</h1>
      <div className='flex justify-between gap-10'>
        <img className={`${MyProjectStyle} w-4xl h-auto object-contain rounded-xl shadow-lg`} src={MyProject.image} alt="" />
        <div className={`${MyProjectStyle} flex flex-col rounded-xl shadow-lg`}>
          <h1 className='text-xl font-extrabold font-sans py-5 text-center'>Project Details</h1>
          <h3 className='text-md font-bold font-sans px-4 mt-2'>Technologies</h3>
          <div className='flex gap-5 flex-wrap gap-x-5 gap-y-1 px-4 font-semibold font-sans text-gray-500 mt-2 min-h-24 items-center'>
            {MyProject.technologies.map((tech, idx) => {
              return(
                <p className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md text-sm font-semibold" key={idx}>{tech}</p>
              ) 
            })}
          </div>
          <div className='flex justify-around items-center mr-5 mt-auto pt-6 pb-4'>
            <a className='flex items-center gap-3 font-bold hover:scale-120' href={MyProject.github} target='_blank'>
              <img className={`h-8 w-8 ${theme === "dark" ? "invert" : "invert-0"}`} src="/github.png" alt="" />
              GitHub
            </a>
            <a className='flex items-center gap-3 font-bold hover:scale-120' href={MyProject.live} target='_blank'><SquareArrowOutUpRight size={28} />
            Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails