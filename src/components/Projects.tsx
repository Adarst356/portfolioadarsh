import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { 
  FolderDot, 
  CreditCard, 
  Users2, 
  MapPin, 
  ExternalLink, 
  Layers, 
  Sparkles,
  ArrowRight,
  Code
} from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'work' | 'fintech' | 'crm'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'work', label: 'Dubai Operations' },
    { id: 'fintech', label: 'Fintech / Wallets' },
    { id: 'crm', label: 'CRM / Management' }
  ];

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'fintech':
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'crm':
        return <Users2 className="w-5 h-5 text-purple-400" />;
      case 'work':
        return <MapPin className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-xs font-semibold text-cyan-400 font-mono">
            <FolderDot className="w-3.5 h-3.5" />
            <span>Project Portfolios</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Showcases
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed breakdown of production-ready applications, enterprise integrations, state management models, and security structures.
          </p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all border cursor-pointer ${
                  filter === cat.id 
                    ? "bg-cyan-500/10 border-cyan-400/80 text-cyan-400" 
                    : "bg-slate-900/30 border-slate-900/80 hover:border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-800 transition-all flex flex-col justify-between overflow-hidden relative group shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.01)] ${
                  project.category === 'work' ? 'ring-1 ring-cyan-500/20 bg-gradient-to-br from-slate-900/30 to-cyan-950/5' : ''
                }`}
              >
                {/* Glowing neon background elements for the highlight card */}
                {project.category === 'work' && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"></div>
                )}

                <div className="space-y-6">
                  {/* Category icon and banner tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-900">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-950 border border-slate-900 text-slate-400">
                      {project.category === 'work' ? 'Featured / Dubai Operations' : project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/80 font-mono font-medium">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                  {/* Bullet achievements */}
                  <div className="space-y-2 pt-2 border-t border-slate-900/60">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">Key Accomplishments</span>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-slate-300 leading-relaxed">
                          <span className="text-cyan-400 select-none flex-none mt-1">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="space-y-4 pt-6 mt-6 border-t border-slate-900/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] font-semibold text-slate-500 font-mono border border-slate-950">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link buttons */}
                  <div className="pt-2">
                    {project.id === 'proj-fieldforce' ? (
                      <a
                        href="#interactive-simulator"
                        className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 font-mono hover:text-cyan-300 transition-colors group/link"
                      >
                        <span>Run Live Simulator App</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="flex gap-4">
                        <span className="text-[11px] text-slate-600 font-mono font-medium flex items-center gap-1">
                          <Code className="w-3 h-3 text-slate-600" />
                          <span>Enterprise SDK Code</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
