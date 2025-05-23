
import React from 'react';
import { Code, Coffee, Heart, Database, Server, Cpu, Globe, Tool } from 'lucide-react';

const About = () => {
  const randomStats = [
    { label: "Projects Completed", value: "75+" },
    { label: "Satisfied Clients", value: "42" },
    { label: "Coffee Consumed", value: "1,259 cups" },
    { label: "Lines of Code", value: "371K+" },
  ];

  const certifications = [
    "MongoDB Certified Developer",
    "AWS Solutions Architect",
    "React Advanced Patterns",
    "Node.js Performance Optimization"
  ];

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
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:border-purple-500 transition-colors duration-300">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hello! I'm John Doe, a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in building modern web 
                applications using the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                With a background in computer science and a passion for problem-solving, I've helped startups 
                and established businesses alike launch successful digital products. My approach combines technical 
                expertise with a deep understanding of user experience and business needs.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {certifications.map((cert, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {randomStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="w-full h-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Tech Stack
                </h3>
                
                {/* MERN Stack Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      <Database size={32} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <Server size={32} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Express.js</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none">
                        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.749.885-1.447 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">React</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none">
                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.186-.277-.067-.317.487-.169.588-.207 1.107-.503.056-.027.129-.016.185.015l1.875 1.125c.074.036.166.036.226 0l7.325-4.225c.067-.04.115-.124.115-.210v-8.422c0-.088-.048-.169-.115-.212l-7.325-4.225c-.067-.035-.159-.035-.226 0l-7.325 4.225c-.067.043-.115.124-.115.212v8.422c0 .086.048.17.115.21l2.009 1.161c1.09.545 1.756-.096 1.756-.726v-8.312c0-.117.091-.202.202-.202h.926c.11 0 .202.085.202.202v8.312c0 1.432-.779 2.252-2.138 2.252-.417 0-.744 0-1.667-.45l-1.894-1.09A1.536 1.536 0 0 1 3 20.485v-8.419c0-.564.293-1.09.772-1.368l7.325-4.225a1.597 1.597 0 0 1 1.544 0l7.325 4.225c.479.278.772.804.772 1.368v8.42c0 .563-.293 1.089-.772 1.367l-7.325 4.225c-.239.128-.496.202-.771.202zm2.348-5.823c-3.207 0-3.879-.147-4.11-1.239-.027-.13-.122-.211-.231-.211h-.944c-.11 0-.202.082-.202.202 0 1.157.628 1.683 2.445 1.683 1.478 0 2.256-.319 2.256-1.788 0-.649-.232-1.133-2.5-1.469-1.932-.285-2.125-.454-2.125-1.012 0-.45.202-.924 1.883-.924 1.5 0 2.062.091 2.285 1.063.022.122.134.202.231.202h.944c.058 0 .113-.024.15-.066.037-.042.058-.101.054-.166-.15-1.773-1.332-2.02-3.664-2.02-2.095 0-3.382.706-3.382 1.892 0 1.287.987 1.643 2.585 1.803 1.908.19 2.04.468 2.04.947 0 .726-.58.981-1.715.981z" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                  </div>
                </div>
                
                {/* Development Tools */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Development Tools
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Tool className="mb-2 text-gray-600 dark:text-gray-400" size={24} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Postman</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Github className="mb-2 text-gray-600 dark:text-gray-400" size={24} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Cpu className="mb-2 text-gray-600 dark:text-gray-400" size={24} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Docker</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Globe className="mb-2 text-gray-600 dark:text-gray-400" size={24} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AWS</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Code className="mb-2 text-gray-600 dark:text-gray-400" size={24} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">VS Code</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      className="mb-2 text-gray-600 dark:text-gray-400"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4c.828 0 1.5.672 1.5 1.5S12.328 7 11.5 7 10 6.328 10 5.5 10.672 4 11.5 4zM14 18h-4v-1h1v-6h-1v-1h3v7h1v1z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jira</span>
                  </div>
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
