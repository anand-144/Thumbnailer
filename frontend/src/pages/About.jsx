import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black text-white">
      <SectionTitle
        text1="About"
        text2="Built for creators who want more clicks"
        text3="Thumbnailer helps creators generate high-performing thumbnails using AI — faster, smarter, and without design skills."
      />

      {/* SVG */}
      <div className="flex justify-center mt-14">
        <svg
          width="220"
          height="220"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          {/* Outer Rings */}
          <circle cx="100" cy="100" r="90" stroke="#FB7185" strokeWidth="1.5" opacity="0.4" />
          <circle cx="100" cy="100" r="65" stroke="#FB7185" strokeWidth="1.5" opacity="0.3" />
          <circle cx="100" cy="100" r="40" stroke="#FB7185" strokeWidth="1.5" opacity="0.25" />

          {/* Thumbnail Box */}
          <rect
            x="65"
            y="65"
            width="70"
            height="70"
            rx="14"
            stroke="#FB7185"
            strokeWidth="2"
          />

          {/* Play Icon */}
          <polygon
            points="92,85 92,115 118,100"
            fill="#FB7185"
          />

          {/* AI Sparks */}
          <circle cx="40" cy="100" r="2" fill="#FB7185" />
          <circle cx="160" cy="100" r="2" fill="#FB7185" />
          <circle cx="100" cy="40" r="2" fill="#FB7185" />
          <circle cx="100" cy="160" r="2" fill="#FB7185" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto mt-14 space-y-6 text-gray-400 text-lg text-center">
        <p>
          Thumbnailer is an AI-powered thumbnail generator designed for YouTubers,
          content creators, and marketers who want eye-catching visuals without
          spending hours designing.
        </p>

        <p>
          Our AI understands what grabs attention — bold visuals, clear focus,
          and high contrast — and generates thumbnails optimized for engagement.
        </p>

        <p>
          Whether you’re just starting out or scaling a channel, Thumbnailer
          helps you stand out and get more clicks.
        </p>

        <p className="text-gray-300 font-medium">
          Built with creators in mind. Powered by AI.
        </p>
      </div>
    </section>
  );
};

export default About;
