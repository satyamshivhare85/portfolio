// src/Components/Sections/Skills.jsx

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  Zap,
  Code2,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  BrainCircuit,
  Globe,
  Layers3,
  GitBranch,
  Cloud,
  Terminal,
  Workflow,
  Network,
  Bot,
} from "lucide-react";

// --- THREE.JS COMPONENT ---
// A floating, rotating industrial wireframe shape
const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Wireframe gives that backend/systems "under the hood" vibe */}
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </Float>
  );
};

// --- DATA ---
// Added specific neon GenZ color themes to each category
const SKILLS = [
  {
    title: "Languages",
    icon: <Code2 className="w-4 h-4 mr-2" />,
    color: "text-cyan-400",
    borderHover: "hover:border-cyan-500/50",
    glow: "from-cyan-500/10",
    badgeHover: "hover:border-cyan-500/40 hover:text-cyan-300",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    title: "Frontend Engineering",
    icon: <Layers3 className="w-4 h-4 mr-2" />,
    color: "text-fuchsia-400",
    borderHover: "hover:border-fuchsia-500/50",
    glow: "from-fuchsia-500/10",
    badgeHover: "hover:border-fuchsia-500/40 hover:text-fuchsia-300",
    skills: ["React.js", "Next.js 15", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    title: "Backend Engineering",
    icon: <Server className="w-4 h-4 mr-2" />,
    color: "text-emerald-400",
    borderHover: "hover:border-emerald-500/50",
    glow: "from-emerald-500/10",
    badgeHover: "hover:border-emerald-500/40 hover:text-emerald-300",
    skills: ["Node.js", "Express.js", "REST APIs", "Middleware", "Prisma ORM", "Zod Validation"],
  },
  {
    title: "Databases",
    icon: <Database className="w-4 h-4 mr-2" />,
    color: "text-blue-400",
    borderHover: "hover:border-blue-500/50",
    glow: "from-blue-500/10",
    badgeHover: "hover:border-blue-500/40 hover:text-blue-300",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Index Optimization", "Caching Systems"],
  },
  {
    title: "Systems Engineering",
    icon: <Cpu className="w-4 h-4 mr-2" />,
    color: "text-rose-400",
    borderHover: "hover:border-rose-500/50",
    glow: "from-rose-500/10",
    badgeHover: "hover:border-rose-500/40 hover:text-rose-300",
    skills: ["Multithreading", "Socket Programming", "TCP/IP", "Distributed Systems", "Concurrency", "Low Latency"],
  },
  {
    title: "Real-Time Networking",
    icon: <Network className="w-4 h-4 mr-2" />,
    color: "text-violet-400",
    borderHover: "hover:border-violet-500/50",
    glow: "from-violet-500/10",
    badgeHover: "hover:border-violet-500/40 hover:text-violet-300",
    skills: ["WebSockets", "Socket.io", "Pub/Sub Architecture", "Event-Driven", "Real-Time Sync"],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-4 h-4 mr-2" />,
    color: "text-amber-400",
    borderHover: "hover:border-amber-500/50",
    glow: "from-amber-500/10",
    badgeHover: "hover:border-amber-500/40 hover:text-amber-300",
    skills: ["TensorFlow.js", "OpenCV", "AI Inference Optimization", "Prompt Engineering", "LLM Integration"],
  },
  {
    title: "Security Engineering",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
    color: "text-red-400",
    borderHover: "hover:border-red-500/50",
    glow: "from-red-500/10",
    badgeHover: "hover:border-red-500/40 hover:text-red-300",
    skills: ["JWT", "RBAC", "OAuth 2.0", "CSRF Protection", "SQL Injection Prevention", "Secure Sessions"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-4 h-4 mr-2" />,
    color: "text-sky-400",
    borderHover: "hover:border-sky-500/50",
    glow: "from-sky-500/10",
    badgeHover: "hover:border-sky-500/40 hover:text-sky-300",
    skills: ["Docker", "CI/CD", "Linux", "GitHub Actions", "AWS Basics", "Containerized Deployment"],
  },
  {
    title: "Developer Tooling",
    icon: <Terminal className="w-4 h-4 mr-2" />,
    color: "text-lime-400",
    borderHover: "hover:border-lime-500/50",
    glow: "from-lime-500/10",
    badgeHover: "hover:border-lime-500/40 hover:text-lime-300",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Monaco Editor", "Debugging"],
  },
  {
    title: "Architecture & CS Core",
    icon: <Workflow className="w-4 h-4 mr-2" />,
    color: "text-orange-400",
    borderHover: "hover:border-orange-500/50",
    glow: "from-orange-500/10",
    badgeHover: "hover:border-orange-500/40 hover:text-orange-300",
    skills: ["System Design", "LLD", "HLD", "DBMS", "Operating Systems", "Computer Networks", "SOLID Principles"],
  },
  {
    title: "Competitive Programming",
    icon: <Bot className="w-4 h-4 mr-2" />,
    color: "text-indigo-400",
    borderHover: "hover:border-indigo-500/50",
    glow: "from-indigo-500/10",
    badgeHover: "hover:border-indigo-500/40 hover:text-indigo-300",
    skills: ["Data Structures", "Algorithms", "LeetCode", "Problem Solving", "Optimization", "Dynamic Programming"],
  },
];

export default function Skills() {
  return (
    <>
      {/* Custom Keyframes for entry animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
        
        {/* THREE.JS BACKGROUND CANVAS - Positioned behind the left column */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[600px] opacity-40 pointer-events-none z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AbstractShape />
          </Canvas>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* LEFT SIDE: Heading & Stats */}
            <div className="lg:w-[35%]">
              <div className="sticky top-32 space-y-8 animate-fade-in-up">
                
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                    Technical <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 italic">
                      Arsenal
                    </span>
                  </h2>
                  <p className="text-slate-400 leading-relaxed text-lg font-mono text-sm">
                    // Building production-grade systems focused on scalability, low latency, AI integration, and secure distributed engineering.
                  </p>
                </div>

                {/* PERFORMANCE BOX - GenZ Bento Style */}
                <div className="p-6 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h4 className="text-cyan-400 font-bold mb-6 flex items-center tracking-widest uppercase text-xs">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" />
                    Engineering Highlights
                  </h4>

                  <ul className="space-y-4 text-slate-400 text-sm font-mono">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-3">{"->"}</span>
                      <span>
                        Redis caching improved reads by <span className="text-white font-semibold">40%</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fuchsia-500 mr-3">{"->"}</span>
                      <span>
                        Optimized AI pipelines: <span className="text-white font-semibold">-35% latency</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3">{"->"}</span>
                      <span>
                        Designed systems for <span className="text-white font-semibold">10K+ users</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3">{"->"}</span>
                      <span>
                        Solved <span className="text-white font-semibold">600+ DSA problems</span>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* EXTRA BADGES */}
                <div className="flex flex-wrap gap-2">
                  {["Backend Engineer", "AI Systems", "Security First", "Real-Time Apps", "Cloud Native"].map((tag, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 text-xs font-mono hover:bg-white/[0.08] hover:text-white transition-all cursor-default"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Bento Grid of Skills */}
            <div className="lg:w-[65%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      group relative overflow-hidden rounded-[2rem] border border-white/10 
                      bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-500 
                      hover:-translate-y-1 ${item.borderHover} hover:shadow-2xl 
                      animate-fade-in-up
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated Multi-Color Glow based on category */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.glow} to-transparent pointer-events-none mix-blend-screen`}
                    />

                    {/* TITLE */}
                    <h3 className={`relative z-10 font-bold mb-6 flex items-center text-xs uppercase tracking-widest ${item.color}`}>
                      <span className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {item.icon}
                      </span>
                      {item.title}
                    </h3>

                    {/* SKILLS TAGS */}
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`
                            px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg 
                            text-xs font-medium text-slate-300 transition-all duration-300 
                            cursor-default ${item.badgeHover}
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}