import React from "react";
import { Mail, Code2, ArrowRight } from "lucide-react";

export default function CTA() {
  const SOCIAL_LINKS = [
    {
      name: "GitHub",
    //   icon: <Github className="w-5 h-5 mb-2" />,
      link: "https://github.com/satyamshivhare85",
      // Gray/White glow for GitHub
      hoverStyles: "hover:border-white/40 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
    {
      name: "LinkedIn",
    //   icon: <Linkedin className="w-5 h-5 mb-2" />,
      link: "www.linkedin.com/in/satyam-shivhare-5573852b4", // Update this link
      // Blue glow for LinkedIn
      hoverStyles: "hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-5 h-5 mb-2" />,
      link: "https://leetcode.com/satyamshivhare85", // Update this link
      // Amber/Yellow glow for LeetCode
      hoverStyles: "hover:border-amber-500/50 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          
          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-mono mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Open to Opportunities
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            Ready to build{" "}
            <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              production-grade
            </span>{" "}
            systems?
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mt-6 font-mono text-sm sm:text-base">
            // I'm looking for opportunities where I can apply my deep focus on performance, security, distributed systems, and scalable backend engineering.
          </p>

          {/* Primary Action Button (Email) */}
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:satyamshivhare229@gmail.com"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                px-10
                py-5
                rounded-full
                bg-white
                text-black
                font-bold
                text-lg
                overflow-hidden
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]
              "
            >
              {/* Button Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-500">
                <Mail className="w-5 h-5 mr-3" />
                Say Hello via Email
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-16 mb-8 opacity-50">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Or connect socially</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>

          {/* Social Links Grid */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex flex-col items-center justify-center
                  w-32 h-28
                  bg-white/[0.02] backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  text-slate-400
                  transition-all duration-300
                  hover:-translate-y-2
                  ${social.hoverStyles}
                `}
              >
                {social.icon}
                <span className="font-mono text-sm font-semibold tracking-wide">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}