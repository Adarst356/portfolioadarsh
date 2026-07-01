import React from 'react';
import { experienceData, educationData } from '../data';
import { Briefcase, GraduationCap, Calendar, Star } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/40 text-xs font-semibold text-emerald-400 font-mono">
            <Star className="w-3.5 h-3.5" />
            <span>Career Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tracing my professional journey as a developer, from academic foundations in Computer Science to building scalable client-facing systems.
          </p>
        </div>

        {/* Combined Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Professional Experience timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-cyan-950/30 text-cyan-400 border border-cyan-900/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Work History
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-900">
              {experienceData.map((exp, idx) => (
                <div key={exp.id} className="relative pl-10 group">
                  
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:scale-110 transition-transform"></div>

                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/40 group-hover:border-slate-800 transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div>
                        <h4 className="font-display text-base font-bold text-white leading-snug">
                          {exp.role}
                        </h4>
                        <p className="text-xs text-cyan-400 font-medium font-mono mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 text-[10px] font-semibold text-slate-400 border border-slate-900 font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside leading-relaxed pl-1">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="marker:text-cyan-500">
                          <span className="text-slate-300 ml-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-emerald-950/30 text-emerald-400 border border-emerald-900/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Academic Qualification
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-900">
              <div className="relative pl-10 group">
                
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:scale-110 transition-transform"></div>

                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/40 group-hover:border-slate-800 transition-all space-y-3">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 text-[10px] font-semibold text-emerald-400 border border-emerald-900/30 font-mono">
                      <Calendar className="w-3 h-3" />
                      {educationData.period}
                    </span>
                    <h4 className="font-display text-base font-bold text-white pt-1 leading-snug">
                      {educationData.degree}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {educationData.institution}
                    </p>
                    <p className="text-xs font-bold text-emerald-400 font-mono pt-1">
                      {educationData.gpa}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1.5 border-t border-slate-900/80">
                    {educationData.details}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
