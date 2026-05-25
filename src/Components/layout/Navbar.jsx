import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
          ? "bg-[#0a0f16]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "py-6"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">
          SATYAM_S
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </div>
    </nav>
  );
}