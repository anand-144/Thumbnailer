import SectionTitle from "../components/SectionTitle";

const faqs = [
  { q: "What is Thumbnailer?", a: "Thumbnailer is an AI-powered thumbnail generator that helps creators design eye-catching thumbnails in seconds without design skills." },
  { q: "How does the AI generate thumbnails?", a: "Our AI analyzes your prompt, style preferences, and intent to generate thumbnails optimized for clarity and clicks." },
  { q: "Do I need design experience?", a: "No. Thumbnailer is built for creators. Just describe your idea and the AI does the rest." },
  { q: "Which platforms are supported?", a: "Currently optimized for YouTube, Instagram, Shorts, and Reels." },
  { q: "Can I edit thumbnails?", a: "Yes. You can regenerate or download and edit externally." },
  { q: "Who owns the generated thumbnails?", a: "You do. All thumbnails generated are yours for commercial use." },
  { q: "Is my data safe?", a: "Yes. We do not sell your data. See our Privacy Policy for details." },
  { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription anytime." },
];

const Faq = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black text-white">
      <SectionTitle
        text1="FAQs"
        text2="Frequently Asked Questions"
        text3="Everything you need to know about using Thumbnailer."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-xl p-5 bg-white/5">
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="mt-2 text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
