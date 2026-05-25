// import React, { useState } from "react";
// import { FileText, Download, ArrowUpRight } from "lucide-react";

// export default function Resume() {
//   // 3D Tilt State
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     const card = e.currentTarget;
//     const box = card.getBoundingClientRect();
//     const x = e.clientX - box.left;
//     const y = e.clientY - box.top;

//     const centerX = box.width / 2;
//     const centerY = box.height / 2;

//     // Kept the rotation slightly lower (10 degrees) for this wider card to prevent text distortion
//     const rotateX = ((y - centerY) / centerY) * -10;
//     const rotateY = ((x - centerX) / centerX) * 10;

//     setTilt({ x: rotateX, y: rotateY });
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//     setTilt({ x: 0, y: 0 });
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   // Bottom stats array for clean mapping and multi-color support
//   const bottomStats = [
//     { label: "Backend Engineering", color: "bg-emerald-500", text: "text-emerald-400" },
//     { label: "AI Systems", color: "bg-cyan-500", text: "text-cyan-400" },
//     { label: "600+ DSA Problems", color: "bg-purple-500", text: "text-purple-400" },
//     { label: "Production Architecture", color: "bg-blue-500", text: "text-blue-400" },
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 4s ease infinite;
//         }
//       `}</style>

//       <section className="py-24 px-6 overflow-hidden">
//         <div className="max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
          
//           {/* 3D Interactive Resume Card */}
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             onMouseEnter={handleMouseEnter}
//             style={{
//               transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
//               transition: isHovering
//                 ? "none"
//                 : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
//               transformStyle: "preserve-3d",
//             }}
//             className="
//               relative
//               overflow-hidden
//               rounded-3xl
//               border
//               border-white/10
//               bg-white/[0.03]
//               backdrop-blur-xl
//               p-10
//               md:p-14
//               group
//               hover:border-emerald-500/30
//               transition-colors
//               duration-500
//               shadow-2xl
//             "
//           >
//             {/* Animated Multi-Color Glow Background */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-0
//                 group-hover:opacity-100
//                 transition-opacity
//                 duration-700
//                 bg-gradient-to-br
//                 from-emerald-500/20
//                 via-cyan-500/10
//                 to-blue-500/20
//                 animate-gradient-x
//                 pointer-events-none
//                 mix-blend-screen
//               "
//             />

//             {/* Top Container pushed forward in 3D Space */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 md:flex-row
//                 md:items-center
//                 md:justify-between
//                 gap-8
//                 relative
//                 z-10
//               "
//               style={{ transform: "translateZ(40px)" }}
//             >
//               {/* Left Content */}
//               <div className="space-y-5">
//                 {/* Badge */}
//                 <div
//                   className="
//                     inline-flex
//                     items-center
//                     px-4
//                     py-2
//                     rounded-full
//                     bg-white/5
//                     border
//                     border-white/10
//                     text-slate-300
//                     text-sm
//                     font-mono
//                     backdrop-blur-md
//                   "
//                 >
//                   <FileText className="w-4 h-4 mr-2 text-emerald-400" />
//                   Resume / CV
//                 </div>

//                 {/* Heading with Animated Gradient */}
//                 <div>
//                   <h2
//                     className="
//                       text-4xl
//                       md:text-5xl
//                       font-bold
//                       text-white
//                       tracking-tight
//                       leading-tight
//                       drop-shadow-md
//                     "
//                   >
//                     Want to explore my{" "}
//                     <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-gradient-x">
//                       experience
//                     </span>
//                     ?
//                   </h2>

//                   <p
//                     className="
//                       text-slate-300
//                       text-lg
//                       mt-4
//                       max-w-2xl
//                       leading-relaxed
//                       drop-shadow-sm
//                     "
//                   >
//                     View my complete resume including backend
//                     engineering projects, AI systems, hackathons,
//                     DSA achievements, and production-level
//                     development experience.
//                   </p>
//                 </div>
//               </div>

//               {/* Right Content (Buttons) pushed further forward for emphasis */}
//               <div 
//                 className="flex flex-col sm:flex-row gap-4"
//                 style={{ transform: "translateZ(60px)" }}
//               >
//                 {/* Open Resume Button */}
//                 <a
//                   href="/resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     group/btn
//                     px-8
//                     py-4
//                     rounded-2xl
//                     bg-gradient-to-r
//                     from-emerald-500
//                     to-cyan-500
//                     text-black
//                     font-bold
//                     text-lg
//                     hover:scale-105
//                     hover:shadow-emerald-500/30
//                     transition-all
//                     duration-300
//                     flex
//                     items-center
//                     justify-center
//                     shadow-xl
//                   "
//                 >
//                   <ArrowUpRight className="w-5 h-5 mr-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
//                   Open Resume
//                 </a>

//                 {/* Download Button */}
//                 <a
//                   href="/resume.pdf"
//                   download
//                   className="
//                     group/dl
//                     px-8
//                     py-4
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-black/30
//                     backdrop-blur-md
//                     text-white
//                     font-semibold
//                     text-lg
//                     hover:bg-white/10
//                     hover:border-white/20
//                     transition-all
//                     duration-300
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <Download className="w-5 h-5 mr-2 group-hover/dl:translate-y-0.5 transition-transform" />
//                   Download
//                 </a>
//               </div>
//             </div>

