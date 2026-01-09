import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AspectRatio from "../components/AspectRatio";
import StyleSelector from "../components/StyleSelector";
import { colorSchemes } from "../assets/assets";
import ColorSchemeSelector from "../components/ColorSchemeSelector";

const Genrate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [colorSchemeId, setColorSchemeId] = useState(colorSchemes[0].id);
  const [style, setStyle] = useState("Bold & Graphic");
    const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

  return (
    <div className="pt-24 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-red-400/20 border border-rose-500/20 shadow-xl space-y-6">

              <div className="text-white space-y-1">
                <h2 className="text-xl font-semibold">
                  Generate Your AI Thumbnail
                </h2>
                <p className="text-md font-medium text-gray-400">
                  Enter your video idea and let AI design a high-CTR thumbnail.
                </p>
              </div>

              {/* TITLE */}
              <div className="space-y-2">
                <label className="block text-md font-medium text-white">
                  Title or Topic
                </label>

                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={500}
                  placeholder="e.g., 10 Tips for Better Sleep"
                  className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-pink-500"
                />

                <div className="flex justify-end">
                  <span className="text-xs text-zinc-400">
                    {title.length}/500
                  </span>
                </div>
              </div>

              {/* ASPECT RATIO */}
              <AspectRatio value={aspectRatio} onChange={setAspectRatio} />

              {/* Style Selector */}
              <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen}/>

              {/* Color Scheme Selector */}
              <ColorSchemeSelector  value={colorSchemeId}onChange={setColorSchemeId}/>

              {/* ADDITIONAL PROMPT */}
              <div className="space-y-2">
                <label className="block text-md font-medium text-white">
                  Additional Prompt{" "}
                  <span className="text-zinc-400 text-sm">(optional)</span>
                </label>

                <textarea
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  rows={3}
                  placeholder="Mood, style, elements..."
                  className="w-full px-4 py-3 rounded-lg border border-white/12 bg-white/10 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-medium text-white
                bg-gradient-to-b from-rose-500 to-red-600
                hover:from-rose-600 hover:to-red-700
                disabled:opacity-60 transition-all"
              >
                {loading ? "Generating…" : "Generate Thumbnail"}
              </button>

            </div>
          </div>

          {/* RIGHT PREVIEW */}
          {/* <div className="hidden lg:block rounded-2xl border border-white/10 bg-white/5" /> */}
        </div>
      </main>
    </div>
  );
};

export default Genrate;
