import React, { useState } from "react";
// Added 'X' icon for the close button
import { Mail, Code2, Phone, ArrowUpRight, Terminal, Play, X } from "lucide-react";
import video from "../../assets/video.mp4"; // Ensure this path is correct

export default function Footer() {
  // State to manage the video modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Social links data
  const SOCIAL_LINKS = [
    {
      name: "GitHub",
      // icon: <Github className="w-5 h-5" />,
      url: "https://github.com/satyamshivhare85",
      glow: "hover:text-white hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    },
    {
      name: "LinkedIn",
      // icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/satyam-shivhare-5573852b4",
      glow: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-5 h-5" />,
      url: "https://leetcode.com/satyamshivhare85",
      glow: "hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/5 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
  ];

  return (
    <>
      {/* --- VIDEO MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10">
          
          {/* Cross Button to close */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-50 border border-white/20"
            title="Close Video"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Video Container: Maintains aspect ratio, max bounds so it doesn't stretch */}
          <div className="relative w-full max-w-5xl max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex items-center justify-center">
            <video
              src={video}
              autoPlay
              controls
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* --- MAIN FOOTER --- */}
      <footer className="relative border-t border-white/10 bg-[#02050a] mt-20 pt-16">
        
        {/* Background Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-t-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          
          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            
            {/* LEFT: Video Preview & Trigger */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden bg-white/[0.02] transition-all duration-700 rounded-3xl border border-white/10 shadow-2xl h-[300px] lg:h-[400px] cursor-pointer"
            >
              
              {/* Silent looping preview in the background */}
              <video 
                autoPlay
                loop 
                muted
                playsInline 
                className="object-cover w-full h-full rounded-2xl opacity-70 group-hover:opacity-40 transition-opacity duration-700"
              >
                <source src={video} type="video/mp4" />
              </video>
              
              {/* Play Control Overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center transition-all duration-300">
                <div className="text-center flex flex-col items-center gap-4">
                  <div className="relative p-6 rounded-full transition-all duration-300 border-4 border-white/40 bg-white/10 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 shadow-2xl backdrop-blur-sm">
                    {/* Added ml-1 to visually center the play triangle */}
                    <Play className="w-14 h-14 text-white ml-1" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-white uppercase px-4 py-1.5 rounded-full border border-white/10 bg-black/60 shadow-lg group-hover:border-emerald-500/30">
                    Click to Watch Full Video
                  </span>
                </div>
              </div>

              {/* Overlay Gradient to blend bottom edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              
              {/* Status Badge over video */}
              <div className="absolute top-6 left-6 z-20 inline-flex items-center px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                <span className="text-white text-xs font-mono tracking-widest uppercase">System Online</span>
              </div>
            </div>

            {/* RIGHT: About Me & Quick Links */}
            <div className="flex flex-col justify-center">
              
              {/* Brand Logo & Name */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl text-black font-bold flex items-center justify-center text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  S
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Satyam Shivhare</h2>
                  <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest mt-1">Backend & Systems Engineer</p>
                </div>
              </div>

              {/* A Bit About Me */}
              <div className="mb-10">
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4 opacity-50 border-b border-white/10 pb-2 inline-block">
                  A Bit About Me
                </h4>
                <p className="text-slate-300 leading-relaxed text-lg mb-4">
                  I am a software engineering candidate focused on architecting <span className="text-white font-semibold">high-performance backend systems</span> and scalable distributed platforms. 
                </p>
                <p className="text-slate-400 text-sm font-mono leading-relaxed bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                  // Passionate about latency optimization, secure authentication structures, AI integrations, and solving complex algorithmic challenges (600+ DSA).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:satyamshivhare229@gmail.com" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Talk
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  View Resume
                  <ArrowUpRight className="w-4 h-4 ml-2 opacity-70" />
                </a>
              </div>

            </div>
          </div>

          {/* BOTTOM CONTACT & SOCIALS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            
            {/* Email */}
            <a 
              href="mailto:satyamshivhare229@gmail.com" 
              className="group flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">Email</p>
                <p className="text-slate-200 font-medium group-hover:text-emerald-400 transition-colors text-sm break-all">
                  satyamshivhare229@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:7054054037" 
              className="group flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">Phone</p>
                <p className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors text-sm">
                  +91 7054054037
                </p>
              </div>
            </a>

            {/* Socials Array */}
            <div className="flex justify-between sm:justify-start gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className={`
                    flex-1 sm:flex-none flex items-center justify-center w-16 h-16
                    rounded-2xl border border-white/5 bg-white/[0.02] 
                    text-slate-400 backdrop-blur-sm
                    transition-all duration-300 hover:-translate-y-2
                    ${link.glow}
                  `}
                >
                  {link.icon}
                </a>
              ))}
            </div>

          </div>

          {/* COPYRIGHT TERMINAL BAR */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5">
            <p className="text-slate-500 font-mono text-xs flex items-center">
              <Terminal className="w-3 h-3 mr-2 text-emerald-500" />
              ~/satyam_shivhare/portfolio $ exit
            </p>
            <p className="text-slate-600 font-mono text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}