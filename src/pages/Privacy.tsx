import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center mb-6">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg">
          <p>Last updated: March 2025</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, including name, email, phone number, and project details when you request quotes or contact us.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information to provide services, communicate with you, improve our offerings, and comply with legal obligations.</p>
          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with service providers who assist in our operations.</p>
          <h2>Contact Us</h2>
          <p>For privacy questions, contact us at privacy@newagebuild.com</p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
