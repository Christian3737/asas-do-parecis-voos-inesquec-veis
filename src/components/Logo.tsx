const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Wing icon */}
        <svg 
          viewBox="0 0 60 40" 
          className="w-12 h-8 fill-current"
          aria-hidden="true"
        >
          {/* Left wing */}
          <path d="M30 20 L5 35 Q0 30 5 25 L25 15 Q28 12 30 20Z" />
          {/* Right wing */}
          <path d="M30 20 L55 35 Q60 30 55 25 L35 15 Q32 12 30 20Z" />
          {/* Center body */}
          <ellipse cx="30" cy="20" rx="4" ry="6" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-wider">ASAS DO</span>
        <span className="font-display text-2xl tracking-wider">PARECIS</span>
      </div>
    </div>
  );
};

export default Logo;
