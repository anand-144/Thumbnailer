import { useState } from "react";
import { useParams } from "react-router-dom";

const Generate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="pt-28 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 lg:pb-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-10">

            <div className={`space-y-6 ${id && "pointer-events-none opacity-70"}`}>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)] space-y-4">

                <div className="text-white">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Create Your Thumbnail
                  </h2>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    Describe your vision and let AI craft a scroll-stopping thumbnail
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />

          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;
