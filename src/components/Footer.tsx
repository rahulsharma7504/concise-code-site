
import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rahul Sharma
            </h3>
            <p className="text-gray-300 leading-relaxed">
              MERN Stack Developer passionate about building scalable web applications with clean code. 
              Currently exploring AI-based projects and voice/text interaction UX.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/rahulsharma7504"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-sharma-aa6b61247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rahul658541@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919997813970"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Keywords
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                MERN Stack, React.js, Node.js, MongoDB, Express, JavaScript, HTML5, CSS3, REST APIs, Responsive Design, AI Integration
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Development Tools
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Git', 'VS Code', 'Postman', 'Netlify', 'Vercel', 'Firebase', 
                'Google AI Studio', 'MongoDB Atlas', 'GitHub', 'npm'
              ].map((tool) => (
                <span 
                  key={tool}
                  className="text-sm px-2 py-1 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 transform hover:scale-105 text-center"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </h4>
              <div className="space-y-2 mt-2">
                <a
                  href="mailto:rahul658541@gmail.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  rahul658541@gmail.com
                </a>
                <a
                  href="tel:+919997813970"
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 9997813970
                </a>
                <p className="text-gray-400">Mathura, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 sm:mb-0">
            <span>Built with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Rahul Sharma</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rahul Sharma. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
