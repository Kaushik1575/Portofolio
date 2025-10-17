import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  summary: string;
  codeUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Web App",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop",
    summary: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
    codeUrl: "https://github.com/kaushikdas/ecommerce-app",
    liveUrl: "https://www.thecollective.in/"
  },
  {
    title: "Task Management System",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    summary: "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking. Features drag-and-drop interface and notifications.",
    codeUrl: "https://github.com/kaushikdas/task-manager",
    liveUrl: "https://taskmanager.com/"
  },
  {
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1600&auto=format&fit=crop",
    summary: "Responsive weather application with location-based forecasts, interactive charts, and 7-day predictions. Built with JavaScript, HTML5, and CSS3.",
    codeUrl: "https://github.com/kaushikdas/weather-dashboard",
    liveUrl: "https://www.windy.com/?21.467,83.976,5"
  }
  
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden bg-surface/40 hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:border-sky-500 border border-transparent"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 font-medium">{project.summary}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="flex items-center gap-4 relative z-10"
        >
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            Code
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(71,85,105,0.3)] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Visit
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            🚀 Featured Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-emerald-500 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my skills in 
            web development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects with Different Layout */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Project Image */}
              <motion.div 
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-purple-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Project {index + 1}
                  </div>
                </div>
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View Code
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-400 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {index === 0 && ['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                  {index === 1 && ['React', 'Socket.io', 'CSS3', 'JavaScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                  {index === 2 && ['HTML5', 'CSS3', 'JavaScript', 'API'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};