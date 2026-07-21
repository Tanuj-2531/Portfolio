import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Project from './components/Project'

const App = () => {
  const projects = [
    {
      id: 1,
      title: "YouTube-Clone",
      image: "src/assets/youtube.png",
      description:
        "A full-stack YouTube clone built with the MERN stack, featuring user authentication, video browsing, search functionality, responsive design, and a clean, modern interface for an engaging user experience.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "REST API",
        "Axios",
        "React Router DOM",
        "Git & GitHub",
      ],
      features: [
        "Browse and Watch Videos with a responsive interface.",
        "Search Videos by title for quick access.",
        "Responsive Design optimized for desktop and mobile devices.",
      ],
      github: "https://github.com/Tanuj-2531/YouTube-Clone",
      live: "https://youtube-clone-pink-psi.vercel.app/",
    },
    {
      id: 2,
      title: "Library-Management-System",
      image: "src/assets/library.png",
      description:
        "Designed and developed a frontend-based Library Management System featuring book listing, search functionality, category organization, responsive layouts, and an interactive user interface for efficient library management.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "React Router DOM",
        "Local Storage",
      ],
      features: [
        "Book Listing with organized library records.",
        "Category-Based Organization for easy navigation.",
        "Fast and User-Friendly Navigation for seamless usability.",
      ],
      github: "https://github.com/Tanuj-2531/Online-library-system",
      live: "https://online-library-system-sepia.vercel.app/",
    },
    {
      id: 3,
      title: "Textflow-Write Better",
      image: "src/assets/textflow.png",
      description:
        "Developed a responsive text utility application that enables users to transform, format, and analyze text with features like case conversion, word counting, character counting, and extra space removal.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "React Router DOM",
      ],
      features: [
        "Convert Text between uppercase and lowercase instantly.",
        "Count Words and Characters in real time.",
        "Remove Extra Spaces for clean and formatted text.",
      ],
      github: "https://github.com/Tanuj-2531/Textflow-Write-Better",
      live: "https://textflow-write-better.vercel.app/",
    },
  ];
  return (
    <div className='font-mono'>
      <Navbar />
      <Home />
      <About />
      <Project projects={projects} />
      <Footer />
    </div>
  )
}

export default App