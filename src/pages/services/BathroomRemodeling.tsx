import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";
import bathroomImage from "@/assets/bathroom-hero.jpg";

const BathroomRemodeling = () => {
  const features = [
    "Walk-in shower installations",
    "Luxury soaking tubs",
    "Custom vanity design",
    "Premium tile and stone work",
    "Heated flooring systems",
    "Modern lighting fixtures",
    "Water-efficient plumbing",
    "Spa-like amenities",
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bathroomImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">Bathroom Remodeling</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Create your personal spa retreat with luxurious fixtures and elegant design
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={bathroomImage}
                alt="Bathroom remodeling"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
            <div>
              <h2 className="mb-6">Luxury Bathroom Design</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your bathroom into a spa-like sanctuary with premium materials,
                modern fixtures, and thoughtful design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/quote" className="inline-block mt-8">
                <Button size="lg" className="bg-gradient-primary">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Transform Your Bathroom Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore design options and receive a free estimate
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BathroomRemodeling;
