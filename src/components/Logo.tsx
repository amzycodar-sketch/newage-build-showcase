const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-end gap-0 ${className}`}>
      <div className="relative">
        <span className="text-4xl font-black text-primary leading-none">N</span>
      </div>
      <div className="relative -ml-1">
        <span className="text-4xl font-black text-accent leading-none transform translate-y-1">A</span>
      </div>
    </div>
  );
};

export default Logo;
