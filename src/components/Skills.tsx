
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500', description: 'Expert in responsive design, animations, and modern CSS frameworks' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', description: 'Proficient in ES6+, async programming, and DOM manipulation' },
    { name: 'React', level: 88, color: 'from-blue-400 to-blue-600', description: 'Advanced state management, hooks, context API, and performance optimization' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600', description: 'RESTful APIs, authentication, middleware, and Express.js' },
    { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700', description: 'Schema design, aggregation pipelines, and data modeling' },
    { name: 'Express.js', level: 85, color: 'from-purple-400 to-purple-600', description: 'API development, routing, middleware implementation' },
    { name: 'REST APIs', level: 80, color: 'from-blue-500 to-blue-600', description: 'Design and implementation of RESTful services' },
    { name: 'Socket.io', level: 75, color: 'from-pink-500 to-purple-500', description: 'Real-time bidirectional event-based communication' },
    { name: 'Responsive UI', level: 90, color: 'from-orange-500 to-orange-700', description: 'Mobile-first design, media queries, and flexible layouts' },
    { name: 'Git/GitHub', level: 85, color: 'from-blue-400 to-blue-500', description: 'Version control, branching strategies, and collaborative development' },
  ];

  const tools = [
    { name: 'React', icon: '⚛️', proficiency: 'Expert' },
    { name: 'Node.js', icon: '🟢', proficiency: 'Advanced' },
    { name: 'Express', icon: '🚂', proficiency: 'Advanced' },
    { name: 'MongoDB', icon: '🍃', proficiency: 'Advanced' },
    { name: 'JavaScript', icon: '💛', proficiency: 'Expert' },
    { name: 'HTML/CSS', icon: '🎨', proficiency: 'Expert' },
    { name: 'RESTful API', icon: '🔄', proficiency: 'Advanced' },
    { name: 'Git', icon: '📝', proficiency: 'Advanced' },
    { name: 'VS Code', icon: '💻', proficiency: 'Expert' },
    { name: 'Postman', icon: '🚀', proficiency: 'Advanced' },
    { name: 'Socket.io', icon: '🔌', proficiency: 'Intermediate' },
    { name: 'Netlify', icon: '🌐', proficiency: 'Advanced' },
    { name: 'Vercel', icon: '▲', proficiency: 'Advanced' },
    { name: 'Responsive Design', icon: '📱', proficiency: 'Expert' },
    { name: 'Agile Methods', icon: '🔄', proficiency: 'Intermediate' },
  ];

  const projects = {
    'React': 23,
    'Node.js': 18,
    'MongoDB': 15,
    'JavaScript': 31,
    'Socket.io': 8,
    'Express.js': 18,
    'HTML/CSS': 25
  };

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

  const handleSkillHover = (skillName: string) => {
    setActiveSkill(skillName);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              Technical Proficiency
              {activeSkill && (
                <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                  ({projects[activeSkill as keyof typeof projects] || 0} projects)
                </span>
              )}
            </h3>
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="space-y-2 hover:bg-white dark:hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-200"
                onMouseEnter={() => handleSkillHover(skill.name)}
                onMouseLeave={handleSkillLeave}
              >
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
                {activeSkill === skill.name && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 animate-fade-in">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Tools & Technologies Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
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
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block
                    ${tool.proficiency === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                    tool.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                    {tool.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Frontend Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Creating responsive, interactive user interfaces with React.js, modern CSS frameworks, and JavaScript ES6+ features.
              <span className="block mt-2 font-medium">25+ projects</span>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Backend Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Building RESTful APIs and server-side applications using Node.js, Express, and MongoDB.
              <span className="block mt-2 font-medium">18+ projects</span>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔌</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Real-time Applications
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Developing interactive, real-time applications using Socket.io and WebSockets for instant data updates.
              <span className="block mt-2 font-medium">8+ projects</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
