import {
  // Github,
  ExternalLink,
  Zap,
  Cpu,
  Terminal,
  ShieldCheck,
} from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group
        relative
        bg-white/5
        backdrop-blur-md
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-500/40
        hover:shadow-2xl
        hover:shadow-emerald-500/10
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-emerald-500/5
          to-transparent
          pointer-events-none
        "
      />

      <div className="p-8 relative z-10">
        {/* Top */}
        <div className="flex justify-between items-start mb-6">
          {/* Icon */}
          <div
            className="
              p-3
              bg-emerald-500/10
              rounded-2xl
              text-emerald-500
              group-hover:scale-110
              transition-transform
              duration-300
            "
          >
            {project.type === "Systems Engineering" ? (
              <Cpu className="w-6 h-6" />
            ) : (
              <Terminal className="w-6 h-6" />
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-3">
            <a
              href={project.github}
              target="_blank"
              className="
                text-slate-400
                hover:text-white
                transition-colors
              "
            >
              {/* <Github className="w-5 h-5" /> */}
            </a>

            <a
              href={project.live}
              target="_blank"
              className="
                text-slate-400
                hover:text-white
                transition-colors
              "
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            font-bold
            text-white
            mb-1
            transition-colors
            duration-300
            group-hover:text-emerald-400
          "
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p
          className="
            text-emerald-500/80
            font-mono
            text-sm
            mb-4
          "
        >
          {project.tagline}
        </p>

        {/* Description */}
        <p
          className="
            text-slate-400
            mb-6
            leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="
                flex
                items-center
                text-xs
                font-bold
                text-emerald-300
                bg-emerald-900/30
                px-3
                py-1
                rounded-lg
                border
                border-emerald-500/10
                group-hover:border-emerald-500/30
                transition-all
              "
            >
              <Zap className="w-3 h-3 mr-1" />
              {metric}
            </div>
          ))}
        </div>

        {/* Tech */}
        <div
          className="
            flex
            flex-wrap
            gap-2
            pt-6
            border-t
            border-white/5
          "
        >
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                text-xs
                font-mono
                text-slate-500
                uppercase
                tracking-tighter
                hover:text-emerald-400
                transition-colors
                cursor-default
              "
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">
          <div
            className="
              flex
              items-center
              text-xs
              text-slate-500
              font-mono
            "
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />
            {project.status}
          </div>

          <div
            className="
              text-xs
              text-emerald-400
              font-semibold
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            "
          >
            Explore →
          </div>
        </div>
      </div>

      {/* Ribbon */}
      {project.award && (
        <div
          className="
            absolute
            top-0
            right-0
            bg-emerald-500
            text-black
            px-6
            py-1
            rotate-45
            translate-x-6
            translate-y-2
            text-[10px]
            font-bold
            uppercase
            tracking-widest
            shadow-xl
          "
        >
          {project.award}
        </div>
      )}
    </div>
  );
}