//             {/* Bottom Stats pushed slightly forward */}
//             <div
//               className="
//                 mt-12
//                 pt-8
//                 border-t
//                 border-white/10
//                 flex
//                 flex-wrap
//                 gap-6
//                 text-sm
//                 font-mono
//                 relative
//                 z-10
//               "
//               style={{ transform: "translateZ(20px)" }}
//             >
//               {bottomStats.map((stat, index) => (
//                 <div 
//                   key={index} 
//                   className="flex items-center group/stat cursor-default"
//                 >
//                   <span 
//                     className={`w-2 h-2 rounded-full ${stat.color} mr-2 group-hover/stat:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
//                   ></span>
//                   <span className={`text-slate-400 transition-colors duration-300 group-hover/stat:${stat.text}`}>
//                     {stat.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// src/Components/Sections/Resume.jsx

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, Environment, ContactShadows } from "@react-three/drei";
import { FileText, Download, ArrowUpRight } from "lucide-react";

// --- 3D SCENE COMPONENT ---
const ResumeScene = () => {
  const groupRef = useRef();

  // Bottom stats array
  const bottomStats = [
    { label: "Backend Engineering", color: "bg-emerald-500", text: "text-emerald-400" },
    { label: "AI Systems", color: "bg-cyan-500", text: "text-cyan-400" },
    { label: "600+ DSA Problems", color: "bg-purple-500", text: "text-purple-400" },
    { label: "Production Architecture", color: "bg-blue-500", text: "text-blue-400" },
  ];

  // Smoothly interpolate the 3D rotation based on mouse coordinates
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // state.pointer holds normalized device coordinates (-1 to +1)
    const targetX = (state.pointer.x * Math.PI) / 12; // Max rotation on X axis
    const targetY = (state.pointer.y * Math.PI) / 15; // Max rotation on Y axis

    // Use lerp for buttery smooth spring-like movement
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      
      {/* --- FLOATING 3D GLASS SLAB --- */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh>
          {/* Rounded Box representing the physical card background */}
          <boxGeometry args={[11, 5, 0.1]} />
          <meshPhysicalMaterial 
            color="#0a0f16"
            metalness={0.8}
            roughness={0.2}
            transmission={0.5} // Glass-like transparency
            thickness={0.5}
            envMapIntensity={2}
          />
        </mesh>

        {/* --- WIREFRAME ACCENT DECORATION --- */}
        <mesh position={[0, 0, -0.1]}>
          <boxGeometry args={[11.2, 5.2, 0.1]} />
          <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.1} />
        </mesh>

        {/* --- EMBEDDED HTML UI --- */}
        {/* distanceFactor scales the DOM element relative to the 3D camera */}
        <Html 
          transform 
          position={[0, 0, 0.06]} // Placed slightly in front of the glass mesh
          distanceFactor={3.5}
          occlude="blending"
        >
          {/* We lock the width to ensure the layout behaves predictably inside WebGL */}
          <div className="w-[900px] p-10 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl group hover:border-emerald-500/30 transition-colors duration-500">
            
            {/* Animated Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 animate-gradient-x pointer-events-none mix-blend-screen rounded-3xl" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
              
              {/* Left Content */}
              <div className="space-y-5">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-mono backdrop-blur-md">
                  <FileText className="w-4 h-4 mr-2 text-emerald-400" />
                  Resume / CV
                </div>

                <div>
                  <h2 className="text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                    Want to explore my{" "}
                    <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-gradient-x">
                      experience
                    </span>
                    ?
                  </h2>

                  <p className="text-slate-300 text-lg mt-4 max-w-xl leading-relaxed drop-shadow-sm">
                    View my complete resume including backend engineering projects, AI systems, hackathons, DSA achievements, and production-level development experience.
                  </p>
                </div>
              </div>

              {/* Right Content (Buttons) */}
              <div className="flex flex-col gap-4 relative z-20">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-lg hover:scale-105 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center shadow-xl"
                >
                  <ArrowUpRight className="w-5 h-5 mr-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  Open Resume
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="group/dl px-8 py-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2 group-hover/dl:translate-y-0.5 transition-transform" />
                  Download
                </a>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm font-mono relative z-10">
              {bottomStats.map((stat, index) => (
                <div key={index} className="flex items-center group/stat cursor-default">
                  <span className={`w-2 h-2 rounded-full ${stat.color} mr-2 group-hover/stat:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.3)]`}></span>
                  <span className={`text-slate-400 transition-colors duration-300 group-hover/stat:${stat.text}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </Html>
      </Float>
    </group>
  );
};

// --- MAIN WRAPPER EXPORT ---
export default function Resume() {
  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>

      <section className="h-[800px] w-full relative overflow-hidden bg-[#02050a]">
        
        {/* THREE.JS CANVAS */}
        <Canvas 
          camera={{ position: [0, 0, 7], fov: 45 }}
          dpr={[1, 2]} // Optimizes rendering for high DPI displays (Retina/Mobile)
          className="w-full h-full cursor-pointer"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          
          {/* Renders environment map for the glass reflections */}
          <Environment preset="city" />
          
          <ResumeScene />
          
          {/* Soft shadow underneath the floating object */}
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Canvas>

      </section>
    </>
  );
}