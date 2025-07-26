import React, { useState, useEffect } from 'react';
import { Github, Mail, Code, Gamepad2, User, ChevronDown, ExternalLink, Star, Coffee, Sun, Moon, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Gaming', level: 95 }
  ];

  const projects = [
    {
      title: 'Clicky Portfolio',
      description: 'A modern, interactive portfolio website built with React and Tailwind CSS',
      tech: ['React', 'Tailwind', 'JavaScript']
    },
    {
      title: 'Bedwars Stats Tracker',
      description: 'Python application to track Hypixel Bedwars statistics and performance',
      tech: ['Python', 'API', 'Data Analysis']
    },
    {
      title: 'Web Scraping Tool',
      description: 'Automated web scraping solution for data collection and analysis',
      tech: ['Python', 'BeautifulSoup', 'Selenium']
    }
  ];

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/clicckyy' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/clicky' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/clicky' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/clicky' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@clicky' }
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b ${
        isDarkTheme ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clicky
            </h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-6">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border transition-colors ${
                  isDarkTheme 
                    ? 'border-gray-700 hover:text-purple-400' 
                    : 'border-gray-300 hover:text-purple-600'
                }`}
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Clicky
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Code className="text-purple-400" size={24} />
            <span className="text-xl">Passionate Developer</span>
            <Gamepad2 className="text-blue-400" size={24} />
          </div>
          <p className={`text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Extremely passionate coder working on HTML, Python, JS and CSS projects.
            Also a Hypixel Bedwars grinder - feel free to DM me for party games!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className={`px-8 py-3 border rounded-full transition-colors ${
              isDarkTheme 
                ? 'border-gray-600 hover:border-purple-400' 
                : 'border-gray-300 hover:border-purple-500'
            }`}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <User size={120} className="text-white" />
              </div>
            </div>
            <div>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkTheme ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate developer who loves creating innovative solutions with code. 
                My journey started with HTML and CSS, and has evolved to include Python, JavaScript, 
                and modern frameworks like React.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkTheme ? 'text-gray-300' : 'text-gray-700'
              }`}>
                When I'm not coding, you'll find me grinding Bedwars on Hypixel. 
                Gaming isn't just a hobby for me - it's taught me strategy, quick thinking, 
                and teamwork that I bring to my development work.
              </p>
              <div className="flex items-center gap-4">
                <Coffee className="text-yellow-400" size={24} />
                <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                  Fueled by caffeine and curiosity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${
        isDarkTheme ? 'bg-gray-800/30' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`p-6 rounded-xl border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                  isDarkTheme 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white/80 border-gray-200 hover:border-purple-500/50'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className={`flex items-center gap-2 transition-colors ${
                      isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href="#" 
                    className={`flex items-center gap-2 transition-colors ${
                      isDarkTheme ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all hover:scale-105 ${
                      isDarkTheme 
                        ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
                        : 'bg-white/80 border-gray-200 hover:border-purple-500/50'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
            <div className={`max-w-lg mx-auto p-4 rounded-lg border ${
              isDarkTheme 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                💎 Always down for a Bedwars session! Hit me up if you want to team up and dominate some lobbies.
                <br />
                <span className="text-xs opacity-75">
                  (Warning: I might rage quit if we get rushed too early 😅)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${
        isDarkTheme ? 'bg-gray-800/30' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className={`text-lg mb-8 leading-relaxed ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Ready to collaborate on a project or just want to chat about code and games? 
            I'm always open to new opportunities and connections!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:contact@clicky.dev"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="https://github.com/clicckyy"
              className={`flex items-center gap-3 px-6 py-3 border rounded-full transition-colors ${
                isDarkTheme 
                  ? 'border-gray-600 hover:border-purple-400 hover:text-purple-400' 
                  : 'border-gray-300 hover:border-purple-500 hover:text-purple-500'
              }`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <div className={`p-4 rounded-lg border ${
            isDarkTheme 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              💡 Fun fact: I'm also available for Hypixel Bedwars parties! 
              <br />
              <span className="text-xs opacity-75">
                (Though I'll admit, Hypixel can be frustrating sometimes...)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-8 ${
        isDarkTheme ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="text-purple-400" size={16} />
            <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
              Made with passion by Clicky
            </span>
            <Star className="text-purple-400" size={16} />
          </div>
          <p className={`text-sm opacity-75 ${
            isDarkTheme ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2025 Clicky. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
