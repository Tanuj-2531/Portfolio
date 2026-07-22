import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import { Link, useParams } from 'react-router-dom'
import { SquareArrowOutUpRight, ArrowRight } from 'lucide-react'

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
          <p className='p-3 mx-2 text-justify min-h-32'>{MyProject.description}</p>
          <div className="flex justify-center my-2">
            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
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
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold text-center mt-15 font-sans'>Overview</h1>
        <p className='text-center'>{MyProject.overview}</p>
        <h1 className='text-4xl font-bold text-center mt-15 font-sans'>Achievements</h1>
        <div className='flex flex-col gap-3 mt-4'>
          {MyProject.features.map((feature, idx)=> {
            return(
              <div key={idx} className='flex gap-2 min-h-12'>
                <ArrowRight className='shrink-0 mt-1' size={16} />
                <p className='font-semibold'>{feature}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ProjectDetails