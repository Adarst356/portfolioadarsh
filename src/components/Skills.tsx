import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import { Search, Code2, Database, Brain, Terminal, Server, Sparkles, Filter } from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  // Map category to icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "Mobile Frameworks":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "State Management":
        return <Brain className="w-5 h-5 text-blue-400" />;
      case "Backend & APIs":
        return <Server className="w-5 h-5 text-purple-400" />;
      case "Databases & Storage":
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-xs font-semibold text-cyan-400 font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skillsets & Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A comprehensive overview of tools, architectures, databases, and languages I use to construct reliable production-ready mobile applications.
          </p>

          {/* Dynamic Interactive Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search tools (e.g. Flutter, GetX, Firestore)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => {
            // Filter skills in group based on search term
            const filteredSkills = group.skills.filter(skill => 
              skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
              group.category.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Hide whole group card if no skills match and search isn't empty
            if (filteredSkills.length === 0 && searchTerm !== '') return null;

            return (
              <div 
                key={group.category}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/40 hover:border-slate-800 transition-all shadow-xl group hover:shadow-[0_0_20px_rgba(6,182,212,0.02)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill) => {
                    const isMatched = searchTerm !== '' && skill.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono border transition-all ${
                          isMatched 
                            ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 scale-105" 
                            : "bg-slate-950/60 border-slate-900/80 text-slate-400 hover:text-white hover:border-slate-800"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {skillsData.every(group => 
          group.skills.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase())).length === 0
        ) && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-sm font-mono">No matching skills found for "{searchTerm}"</p>
          </div>
        )}

      </div>
    </section>
  );
}
