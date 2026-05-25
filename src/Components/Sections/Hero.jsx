import React, { useEffect, useState } from "react";
import {
  Terminal,
  ShieldCheck,
  Cpu,
  Code2,
  Award,
  Zap,
  Globe,
} from "lucide-react";

import profileImg from "../../assets/profile.jpeg";

const stats = [
  {
    icon: <Code2 className="w-5 h-5" />,
    value: 600,
    suffix: "+",
    label: "DSA Problems",
    color: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
    hoverBg: "hover:bg-cyan-500/10",
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: 8.7,
    suffix: "",
    label: "CGPA",
    color: "text-purple-400",
    hoverBorder: "hover:border-purple-500/30",
    hoverBg: "hover:bg-purple-500/10",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    value: 4,
    suffix: "+",
    label: "Hackathons",
    color: "text-amber-400",
    hoverBorder: "hover:border-amber-500/30",
    hoverBg: "hover:bg-amber-500/10",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    value: 10,
    suffix: "K+",
    label: "User Impact",
    color: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
    hoverBg: "hover:bg-blue-500/10",
  },
];

const Counter = ({ end, suffix, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <>
      {/* Custom CSS injected for animations (so you don't have to edit tailwind config) */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      <section id="home" className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center min-h-[85vh]">
            
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-fade-in-up inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono transition-colors duration-300 hover:bg-emerald-500/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for SDE Roles
              </div>

              {/* Heading */}
              <div className="space-y-5 animate-fade-in-up delay-100">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                  Satyam{" "}
                  <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-gradient-x">
                    Shivhare
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                  Software Engineering candidate focused on{" "}
                  <span className="text-white font-medium italic relative inline-block group">
                    high-performance backend systems
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  , distributed architectures, AI-integrated applications, and
                  production-grade scalable engineering.
                </p>
              </div>

              {/* About */}
              <div className="animate-fade-in-up delay-200 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-white/20 transition-colors duration-500 shadow-xl shadow-black/10">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Passionate about building scalable backend systems with a strong focus on
                  security, latency optimization, and infrastructure engineering. Experienced
                  in Node.js, distributed systems, authentication architectures,
                  AI-integrated platforms, and real-time event-driven applications.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-300">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-500 group cursor-pointer ${stat.hoverBorder} ${stat.hoverBg} hover:-translate-y-2`}
                  >
                    <div className={`${stat.color} mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 drop-shadow-md">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up delay-400">
                <div className="group flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-mono hover:-translate-y-1 hover:border-emerald-500/30 hover:text-emerald-300 transition-all cursor-default">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2 group-hover:animate-pulse" />
                  Security First
                </div>
                <div className="group flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-mono hover:-translate-y-1 hover:border-cyan-500/30 hover:text-cyan-300 transition-all cursor-default">
                  <Cpu className="w-4 h-4 text-cyan-500 mr-2 group-hover:animate-pulse" />
                  Latency Focused
                </div>
                <div className="group flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-mono hover:-translate-y-1 hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default">
                  <Terminal className="w-4 h-4 text-purple-500 mr-2 group-hover:animate-pulse" />
                  Systems Engineering
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (3D IMAGE CARD) */}
            <div className="relative animate-fade-in-up delay-500" style={{ perspective: "1000px" }}>
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: isHovering 
                    ? "none" 
                    : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  transformStyle: "preserve-3d",
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 h-[760px] shadow-2xl"
              >
                {/* Animated Multi-Color Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x z-10 pointer-events-none mix-blend-screen"></div>

                {/* IMAGE */}
                <img
                  src={profileImg}
                  alt="Satyam Shivhare"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  style={{ transform: "translateZ(0px)" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-[#0a0f16]/50 to-transparent pointer-events-none"></div>

                {/* Floating Content */}
                <div
                  className="absolute bottom-0 left-0 w-full p-8 z-20 pointer-events-none"
                  style={{ transform: "translateZ(60px)" }} 
                >
                  <div className="space-y-5">
                    
                    {/* Top Tag */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-xs font-bold tracking-widest font-mono">
                        SYSTEMS • BACKEND • AI
                      </span>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="text-4xl font-bold text-white tracking-tight shadow-black drop-shadow-lg">
                        Satyam Shivhare
                      </h3>
                      <p className="text-slate-200 text-lg mt-2 leading-relaxed drop-shadow-md">
                        Building scalable backend architectures, AI-driven systems,
                        and production-grade applications focused on performance.
                      </p>
                    </div>

                    {/* Mini Stats with Fast Animated Counters */}
                    <div 
                      className="grid grid-cols-3 gap-4 pt-4"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4 backdrop-blur-md group-hover:border-cyan-500/30 transition-colors duration-500">
                        <p className="text-cyan-400 text-2xl font-bold">
                          <Counter end={600} suffix="+" />
                        </p>
                        <p className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-widest">
                          DSA
                        </p>
                      </div>

                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4 backdrop-blur-md group-hover:border-purple-500/30 transition-colors duration-500">
                        <p className="text-purple-400 text-2xl font-bold">
                          <Counter end={4} suffix="+" />
                        </p>
                        <p className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-widest">
                          Wins
                        </p>
                      </div>

                      <div className="bg-black/50 border border-white/10 rounded-2xl p-4 backdrop-blur-md group-hover:border-blue-500/30 transition-colors duration-500">
                        <p className="text-blue-400 text-2xl font-bold">
                          <Counter end={10} suffix="K+" />
                        </p>
                        <p className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-widest">
                          Users
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

