import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Footer from './components/Footer'
import Project from './components/Project'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'


const App = () => {
  const projects = [
    {
      id: 1,
      projectURL: "youtube-clone",
      title: "YouTube-Clone",
      image: "/youtube.png",
      description:
        "A full-stack YouTube clone built with the MERN stack, featuring user authentication, video browsing, search functionality, responsive design, and a clean, modern interface for an engaging user experience.",
      overview:
        "YouTube Clone is a full-stack MERN web application inspired by YouTube, designed to provide a modern video-sharing experience. Users can browse videos, register and log in securely using JWT authentication, create channels, upload and manage videos, and interact through comments. The application features a responsive React-based interface, RESTful APIs built with Node.js and Express.js, and MongoDB for efficient data storage. It demonstrates full-stack development concepts, including authentication, CRUD operations, protected routes, and responsive UI design.",
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
        "Built a full-stack YouTube Clone using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
        "Added comment functionality to enable user interaction on videos.",
      ],
      github: "https://github.com/Tanuj-2531/YouTube-Clone",
      live: "https://youtube-clone-pink-psi.vercel.app/",
    },
    {
      id: 2,
      projectURL: "library",
      title: "Library-Management-System",
      image: "/library.png",
      description:
        "Designed and developed a frontend-based Library Management System featuring book listing, search functionality, category organization, responsive layouts, and an interactive user interface for efficient library management.",
      overview:
        "Online Library System is a responsive web application that simplifies library management by allowing users to browse, search, and manage books through an intuitive interface. It provides an organized catalog with category-based navigation and an efficient book management system, delivering a smooth and user-friendly experience. Built with modern frontend technologies, the project focuses on responsive design, clean UI, and seamless navigation across devices.",
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
        "Implemented book search and category-based filtering for quick and efficient navigation.",
        "Created a responsive layout using React.js and Tailwind CSS, ensuring compatibility across desktop, tablet, and mobile devices.",
      ],
      github: "https://github.com/Tanuj-2531/Online-library-system",
      live: "https://online-library-system-sepia.vercel.app/",
    },
    {
      id: 3,
      projectURL: "textflow",
      title: "Textflow-Write Better",
      image: "/textflow.png",
      description:
        "Developed a responsive text utility application that enables users to transform, format, and analyze text with features like case conversion, word counting, character counting, and extra space removal.",
      overview:
        "TextFlow is a responsive text utility web application designed to simplify text editing and formatting tasks. It enables users to perform operations such as case conversion, text cleaning, word and character counting, and copy text with ease. Built with React.js, the application focuses on fast performance, an intuitive user interface, and a seamless user experience across different devices.",
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
        "Implemented multiple text transformation features, including uppercase, lowercase, sentence case, and title case conversion.",
        "Built text formatting utilities such as remove extra spaces, clear text, and copy-to-clipboard functionality.",
      ],
      github: "https://github.com/Tanuj-2531/Textflow-Write-Better",
      live: "https://textflow-write-better.vercel.app/",
    },
  ];
  return (
    <div className='font-mono'>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Home />
          <About />
          <Project projects={projects} />
        </>} />
        <Route path='/project/:projectURL' element={<ProjectDetails projects={projects} />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App