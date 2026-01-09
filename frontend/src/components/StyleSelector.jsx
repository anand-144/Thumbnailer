import React from "react";
import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparkleIcon,
  SquareIcon,
} from "lucide-react";
import { thumbnailStyles } from "../assets/assets";

const StyleSelector = ({ value, onChange, isOpen, setIsOpen }) => {
  const styleDescriptions = {
    "Bold & Graphic":
      "Eye-catching colors, bold text, strong contrast for high CTR",
    Minimalist:
      "Simple layout, clean design, focused message",
    Photorealistic:
      "Realistic imagery with natural lighting and depth",
    Illustrated:
      "Creative illustrations, artistic and playful visuals",
    "Tech/Futuristic":
      "Modern UI, neon accents, futuristic tech vibes",
  };

  const styleIcons = {
    "Bold & Graphic": <SparkleIcon className="h-4 w-4 text-pink-400" />,
    Minimalist: <SquareIcon className="h-4 w-4 text-zinc-300" />,
    Photorealistic: <ImageIcon className="h-4 w-4 text-blue-400" />,
    Illustrated: <PenToolIcon className="h-4 w-4 text-emerald-400" />,
    "Tech/Futuristic": <CpuIcon className="h-4 w-4 text-purple-400" />,
  };

  return (
    <div className="relative space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Thumbnail Style
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border px-4 py-3 text-left transition bg-white/10 border-white/10 text-zinc-200 hover:bg-white/20"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-medium">
            {styleIcons[value]}
            <span>{value}</span>
          </div>
          <p className="text-xs text-zinc-400">
            {styleDescriptions[value]}
          </p>
        </div>

        <ChevronDownIcon
          className={`h-5 w-5 text-zinc-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-md border border-white/12 bg-black/80 backdrop-blur-xl shadow-lg">
          {thumbnailStyles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => {
                onChange(style);
                setIsOpen(false);
              }}
              className="flex w-full items-start gap-3 px-4 py-2 text-left text-zinc-200 transition hover:bg-white/10"
            >
              <div className="mt-0.5">
                {styleIcons[style]}
              </div>

              <div>
                <p className="font-medium">{style}</p>
                <p className="text-xs text-zinc-400">
                  {styleDescriptions[style]}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StyleSelector;
