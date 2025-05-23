
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      longDescription: "This comprehensive e-commerce platform was built to handle high-traffic scenarios with optimized performance and security. It includes features like real-time inventory management, advanced search and filtering, order tracking, and integration with multiple payment gateways. The admin dashboard provides detailed analytics and sales reporting.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "This task management application revolutionizes team productivity with its intuitive interface and powerful collaboration features. Built with React and Socket.io for real-time updates, it includes advanced features like time tracking, project templates, automated reporting, and integration with popular tools like Slack and Google Calendar.",
      techStack: ["React", "Socket.io", "PostgreSQL", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      longDescription: "This sophisticated weather dashboard provides comprehensive meteorological data through an elegant, user-friendly interface. It features 7-day forecasts, severe weather alerts, historical data analysis, and customizable widgets. The application uses multiple weather APIs to ensure accuracy and includes offline functionality for cached data.",
      techStack: ["Vue.js", "D3.js", "Express", "Weather API", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
      longDescription: "A comprehensive social media management platform that aggregates data from multiple social networks. Features include automated posting schedules, engagement analytics, competitor analysis, and AI-powered content suggestions. The dashboard provides real-time insights with customizable reports and team collaboration tools.",
      techStack: ["Angular", "Python", "Flask", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and featuring smooth animations and dark mode support.",
      longDescription: "This portfolio website showcases modern web development practices with a focus on performance and user experience. Built with React and featuring smooth scroll animations, it includes a content management system for easy updates, SEO optimization, and progressive web app capabilities.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, assessments, and progress tracking for online learning.",
      longDescription: "A comprehensive learning management system designed for educational institutions and corporate training. Features include interactive course builder, video streaming with adaptive bitrate, automated grading system, discussion forums, and detailed progress analytics. The platform supports multiple learning formats and provides accessibility features.",
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                onClick={closeModal}
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
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProjectData.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
