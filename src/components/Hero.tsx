import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowRight, Smartphone, Shield, Download, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      
      {/* Background Decorative Neon Blurs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Available for Mobile Engineering Roles</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase font-mono">
                FLUTTER & ANDROID DEVELOPER
              </h2>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                Building Stunning <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                  Mobile Application
                </span> <br />
                Experiences
              </h1>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Hello! I'm <strong>{personalInfo.name}</strong>, a mobile systems engineer with {personalInfo.experienceYears} of expertise designing high-performance cross-platform solutions. I specialize in the <strong>Flutter framework, Dart, GetX, and Android SDK</strong>. I focus on creating pixel-perfect, secure, and performant user interfaces that elevate modern brands.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-2 border-y border-slate-900/80">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">{personalInfo.experienceYears}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Professional Experience</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">100+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Resolved Tickets</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">6+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Completed Projects</p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#interactive-simulator"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25 hover:from-cyan-400 hover:to-teal-500 transition-all active:scale-98"
              >
                <span>Launch Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-sm font-bold text-white transition-all active:scale-98"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-900/40 text-sm font-bold text-slate-400 hover:text-white transition-all active:scale-98"
              >
                <span>Explore Projects</span>
              </a>
            </div>

          </div>

          {/* Hero Visual Right */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame Decorator */}
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Absolutes for futuristic corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/30 rounded-br-2xl"></div>

              {/* Card Header Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">Contact Card</p>
                    <h3 className="font-display text-xl font-bold text-white leading-tight">Adarsh Tiwari</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>

                {/* Sub contacts list */}
                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2 py-1 border-b border-slate-900">
                    <Mail className="w-3.5 h-3.5 text-cyan-500/70" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 border-b border-slate-900">
                    <Phone className="w-3.5 h-3.5 text-emerald-500/70" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-slate-300">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Visual mini-screens layout (Floating visual layers) */}
              <div className="my-4 bg-slate-950/80 border border-slate-950 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 font-medium">Core Architecture</span>
                  <span className="text-emerald-400 font-mono font-bold">MVVM / Clean</span>
                </div>
                <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-900/30 text-cyan-400">Flutter</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-900/30 text-emerald-400">GetX</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">REST API</span>
                </div>
              </div>

              {/* Action Link to Resume */}
              <div className="pt-2 flex justify-between items-center text-xs border-t border-slate-900/60 mt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium font-mono"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium font-mono"
                >
                  <Download className="w-3 h-3" />
                  <span>Resume PDF</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
