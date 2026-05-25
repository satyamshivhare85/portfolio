export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/[0.03]
        backdrop-blur-md
        border border-white/[0.05]
        rounded-3xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}