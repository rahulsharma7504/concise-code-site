
import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Work = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 0,
      company: "Hankernest Technologies Pvt. Ltd",
      role: "MERN Stack Developer",
      period: "Nov 2024 - May 2025",
      description: [
        "Developed the Eduoqate School Learning App with interactive UI components and intuitive navigation based on React.js",
        "Created educational science simulations in JavaScript for students in grades 6-8, increasing student engagement by 35%",
        "Developed and integrated RESTful API services with Node.js and Express, improving data flow efficiency by 40%",
        "Implemented responsive design principles ensuring cross-browser compatibility and mobile-first approach",
        "Successfully integrated AI-enhanced features to improve user experience and automate routine tasks",
        "Collaborated with cross-functional teams in an Agile environment with bi-weekly sprints and daily standups",
        "Maintained clean, reusable code with proper documentation following company standards"
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"]
    },
    {
      id: 1,
      company: "Utkranti Software",
      role: "Web Development Intern",
      period: "May 2024 - Oct 2024",
      description: [
        "Assisted in developing real-time applications using Socket.io and WebSocket protocols",
        "Worked on creating RESTful APIs with Node.js and Express for data management",
        "Contributed to front-end components using React, improving UI responsiveness",
        "Participated in code reviews and debugging sessions to enhance team code quality",
        "Gained hands-on experience with MongoDB database operations and schema design"
      ],
      skills: ["React", "Node.js", "Socket.io", "MongoDB", "RESTful APIs"]
    }
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

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Header - Company Selection */}
          <div className="flex overflow-x-auto pb-4 hide-scrollbar mb-8">
            <div className="flex space-x-2">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Briefcase size={18} />
                  <span className="font-medium">{exp.company}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`transition-all duration-500 ${
                  activeExperience === index 
                    ? 'opacity-100 block' 
                    : 'opacity-0 hidden'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  {experience.description.map((item, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-3 ${
                        isVisible ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <ChevronRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
