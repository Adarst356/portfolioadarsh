import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-xs font-semibold text-cyan-400 font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Inquiries & Roles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in adding a dedicated, detail-oriented Flutter Engineer to your team? Let's discuss open positions or mobile project structures!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Details Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to reach out via email or phone. I usually respond within a few hours to schedule technical screening calls.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-mono">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 hover:border-slate-800 transition-all group"
              >
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-900/40 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email Address</p>
                  <p className="text-slate-200 mt-0.5 group-hover:text-cyan-400 transition-colors font-semibold truncate">{personalInfo.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 hover:border-slate-800 transition-all group"
              >
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Phone Number</p>
                  <p className="text-slate-200 mt-0.5 group-hover:text-emerald-400 transition-colors font-semibold">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-800/40">
                <div className="p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-900/80 flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Base Location</p>
                  <p className="text-slate-200 mt-0.5 font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex gap-4 pt-2">
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/40 hover:bg-slate-900 hover:text-white border border-slate-800/40 text-slate-400 flex items-center gap-2 text-xs font-mono font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/40 hover:bg-slate-900 hover:text-cyan-400 border border-slate-800/40 text-slate-400 flex items-center gap-2 text-xs font-mono font-medium transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 shadow-2xl relative">
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-400 text-[11px] font-mono tracking-wide uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-[11px] font-mono tracking-wide uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-[11px] font-mono tracking-wide uppercase mb-1">Message Content</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending || sentSuccess}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-400 hover:text-cyan-300 font-bold text-xs font-mono uppercase transition-all tracking-wider cursor-pointer"
                  >
                    {isSending ? (
                      <span>Transmitting Message...</span>
                    ) : sentSuccess ? (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        Delivered Successfully
                      </span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Credits */}
        <div className="pt-20 mt-12 border-t border-slate-900/60 text-center space-y-4">
          <p className="text-slate-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} Adarsh Tiwari. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-[10px] text-slate-600 font-mono">
            <span>Built using React, Tailwind CSS, and Motion</span>
            <span>•</span>
            <span>Deployable to GitHub Pages</span>
          </div>
        </div>

      </div>
    </section>
  );
}
