import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import { Link, useParams } from 'react-router-dom'
import { SquareArrowOutUpRight, ArrowRight, ArrowLeft } from 'lucide-react'
import NotFound from './NotFound'

const ProjectDetails = (props) => {
  const [theme] = useContext(ThemeDataContext)
  const MyProjectStyle = `${theme === 'dark' ? 'shadow-white/30' : 'shadow-black/30'}`
  const {projectURL} = useParams()
  const MyProject = props.projects.find((item)=> item.projectURL === projectURL)
  if (!MyProject) {
    return <NotFound />
  }
  return (
    <div className={`${theme === 'dark' ? 'bg-[#2d2d30] text-white' : 'bg-[#f4f3ef] text-[#111]'} w-full px-5 py-10 sm:px-8 lg:px-20 lg:py-28`}>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl px-2 font-extrabold text-center mb-15 underline font-sans'>{MyProject.title}</h1>
      <Link to="/project" className={`inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-105 ${theme === "dark" ? "bg-white/10 text-white hover:bg-white hover:text-black"
    : "bg-black/10 text-gray-900 hover:bg-black hover:text-white"}`}><ArrowLeft size={16} /> Back to Projects</Link>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>
        <div className='w-full xl:w-2/3'>
          <img className={`${MyProjectStyle} w-full h-56 sm:h-72 lg:h-125 object-cover rounded-xl shadow-lg`} src={MyProject.image} alt="" />
        </div>
        <div className={`${MyProjectStyle} w-full xl:w-1/3 flex flex-col rounded-xl shadow-lg p-2`}>
          <h1 className='text-xl font-extrabold font-sans py-5 text-center'>Project Details</h1>
          <p className='p-4 mx-2 text-sm sm:text-base leading-7 text-justify'>{MyProject.description}</p>
          <div className="flex justify-center lg:my-2">
            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
          <h3 className='text-md font-bold font-sans px-4 py-2 mt-2'>Technologies</h3>
          <div className='flex flex-wrap gap-2 px-4 mt-2'>
            {MyProject.technologies.map((tech, idx) => {
              return(
                <p className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold whitespace-nowrap hover:scale-105 transition-transform duration-200" key={idx}>{tech}</p>
              ) 
            })}
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-auto py-6'>
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
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-15 font-sans'>Overview</h1>
        <p className='text-justify text-sm sm:text-base leading-8'>{MyProject.overview}</p>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-15 font-sans'>Achievements</h1>
        <div className='flex flex-col gap-3 mt-4'>
          {MyProject.features.map((feature, idx)=> {
            return(
              <div key={idx} className='flex gap-3'>
                <ArrowRight className='shrink-0 mt-1' size={16} />
                <p className='text-sm sm:text-base font-semibold leading-7'>{feature}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ProjectDetails