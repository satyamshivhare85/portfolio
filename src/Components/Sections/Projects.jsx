// src/Components/Sections/Projects.jsx

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  ArrowUpRight,
  FolderGit2,
  ExternalLink,
  CalendarDays,
  PlayCircle,
} from "lucide-react";

// IMPORTANT: Ensure this path matches where you saved the data file
import { TOP_PROJECTS } from "../../data/projects.jsx";

// --- THREE.JS BACKGROUND COMPONENT ---
const CyberNodeShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

// --- 3D INTERACTIVE PROJECT CARD COMPONENT ---
const ProjectCard3D = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovering(true)}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovering
            ? "none"
            : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className={`
          group
          relative
          h-full
          flex
          flex-col
          p-8
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          overflow-hidden
          transition-all
          duration-500
          ${project.borderHover}
          hover:shadow-[0_0_50px_rgba(16,185,129,0.12)]
        `}
      >
        {/* Dynamic Glow */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br
            ${project.glow}
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            pointer-events-none
            mix-blend-screen
            z-0
          `}
        />

        {/* Grid Glow */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col h-full"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div
              className={`
                p-3 rounded-2xl bg-white/5 border border-white/10
                ${project.textHover}
                transition-colors duration-300 text-slate-400
              `}
            >
              {project.icon}
            </div>

            {project.award && (
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                🏆 {project.award}
              </span>
            )}
          </div>

          {/* Duration */}
          {project.duration && (
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
              <CalendarDays className="w-3.5 h-3.5" />
              {project.duration}
            </div>
          )}

          {/* Title */}
          <div className="mb-4">
            <h3
              className={`
                text-2xl font-bold text-white mb-2
                transition-colors duration-300
                ${project.textHover}
              `}
            >
              {project.title}
            </h3>

            <p className="text-sm font-mono text-slate-400 tracking-wide uppercase leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed text-sm mb-8 flex-grow">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="space-y-2 mb-6">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-center text-xs font-mono text-slate-400"
              >
                <span
                  className={`
                    w-1.5 h-1.5 rounded-full mr-2
                    bg-${project.color}-500
                    transition-transform
                    group-hover:scale-150
                  `}
                />
                {metric}
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="
                  px-2.5 py-1 rounded-md
                  bg-black/40 border border-white/5
                  text-[11px] font-medium text-slate-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-white/10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-xl
                  bg-white/5 border border-white/10
                  text-sm text-slate-300
                  hover:text-white hover:border-emerald-500/40
                  transition-all duration-300
                "
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-xl
                  bg-white/5 border border-white/10
                  text-sm text-slate-300
                  hover:text-white hover:border-cyan-500/40
                  transition-all duration-300
                "
              >
                Source Code
              </a>
            )}

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-xl
                  bg-white/5 border border-white/10
                  text-sm text-slate-300
                  hover:text-white hover:border-fuchsia-500/40
                  transition-all duration-300
                "
              >
                <PlayCircle className="w-4 h-4" />
                Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PROJECTS SECTION ---
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#02050a] relative overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <CyberNodeShape />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <div
              className="
                inline-flex items-center
                px-4 py-2 rounded-full
                bg-emerald-500/10
                border border-emerald-500/20
                text-emerald-400
                text-xs font-mono mb-6
              "
            >
              <FolderGit2 className="w-4 h-4 mr-2" />
              Featured Work
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Engineering{" "}
              <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Projects
              </span>
            </h2>

            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Deep dives into scalable backend systems, AI-powered platforms,
              distributed architectures, cloud runtimes, and high-performance
              engineering solutions.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {TOP_PROJECTS.map((project, index) => (
            <ProjectCard3D key={index} project={project} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/satyamshivhare85"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative inline-flex items-center justify-center
              px-8 py-4 rounded-full
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              text-white font-bold text-lg
              overflow-hidden
              transition-all duration-500
              hover:border-emerald-500/50
              hover:scale-105
            "
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative z-10 flex items-center">
              Explore All Projects

              <ArrowUpRight
                className="
                  w-5 h-5 ml-2
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                  text-slate-400
                  group-hover:text-emerald-400
                "
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}