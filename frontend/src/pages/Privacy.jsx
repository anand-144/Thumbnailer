import SectionTitle from "../components/SectionTitle";

const Privacy = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black text-white">
      <SectionTitle
        text1="Privacy"
        text2="Privacy Policy"
        text3="Your privacy matters to us."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6 text-gray-400">
        <p>We collect minimal information such as your name, email, and usage data to provide and improve our services.</p>
        <p>Payment details are handled securely by trusted third-party providers.</p>
        <p>We do not sell or rent your personal data.</p>
        <p>You may request access, correction, or deletion of your data at any time.</p>
      </div>
    </section>
  );
};

export default Privacy;
