interface LogoProps {
  className?: string;
  showText?: boolean;
  iconOnly?: boolean;
}

export default function Logo({
  className = "",
  showText = true,
  iconOnly = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* House / roof icon — recreates the Arsh Enterprises mark */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Chimney */}
        <path
          d="M10 10V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-text-primary"
        />
        {/* Roof — left slope (thin outline) */}
        <path
          d="M4 24L22 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-primary"
        />
        {/* Roof — right slope (bold filled, gold accent) */}
        <path
          d="M22 8L44 24H30L22 17V8Z"
          fill="currentColor"
          className="text-accent-gold"
        />
        {/* Window grid (2x2) */}
        <rect x="14" y="24" width="6" height="6" rx="1" fill="currentColor" className="text-text-primary" />
        <rect x="22" y="24" width="6" height="6" rx="1" fill="currentColor" className="text-text-primary" />
        <rect x="14" y="32" width="6" height="6" rx="1" fill="currentColor" className="text-text-primary" />
        <rect x="22" y="32" width="6" height="6" rx="1" fill="currentColor" className="text-text-primary" />
        {/* Base line */}
        <path
          d="M4 24H44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-text-primary/40"
        />
      </svg>

      {showText && !iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-text-primary">
            Arsh <span className="text-accent-gold">Enterprises</span>
          </span>
        </div>
      )}
    </div>
  );
}