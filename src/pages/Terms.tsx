import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center mb-6">Terms of Service</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg">
          <p>Last updated: March 2025</p>
          <h2>Agreement to Terms</h2>
          <p>By using our services, you agree to these terms. Please read them carefully.</p>
          <h2>Services</h2>
          <p>New Age Build provides residential remodeling services. All work is performed by licensed professionals.</p>
          <h2>Warranties</h2>
          <p>We provide a 2-year workmanship warranty on all projects, subject to the terms outlined in your contract.</p>
          <h2>Liability</h2>
          <p>We maintain comprehensive insurance coverage for all projects and comply with local building codes.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
