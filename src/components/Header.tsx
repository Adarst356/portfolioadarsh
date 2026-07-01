import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Simulator", href: "#interactive-simulator" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand/Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-display font-bold text-lg text-white tracking-wider">
              ADARSH<span className="text-cyan-400">.</span>TIWARI
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-[10px] text-cyan-400 font-mono font-medium">
              Flutter Developer
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Badges / Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-cyan-950 border border-cyan-800/50 text-cyan-400 hover:bg-cyan-900/60 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-900 px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-slate-900/80 px-3 flex items-center justify-around">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-400"
              title="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-emerald-400"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-400"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
