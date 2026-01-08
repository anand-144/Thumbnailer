import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Genrate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-24 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-red-400/20 border border-rose-500/20 shadow-xl space-y-6">

              {/* Header */}
              <div className="text-white space-y-1">
                <h2 className="text-xl font-semibold">
                  Generate Your AI Thumbnail
                </h2>
                <p className="text-md font-medium text-gray-400">
                  Enter your video idea and let AI design a high-CTR thumbnail for you.
                </p>
              </div>

              {/* Inputs (add later) */}
              <div className="space-y-5">
                {/* TITLE INPUT */}
                <div className="space-y-2">
                  <label className="block text-md font-medium text-white p-2">Title or Topic</label>
                  <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={500}
                    placeholder="e.g., 10 Tips for Better Sleep"
                    className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />

                  <div className="flex justify-end">
                    <span className="text-xs text-zinc-400">{title.length}/500</span>
                  </div>
                </div>
              </div>

              {/* Button (ALWAYS VISIBLE) */}
              <button
                disabled={loading}
                className="
                  text-white text-[15px] w-full py-3.5 rounded-xl font-medium
                  bg-gradient-to-b from-rose-500 to-red-600
                  hover:from-rose-600 hover:to-red-700
                  shadow-lg shadow-red-600/30
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all cursor-pointer
                "
              >
                {loading ? "Generating…" : "Generate Thumbnail"}
              </button>

            </div>
          </div>

          {/* RIGHT SIDE (Preview later) */}
          <div className="hidden lg:block rounded-2xl border border-white/10 bg-white/5">
            {/* Thumbnail preview will go here */}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Genrate;
