import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Award,
  ChevronRight,
  Trophy,
  GraduationCap,
  Network
} from "lucide-react";

// --- ASSET IMPORTS ---
import techvrikshaImg from "../../assets/TechVrisksha.jpeg";
import gfgImg from "../../assets/Gfg.jpeg";
import geminiImg from "../../assets/projectExpo.jpeg";
import bcgImg from "../../assets/bcg.png"; 
import leetcode from "../../assets/leetcode.png";

// --- DATA ---
const EXPERIENCES = [
  {
    role: "Freelance Backend Developer",
    company: "Auth System for 10K+ Users",
    duration: "2026 jan - march",
    points: [
      "Designed JWT-based authentication with RBAC authorization protocols.",
      "Improved performance using Redis caching achieving 40% faster read operations.",
      "Hardened systems against SQL Injection and CSRF via rigorous sanitization.",
    ],
    colors: {
      node: "bg-cyan-400 shadow-[0_0_15px_#22d3ee]",
      borderHover: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
      glow: "from-cyan-500/5",
      textHover: "group-hover:text-cyan-400",
      badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
      icon: "text-cyan-500"
    }
  },
  {
    role: "Technical Lead",
    company: "College Projects & Hackathons",
    duration: "2023 - Ongoing",
    points: [
      "Led development for multiple hackathon-winning engineering projects.",
      "Managed backend architecture, deployment pipelines, and scalable APIs.",
      "Orchestrated system design from ideation to production-ready deployment.",
    ],
    colors: {
      node: "bg-emerald-400 shadow-[0_0_15px_#34d399]",
      borderHover: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
      glow: "from-emerald-500/5",
      textHover: "group-hover:text-emerald-400",
      badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      icon: "text-emerald-500"
    }
  },
  {
    role: "Data Science Virtual Intern",
    company: "BCG (Forage)",
    duration: "2025",
    points: [
      "Conducted data analytics and customer churn prediction modeling.",
      "Engineered features and visualized data insights for strategic consulting.",
      "Completed hands-on modules in Python, Data Science, and Machine Learning."
    ],
    colors: {
      node: "bg-blue-400 shadow-[0_0_15px_#60a5fa]",
      borderHover: "hover:border-blue-500/30 hover:shadow-blue-500/5",
      glow: "from-blue-500/5",
      textHover: "group-hover:text-blue-400",
      badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      icon: "text-blue-500"
    }
  },
  {
    role: "Technology Virtual Intern",
    company: "Electronics Art",
    duration: "2025-april",
    points: [
      "Completed engineering job simulation focused on software architecture.",
      "Analyzed technical requirements and optimized database structures.",
      "Developed client-facing technical solutions and system designs."
    ],
    colors: {
      node: "bg-fuchsia-400 shadow-[0_0_15px_#e879f9]",
      borderHover: "hover:border-fuchsia-500/30 hover:shadow-fuchsia-500/5",
      glow: "from-fuchsia-500/5",
      textHover: "group-hover:text-fuchsia-400",
      badge: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400",
      icon: "text-fuchsia-500"
    }
  },
  {
    role: "Full Stack Certification",
    company: "Backend + Frontend Systems",
    duration: "2025",
    points: [
      "Validated expertise in end-to-end web application development.",
      "Mastered modern frontend frameworks and robust backend architectures.",
      "Completed rigorous curriculum focusing on scalable engineering and deployment."
    ],
    colors: {
      node: "bg-purple-400 shadow-[0_0_15px_#c084fc]",
      borderHover: "hover:border-purple-500/30 hover:shadow-purple-500/5",
      glow: "from-purple-500/5",
      textHover: "group-hover:text-purple-400",
      badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      icon: "text-purple-500"
    }
  }
];

const AWARDS = [
  {
    title: "TechVrisha Winner",
    subtitle: "National Level Hackathon",
    year: "2025",
    image: techvrikshaImg,
    glow: "from-emerald-500/20",
  },
  {
    title: "GFG ProjectExpo Winner",
    subtitle: "Innovation & Engineering",
    year: "2025",
    image: gfgImg,
    glow: "from-cyan-500/20",
  },
  {
    title: "Gemini Buildathon Winner",
    subtitle: "AI Systems & Development",
    year: "2025",
    image: geminiImg,
    glow: "from-fuchsia-500/20",
  },
  {
    title: "BCG Data Science Experience",
    subtitle: "Customer Churn & ML Analytics",
    year: "2025",
    image: bcgImg,
    glow: "from-blue-500/20",
  },
  {
    title: "600+ DSA Problems Solved",
    subtitle: "LeetCode + GeeksForGeeks",
    year: "2024-current",
    image: leetcode,
    glow: "from-amber-500/20",
  }
];

