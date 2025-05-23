
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Eduoqate",
      description: "A comprehensive school learning & management system built with the MERN stack.",
      longDescription: "Eduoqate is a comprehensive school learning and management system designed to streamline educational processes. The platform features robust admissions handling, detailed course management, and intuitive dashboards for students, teachers, and administrators. Built with React for the frontend and Node.js/Express for the backend, with MongoDB as the database.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      github: "https://github.com/rahulsharma7504/eduoqate",
      demo: "https://edooqate.in",
      category: "mern"
    },
    {
      id: 2,
      title: "NeuroAssist AI",
      description: "Multimodal AI assistant with PDF chat, text-to-speech, and AI image generation capabilities.",
      longDescription: "NeuroAssist AI is an advanced multimodal assistant that leverages AI to provide intelligent interactions across different types of content. The application features PDF document chat functionality, high-quality text-to-speech conversion, and AI-powered image generation. Currently being expanded to incorporate voice input capabilities, long-term memory, and comprehensive analytics.",
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "TensorFlow.js"],
      image: "https://images.unsplash.com/photo-1677442135888-422ab3b46176?w=800&h=600&fit=crop",
      github: "https://github.com/rahulsharma7504/neuroassist",
      demo: "https://neuroassist-demo.vercel.app",
      category: "ai"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Academic project featuring real-time messaging, user authentication, and channel functionality.",
      longDescription: "Developed as an academic project, this real-time chat application enables instant messaging between users in a secure environment. Features include user authentication, profile customization, channel creation, and private messaging. The application uses Socket.io for real-time capabilities and MongoDB for message persistence.",
      techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
      github: "https://github.com/rahulsharma7504/chat-app",
      demo: "https://chat-app-demo.netlify.app",
      category: "mern"
    },
    {
      id: 4,
      title: "E-Commerce System",
      description: "Full-featured e-commerce platform with shopping cart, payment processing, and order management.",
      longDescription: "This e-commerce system was developed as part of an academic project to demonstrate comprehensive online retail functionality. The application includes product catalog management, advanced search and filtering, shopping cart functionality, secure payment processing, and order tracking features. The admin panel provides inventory management and sales reporting.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      github: "https://github.com/rahulsharma7504/ecommerce",
      demo: "https://e-commerce-demo.vercel.app",
      category: "mern"
    },
    {
      id: 5,
      title: "School Learning App",
      description: "Interactive learning platform for K-12 students with science simulations and educational content.",
      longDescription: "Built during professional tenure at Hankernest Technologies, this educational application provides an engaging learning environment for K-12 students. The platform features interactive science simulations for grades 6-8, curriculum-aligned educational content, progress tracking, and performance analytics. The application incorporates AI-enhanced features to personalize the learning experience.",
      techStack: ["React", "JavaScript", "CSS3", "REST APIs", "TensorFlow.js"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      github: "https://github.com/rahulsharma7504/learning-app",
      demo: "https://school-learning-demo.netlify.app",
      category: "frontend"
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "ai", label: "AI Projects" },
    { id: "frontend", label: "Frontend" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeFilter === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProjectData.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProjectData.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProjectData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProjectData.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
