import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  History, 
  ArrowRight, 
  User, 
  Shield, 
  Wifi, 
  Battery, 
  Calendar,
  Loader2,
  Lock,
  Compass,
  Briefcase
} from 'lucide-react';

interface PunchLog {
  id: string;
  type: 'IN' | 'OUT';
  time: string;
  date: string;
  location: string;
  coordinates: string;
}

export default function InteractiveDeviceDemo() {
  const [activeTab, setActiveTab] = useState<'punch' | 'history' | 'stats'>('punch');
  const [isPunchedIn, setIsPunchedIn] = useState<boolean>(false);
  const [isPunching, setIsPunching] = useState<boolean>(false);
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [gpsCoords, setGpsCoords] = useState<string>("");
  const [gpsAddress, setGpsAddress] = useState<string>("");
  const [punches, setPunches] = useState<PunchLog[]>([
    {
      id: "p1",
      type: "IN",
      time: "08:02 AM",
      date: "30 Jun 2026",
      location: "Downtown Dubai Construction Zone C",
      coordinates: "25.2048° N, 55.2708° E"
    },
    {
      id: "p2",
      type: "OUT",
      time: "05:15 PM",
      date: "30 Jun 2026",
      location: "Downtown Dubai Construction Zone C",
      coordinates: "25.2045° N, 55.2705° E"
    }
  ]);

  const [simulatedTime, setSimulatedTime] = useState<string>("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSimulatedTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePunch = () => {
    setIsPunching(true);
    setGpsLoading(true);

    // Simulate real-time high-accuracy GPS fetch (Dubai locations)
    const dubaiLocations = [
      { name: "Downtown Dubai - Burj Tower Base Site", coords: "25.2048° N, 55.2708° E" },
      { name: "Dubai Marina Workforce Gate 4", coords: "25.0819° N, 55.1367° E" },
      { name: "Business Bay Sector-12 Infrastructure Project", coords: "25.1852° N, 55.2742° E" },
      { name: "Jumeirah District Site F", coords: "25.2155° N, 55.2289° E" }
    ];

    const randomLoc = dubaiLocations[Math.floor(Math.random() * dubaiLocations.length)];

    setTimeout(() => {
      setGpsCoords(randomLoc.coords);
      setGpsAddress(randomLoc.name);
      setGpsLoading(false);

      setTimeout(() => {
        const now = new Date();
        const newPunch: PunchLog = {
          id: `p-${Date.now()}`,
          type: isPunchedIn ? 'OUT' : 'IN',
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
          date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          location: randomLoc.name,
          coordinates: randomLoc.coords
        };

        setPunches([newPunch, ...punches]);
        setIsPunchedIn(!isPunchedIn);
        setIsPunching(false);
      }, 800);

    }, 1500);
  };

  return (
    <div id="interactive-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto px-4 py-12">
      {/* Left side text explanation */}
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-medium font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Dubai Project Feature
        </div>
        <h3 className="font-display text-3xl font-bold tracking-tight text-white">
          Interactive Flutter <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400">
            Field Force Simulator
          </span>
        </h3>
        <p className="text-gray-400 text-base leading-relaxed">
          I built a robust corporate <strong>Field Force & Attendance App</strong> styled for major contractors in <strong>Dubai</strong>. 
          To demonstrate my state management (<span className="text-cyan-400 font-mono text-sm">GetX</span>), caching, 
          and hardware integrations, I created this interactive virtual smartphone simulator.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-none p-2 rounded-lg bg-cyan-950/50 text-cyan-400 h-10 w-10 flex items-center justify-center border border-cyan-900/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Geo-Fenced Punch In/Out</h4>
              <p className="text-xs text-gray-400 mt-0.5">Simulates device GPS tracking with sub-3 meter precision check for authorized Dubai worksites.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-none p-2 rounded-lg bg-emerald-950/50 text-emerald-400 h-10 w-10 flex items-center justify-center border border-emerald-900/30">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Attendance Logs & History</h4>
              <p className="text-xs text-gray-400 mt-0.5">Maintains localized database history tables for shifts, overtime, and punch types.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-none p-2 rounded-lg bg-teal-950/50 text-teal-400 h-10 w-10 flex items-center justify-center border border-teal-900/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Offline Sync Mode</h4>
              <p className="text-xs text-gray-400 mt-0.5">Utilizes local storage tables to queue punches if cellular network drops in basement shafts.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-3 text-xs text-cyan-400/80 font-mono">
          <span className="animate-bounce">👉</span>
          <span>Click on the phone screen buttons to interact!</span>
        </div>
      </div>

      {/* Right side interactive phone */}
      <div className="lg:col-span-7 flex justify-center">
        <div className="relative mx-auto bg-slate-950 p-4 rounded-[3.2rem] shadow-[0_0_50px_rgba(6,182,212,0.15)] border-4 border-slate-800 ring-12 ring-slate-900 ring-offset-2 w-full max-w-[360px] aspect-[9/19] flex flex-col overflow-hidden">
          
          {/* Phone Top Notch/Camera & Ear Piece */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-4">
            <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800"></div>
            <div className="w-12 h-1 bg-slate-800 rounded"></div>
            <div className="w-2 h-2 rounded-full bg-slate-950"></div>
          </div>

          {/* Internal Phone Canvas Screen */}
          <div className="flex-1 rounded-[2.6rem] bg-slate-950 flex flex-col overflow-hidden border border-slate-900 relative text-white text-xs select-none">
            
            {/* Custom Flutter Header Status Bar */}
            <div className="h-10 pt-6 px-5 flex justify-between items-center text-[10px] font-mono font-medium text-slate-400 bg-slate-950 z-20">
              <span>Dubai GMT+4</span>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  GPS
                </span>
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* App Header (Dynamic title depending on action) */}
            <div className="px-4 py-3 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-900/60 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-200 leading-tight">Dubai Field Force</h5>
                  <p className="text-[9px] text-slate-500">v1.0.4 • Powered by GetX</p>
                </div>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-900/40 text-[9px] text-emerald-400 font-mono">
                Active
              </div>
            </div>

            {/* Simulator Screen Content (Scrollable but dynamic) */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 pb-16 bg-gradient-to-b from-slate-950 via-slate-950 to-cyan-950/20">
              
              <AnimatePresence mode="wait">
                {activeTab === 'punch' && (
                  <motion.div
                    key="punch-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* User Card */}
                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                          AT
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-slate-200 text-[11px]">Adarsh Tiwari</h6>
                          <p className="text-[9px] text-slate-500">ID: DF-99812 • Site Engineer</p>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-slate-800/40 grid grid-cols-2 gap-1 text-[9px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <Compass className="w-3 h-3 text-cyan-400" />
                          <span>Zone: Burj Downtown</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>Company: TFC Dubai</span>
                        </div>
                      </div>
                    </div>

                    {/* Clock Display */}
                    <div className="text-center py-2">
                      <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase font-mono">Live Clock (Dubai Time)</p>
                      <h4 className="text-2xl font-bold text-white font-mono mt-0.5 tracking-tight">{simulatedTime || "11:05:31 PM"}</h4>
                      <p className="text-[9px] text-cyan-400/80 font-mono mt-0.5 flex items-center justify-center gap-1">
                        <Calendar className="w-3 h-3" />
                        30 Jun 2026
                      </p>
                    </div>

                    {/* Big Interactive Button */}
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="relative">
                        {/* Pulse effect when punched in */}
                        {isPunchedIn && !isPunching && (
                          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
                        )}
                        {!isPunchedIn && !isPunching && (
                          <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"></div>
                        )}

                        <button
                          onClick={handlePunch}
                          disabled={isPunching}
                          className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300 shadow-xl active:scale-95 cursor-pointer ${
                            isPunchedIn 
                              ? 'bg-gradient-to-b from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 border-emerald-950 shadow-emerald-950/50' 
                              : 'bg-gradient-to-b from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 border-cyan-950 shadow-cyan-950/50'
                          }`}
                        >
                          {isPunching ? (
                            <Loader2 className="w-8 h-8 animate-spin text-white" />
                          ) : (
                            <>
                              <MapPin className="w-6 h-6 text-white mb-1" />
                              <span className="font-bold text-[11px] tracking-wider text-white">
                                {isPunchedIn ? "PUNCH OUT" : "PUNCH IN"}
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* GPS coordinates fetch display */}
                      <div className="mt-4 w-full min-h-[50px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {gpsLoading ? (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono bg-cyan-950/30 px-3 py-1.5 rounded-full border border-cyan-900/50"
                            >
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Fetching GPS (Accuracy: 1.2m)...</span>
                            </motion.div>
                          ) : gpsCoords ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              className="w-full text-center space-y-1"
                            >
                              <p className="text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-1 font-mono">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Punch Registered Successfully!
                              </p>
                              <p className="text-[9px] text-slate-400 font-mono truncate max-w-xs">{gpsAddress}</p>
                              <p className="text-[8px] text-slate-500 font-mono">{gpsCoords}</p>
                            </motion.div>
                          ) : (
                            <p className="text-[10px] text-slate-500 text-center italic">
                              {isPunchedIn ? "Punched In. Click button to check-out shift." : "System Idle. Ready for punch-in."}
                            </p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Quick site rules summary inside phone */}
                    <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/30 flex gap-2.5 items-start">
                      <Lock className="w-4 h-4 text-cyan-500/70 mt-0.5 flex-none" />
                      <div>
                        <h7 className="font-bold text-slate-300 text-[10px]">Active Geo-fence Rules</h7>
                        <p className="text-[9px] text-slate-500 mt-0.5 leading-relaxed">
                          Your physical position must remain inside the 200m radius of Sector C Downtown Burj Site to log attendance.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'history' && (
                  <motion.div
                    key="history-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center pb-1">
                      <span className="font-bold text-slate-300 text-[11px]">Attendance History</span>
                      <span className="text-[9px] text-slate-500">Showing last 4 entries</span>
                    </div>

                    <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                      {punches.map((p, index) => (
                        <div 
                          key={p.id}
                          className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/40 relative overflow-hidden"
                        >
                          <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                            p.type === 'IN' ? 'bg-cyan-500' : 'bg-amber-500'
                          }`}></div>
                          <div className="pl-1.5 flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                                  p.type === 'IN' 
                                    ? 'bg-cyan-950/80 border border-cyan-900 text-cyan-400' 
                                    : 'bg-amber-950/80 border border-amber-900 text-amber-400'
                                }`}>
                                  PUNCH {p.type}
                                </span>
                                <span className="text-[10px] font-bold text-slate-200 font-mono">{p.time}</span>
                              </div>
                              <p className="text-[9px] text-slate-400 mt-1 truncate max-w-[190px]">{p.location}</p>
                              <p className="text-[8px] text-slate-600 font-mono">{p.coordinates}</p>
                            </div>
                            <span className="text-[9px] text-slate-500 font-mono whitespace-nowrap">{p.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'stats' && (
                  <motion.div
                    key="stats-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <span className="font-bold text-slate-300 text-[11px]">Workforce Insights</span>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/40 text-center">
                        <p className="text-[9px] text-slate-500">Monthly Accuracy</p>
                        <h4 className="text-xl font-bold text-cyan-400 font-mono mt-0.5">99.8%</h4>
                        <span className="text-[8px] text-emerald-400 font-mono">100% In Geo-fence</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/40 text-center">
                        <p className="text-[9px] text-slate-500">Total Hours</p>
                        <h4 className="text-xl font-bold text-emerald-400 font-mono mt-0.5">188.5h</h4>
                        <span className="text-[8px] text-slate-500">30 Jun Period</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/30 space-y-2">
                      <span className="font-bold text-slate-300 text-[9px] block">Attendance Score Card</span>
                      <div className="space-y-1.5">
                        <div>
                          <div className="flex justify-between text-[8px] text-slate-400 mb-0.5">
                            <span>On-Time Arrival</span>
                            <span className="text-cyan-400 font-mono font-bold">96%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 rounded-full" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[8px] text-slate-400 mb-0.5">
                            <span>Battery Logs Compliance</span>
                            <span className="text-emerald-400 font-mono font-bold">100%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom Nav Bar (Dynamic active controls) */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-900/90 backdrop-blur-md border-t border-slate-800/50 flex justify-around items-center px-4 z-20">
              <button
                onClick={() => setActiveTab('punch')}
                className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                  activeTab === 'punch' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span className="text-[8px] font-semibold">Punch Clock</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                  activeTab === 'history' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <History className="w-4 h-4" />
                <span className="text-[8px] font-semibold">My Logs</span>
              </button>

              <button
                onClick={() => setActiveTab('stats')}
                className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                  activeTab === 'stats' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-[8px] font-semibold">Stats</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
