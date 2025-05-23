
import React from 'react';
import { Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hello! I'm John Doe, a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in building modern web 
                applications using React, Node.js, and cloud technologies.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community. I believe in writing clean, 
                maintainable code and creating user experiences that truly matter.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Code className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={32} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Clean Code</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Coffee className="mx-auto mb-2 text-purple-600 dark:text-purple-400" size={32} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Coffee Lover</p>
                </div>
                <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                  <Heart className="mx-auto mb-2 text-pink-600 dark:text-pink-400" size={32} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">User First</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full absolute inset-0 animate-pulse"></div>
              <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-full relative z-10 m-2 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-600 dark:text-gray-400">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
