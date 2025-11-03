import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import basementImage from "@/assets/basement-hero.jpg";

const BasementFinishing = () => {
  const features = [
    "Home theater and entertainment rooms",
    "Guest suites with full bathrooms",
    "Home offices and study spaces",
    "Wet bars and kitchenettes",
    "Recreation and game rooms",
    "Waterproofing and moisture control",
    "Egress windows for safety",
    "Energy-efficient insulation",
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${basementImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">Basement Finishing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Unlock your home's potential with a beautiful finished basement
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Maximize Your Space</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your unfinished basement into functional living space perfect for
                entertainment, work, or relaxation.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={basementImage}
                alt="Basement finishing"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Finish Your Basement?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore design possibilities and get a free estimate
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BasementFinishing;
