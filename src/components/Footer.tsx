import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-sky-500" size={18} />
                <a 
                  href="tel:+919040757683" 
                  className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                >
                  +91 90407 57683
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-500" size={18} />
                <a 
                  href="mailto:dask64576@gmail.com" 
                  className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                >
                  dask64576@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-500" size={18} />
                <span className="text-slate-400">
                  Odisha, India 756056
                </span>
              </li>
            </ul>
          </div>
          
          {/* Designed By */}
          <div className="flex flex-col items-start md:items-end">
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-gray-50 to-purple-500 bg-clip-text text-transparent hover:tracking-wider transition-all duration-300 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Kaushik
            </motion.a>
            <p className="text-slate-400 flex items-center gap-2">
              Designed with <Heart className="text-green-500" size={16} fill="currentColor" /> by Kaushik Das
            </p>
            <p className="text-slate-500 text-sm mt-4">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};