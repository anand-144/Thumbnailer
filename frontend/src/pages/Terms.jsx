import SectionTitle from "../components/SectionTitle";

const Terms = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black text-white">
      <SectionTitle
        text1="Legal"
        text2="Terms of Service"
        text3="Please read these terms carefully before using Thumbnailer."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6 text-gray-400">
        <p>By using Thumbnailer, you agree to comply with these terms.</p>
        <p>You are responsible for maintaining your account security.</p>
        <p>You own the thumbnails you generate, but the platform remains our property.</p>
        <p>We may update these terms periodically. Continued use means acceptance.</p>
      </div>
    </section>
  );
};

export default Terms;