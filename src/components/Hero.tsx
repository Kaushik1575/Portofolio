import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
      <ParticleField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side - Text Content */}
        <motion.div variants={item} className="space-y-8">
          <motion.div variants={item} className="space-y-4">
            <motion.span 
              variants={item}
              className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium"
            >
              👋 Hello, I'm
            </motion.span>
            
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Kaushik Das
              </span>
            </motion.h1>
            
            <motion.div 
              variants={item}
              className="text-2xl md:text-3xl text-slate-300 font-medium"
            >
              <TypeAnimation
                sequence={[
                  'Web Designer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="text-slate-400 text-lg leading-relaxed max-w-lg"
          >
            Crafting digital experiences that combine beautiful design with powerful functionality. 
            Passionate about creating websites and applications that users love.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-4">
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-emerald-500 text-white rounded-xl flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div 
          variants={item}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
            <motion.div
              className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl w-[350px] h-[450px]"
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/profile.jpg"
                alt="Kaushik Das - Web Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎨
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links - Fixed Position */}
      <motion.div 
        className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[
          { icon: Github, href: "https://github.com/Kaushik1575", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/kaushik-das-976875248", label: "LinkedIn" },
          { icon: Mail, href: "mailto:dask64576@gmail.com", label: "Email" },
          { icon: Instagram, href: "https://www.instagram.com/mr_unique_kaushik/", label: "Instagram" },
        ].map(({ icon: Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : "_blank"}
            rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <Icon size={20} className="text-slate-400 group-hover:text-purple-400" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};