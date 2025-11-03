import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import interiorImage from "@/assets/interior-hero.jpg";

const InteriorRemodeling = () => {
  const features = [
    "Open concept floor plans",
    "Custom millwork and trim",
    "Flooring installation (hardwood, tile, carpet)",
    "Interior painting and wall treatments",
    "Built-in shelving and storage",
    "Lighting design and installation",
    "Crown molding and wainscoting",
    "Fireplace remodeling",
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${interiorImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">Interior Remodeling</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Reimagine your living spaces with modern design and expert craftsmanship
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={interiorImage}
                alt="Interior remodeling"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
            <div>
              <h2 className="mb-6">Transform Your Living Spaces</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create beautiful, functional interiors that reflect your style and enhance
                your daily living experience.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/quote" className="inline-block mt-8">
                <Button size="lg" className="bg-gradient-primary">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InteriorRemodeling;
