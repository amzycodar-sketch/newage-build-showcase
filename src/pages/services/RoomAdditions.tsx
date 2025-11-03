import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import exteriorImage from "@/assets/exterior-hero.jpg";

const RoomAdditions = () => {
  const features = [
    "Master suite additions",
    "Sunroom and conservatory construction",
    "Second-story additions",
    "Garage conversions",
    "In-law suites",
    "Home office extensions",
    "Mudroom additions",
    "Seamless architectural integration",
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
          <h1 className="text-white mb-6 animate-fade-in-up">Room Additions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Expand your living space with seamlessly integrated home additions
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={exteriorImage}
                alt="Room additions"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
            <div>
              <h2 className="mb-6">Expand Your Home</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Add valuable square footage to your home with professionally designed and
                constructed room additions that blend perfectly with your existing structure.
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

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Need More Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your room addition project and create a custom solution
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default RoomAdditions;
