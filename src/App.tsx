import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveDeviceDemo from './components/InteractiveDeviceDemo';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Dynamic Navigation Bar */}
      <Header />

      {/* Hero Presentation */}
      <Hero />

      {/* Interactive Mobile Device Simulator (Dubai Field Force App) */}
      <div className="bg-slate-950 border-t border-slate-900/80">
        <InteractiveDeviceDemo />
      </div>

      {/* Projects Showcase */}
      <Projects />

      {/* Skillsets Cloud Matrix */}
      <Skills />

      {/* Experience Timeline */}
      <Experience />

      {/* Contact & Recruitment Forms */}
      <Contact />

    </div>
  );
}
