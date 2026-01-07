import React from "react";

const Glow = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Center Glow */}
      <div
        className="
          absolute left-1/2 top-24
          -translate-x-1/2
          w-[900px] h-[500px]
          bg-gradient-to-tr
          from-rose-600/50 via-red-500/40 to-transparent
          rounded-full
          blur-[160px]
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute right-[-120px] bottom-[-120px]
          w-[500px] h-[300px]
          bg-gradient-to-bl
          from-red-500/50 to-transparent
          rounded-full
          blur-[140px]
        "
      />
    </div>
  );
};

export default Glow;
