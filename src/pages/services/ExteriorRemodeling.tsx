import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import exteriorImage from "@/assets/exterior-hero.jpg";

const ExteriorRemodeling = () => {
  const services = [
    "Siding installation and replacement",
    "Roof repair and replacement",
    "Window and door installation",
    "Deck and patio construction",
    "Landscaping and hardscaping",
    "Exterior painting",
    "Gutters and drainage",
    "Energy-efficient upgrades",
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${exteriorImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">Exterior Remodeling</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Enhance your home's curb appeal and value with professional exterior renovations
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Complete Exterior Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                From new siding to modern windows, we provide comprehensive exterior remodeling
                services that improve aesthetics and energy efficiency.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={exteriorImage}
                alt="Exterior remodeling"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Boost Your Home's Curb Appeal</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your exterior remodeling project
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ExteriorRemodeling;
