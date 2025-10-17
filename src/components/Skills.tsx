import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Code2, FileCode2, FileJson, Cpu, Boxes, Brain, Network, Github, Github as Git, Database } from 'lucide-react';

interface Skill {
  name: string;
  progress: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Java', progress: 75, icon: <Coffee /> },
  { name: 'Python', progress: 80, icon: <FileCode2 /> },
  { name: 'C', progress: 70, icon: <Code2 /> },
  { name: 'HTML', progress: 85, icon: <FileJson /> },
  { name: 'CSS', progress: 80, icon: <Cpu /> },
  { name: 'JavaScript', progress: 75, icon: <Boxes /> },
  { name: 'React', progress: 65, icon: <Brain /> },
  { name: 'Node.js', progress: 70, icon: <Network /> },
  { name: 'MongoDB', progress: 60, icon: <Database /> },
  { name: 'MySQL', progress: 65, icon: <Database /> },
  { name: 'GitHub', progress: 85, icon: <Github /> },
  { name: 'Git', progress: 80, icon: <Git /> },
];

const SkillCard = ({ skill, variants }: { skill: Skill; variants: any }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="bg-surface/40 rounded-lg p-6 group hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:border-purple-500 border border-transparent"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-slate-400 group-hover:text-purple-500 transition-colors duration-300">
          {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{skill.name}</h3>
      </div>
      
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-purple-500 rounded-full"
        />
      </div>
      <div className="mt-2 text-right text-sm text-slate-400 font-medium">
        {skill.progress}%
      </div>
    </motion.div>
  );
};

export const Skills = () => {
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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
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
            className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6"
          >
            🛠️ Technical Expertise
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            Each skill represents countless hours of learning and building.
          </p>
        </motion.div>

        {/* Skills Grid with Different Layout */}
        <div className="space-y-16">
          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-200 text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Programming Languages
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        size: 48,
                        className: "text-purple-400 group-hover:text-purple-300"
                      })}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{skill.name}</h4>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-400">{skill.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Technologies */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-200 text-center mb-8">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Web Technologies
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.slice(4, 8).map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        size: 48,
                        className: "text-emerald-400 group-hover:text-emerald-300"
                      })}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{skill.name}</h4>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-400">{skill.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Others */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-200 text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Tools & Others
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.slice(8).map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        size: 48,
                        className: "text-slate-400 group-hover:text-purple-300"
                      })}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{skill.name}</h4>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-slate-500 to-purple-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-slate-400">{skill.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};