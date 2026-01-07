import SectionTitle from "../components/SectionTitle";

const HowItWorks = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black text-white">
      <SectionTitle
        text1="How It Works"
        text2="Create thumbnails in 3 simple steps"
        text3="From idea to publish-ready thumbnail in minutes."
      />

      <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-xl">1. Describe your idea</h3>
          <p className="mt-3 text-gray-400">Enter your video title, style, or mood in simple words.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-xl">2. AI creates thumbnails</h3>
          <p className="mt-3 text-gray-400">Our AI generates visually optimized thumbnails instantly.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold text-xl">3. Download & publish</h3>
          <p className="mt-3 text-gray-400">Pick your favorite and upload it to your platform.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;