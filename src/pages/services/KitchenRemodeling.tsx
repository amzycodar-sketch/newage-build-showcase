import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";
import kitchenImage from "@/assets/kitchen-hero.jpg";

const KitchenRemodeling = () => {
  const features = [
    "Custom cabinet design and installation",
    "Premium countertop materials (granite, quartz, marble)",
    "High-end appliance installation",
    "Modern lighting solutions",
    "Backsplash tile work",
    "Flooring installation",
    "Plumbing and electrical updates",
    "Kitchen island design",
  ];

  const process = [
    { step: "1", title: "Consultation", description: "Discuss your vision and requirements" },
    { step: "2", title: "Design", description: "Create detailed plans and 3D renderings" },
    { step: "3", title: "Material Selection", description: "Choose cabinets, countertops, and finishes" },
    { step: "4", title: "Construction", description: "Expert installation and craftsmanship" },
    { step: "5", title: "Final Touches", description: "Quality inspection and finishing details" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kitchenImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">Kitchen Remodeling</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Transform your kitchen into a culinary masterpiece with custom design and premium finishes
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Complete Kitchen Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive kitchen remodeling services cover every aspect of your dream kitchen,
                from custom cabinetry to state-of-the-art appliances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                src={kitchenImage}
                alt="Kitchen remodeling"
                className="rounded-lg shadow-elegant hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach ensuring your kitchen remodel is completed on time and exceeds expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center hover-lift bg-card border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready for Your Dream Kitchen?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your vision and receive a detailed estimate
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default KitchenRemodeling;