// --- INTERSECTION OBSERVER COMPONENT FOR SCROLL ANIMATIONS ---
const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); 
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
      } 
    );
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16" 
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- 3D INTERACTIVE AWARD CARD ---
const AwardCard3D = ({ award }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative pl-10 group" style={{ perspective: "1000px" }}>
      {/* TIMELINE NODE */}
      <div className="absolute top-6 left-[-5px] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 group-hover:scale-150 transition-transform duration-300"></div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovering(true)}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovering ? "none" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className="
          bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden
          hover:border-white/30 transition-all duration-500 shadow-xl cursor-pointer
        "
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${award.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-0`} />

        {award.image && (
          <div className="overflow-hidden h-48 relative border-b border-white/10">
            <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src={award.image}
              alt={award.title}
              style={{ transform: "translateZ(20px)" }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}

        <div className="p-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">
                {award.title}
              </h3>
              <p className="text-slate-400 text-sm font-mono mt-1">
                {award.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-black bg-white px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {award.year}
            </span>
          </div>

          <div className="flex items-center text-slate-500 text-xs font-mono mt-4 uppercase tracking-widest group-hover:text-slate-300 transition-colors">
            <Trophy className="w-4 h-4 mr-2 text-emerald-500 group-hover:animate-bounce" />
            Achievement Unlocked
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN EXPERIENCE SECTION ---
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* ================= LEFT SIDE: EXPERIENCE ================= */}
        <div>
          <ScrollReveal delay={100}>
            <div className="flex items-center mb-12">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mr-4">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Professional <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/20 before:to-transparent ml-2">
            
            {EXPERIENCES.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 150} className="relative pl-10">
                
                {/* Dynamic Glowing Node */}
                <div className={`absolute top-6 left-[-4px] w-3 h-3 rounded-full animate-pulse z-10 ${exp.colors.node}`}></div>

                {/* Glass Card */}
                <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden ${exp.colors.borderHover}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-2">
                      <div>
                        <h3 className={`text-white font-bold text-2xl transition-colors ${exp.colors.textHover}`}>
                          {exp.role}
                        </h3>
                        <p className="text-slate-400 font-mono text-sm mt-1 flex items-center">
                          <Network className={`w-3 h-3 mr-2 ${exp.colors.icon}`} />
                          {exp.company}
                        </p>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono whitespace-nowrap h-fit ${exp.colors.badge}`}>
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="text-slate-300 space-y-4 font-mono text-sm">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start group/li">
                          <ChevronRight className={`w-4 h-4 mr-2 shrink-0 mt-0.5 group-hover/li:translate-x-1 transition-transform ${exp.colors.icon}`} />
                          <span className="leading-relaxed opacity-80 group-hover/li:opacity-100 transition-opacity">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE: EDUCATION & AWARDS ================= */}
        <div>
          <ScrollReveal delay={100}>
            <div className="flex items-center mb-12">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mr-4">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Education & <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">Recognition</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            
            <ScrollReveal delay={200}>
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center mr-5 shadow-inner">
                      <GraduationCap className="text-emerald-400 w-7 h-7 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl group-hover:text-emerald-400 transition-colors">
                        B.Tech in Computer Science
                      </h3>
                      <p className="text-slate-400 text-sm font-mono mt-1">
                        IMS Engineering College | <span className="text-slate-300">2023 - 2027</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-black/40 border border-white/5 rounded-2xl group-hover:border-emerald-500/20 transition-colors">
                      <span className="text-slate-500 font-mono text-xs uppercase tracking-widest block mb-1">Current CGPA</span>
                      <span className="text-emerald-400 font-bold text-2xl">8.7</span>
                    </div>
                    <div className="flex-1 p-4 bg-black/40 border border-white/5 rounded-2xl group-hover:border-emerald-500/20 transition-colors">
                      <span className="text-slate-500 font-mono text-xs uppercase tracking-widest block mb-1">Class XII</span>
                      <span className="text-emerald-400 font-bold text-2xl">94.16%</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="relative space-y-10 before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/50 before:via-transparent before:to-transparent ml-2 pt-4">
              {AWARDS.map((award, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <AwardCard3D award={award} />
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}