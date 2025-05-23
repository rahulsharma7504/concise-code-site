
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 88, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 82, color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 78, color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-700' },
    { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-600' },
  ];

  const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Proficiency
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Frontend Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Creating responsive, interactive user interfaces with modern frameworks and best practices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Backend Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Building scalable server-side applications, APIs, and database architectures.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Cloud & DevOps
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Deploying and managing applications using cloud services and modern DevOps practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
