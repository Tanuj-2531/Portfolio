import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Project from './pages/Project'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
import projects from "./data/projects";
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='font-mono'>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Home />
          <About />
          <Project projects={projects} />
        </>} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project projects={projects} />} />
        <Route path='/project/:projectURL' element={<ProjectDetails projects={projects} />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App