import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Areas = () => {
  const areas = [
    { city: "Beverly Hills", description: "Luxury home remodeling in prestigious neighborhoods" },
    { city: "Malibu", description: "Coastal property renovations and upgrades" },
    { city: "Santa Monica", description: "Modern remodeling for beach-area homes" },
    { city: "Pasadena", description: "Historic home restoration and modernization" },
    { city: "Glendale", description: "Comprehensive residential remodeling services" },
    { city: "West Hollywood", description: "Contemporary home transformations" },
    { city: "Burbank", description: "Full-service home renovation specialists" },
    { city: "Culver City", description: "Expert kitchen and bathroom remodeling" },
    { city: "Manhattan Beach", description: "High-end coastal property renovations" },
    { city: "Calabasas", description: "Luxury home additions and remodeling" },
    { city: "Westwood", description: "University area home improvements" },
    { city: "Brentwood", description: "Upscale residential remodeling services" },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Service Areas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Proudly serving homeowners throughout Los Angeles County and surrounding areas
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="mb-2">50-Mile Service Radius</h2>
                  <p className="text-muted-foreground">
                    We provide professional remodeling services within a 50-mile radius of our main office
                    in Builder City. If you're unsure whether we serve your area, don't hesitate to contact us.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="p-6 hover-lift bg-card border-border"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{area.city}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">Don't See Your City Listed?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always expanding our service area. Contact us to check if we can serve your location.
          </p>
          <Card className="p-6 max-w-md mx-auto bg-card border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xl font-semibold">(555) 123-4567</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Call us to discuss your project</p>
            <Link to="/contact">
              <Button className="w-full bg-gradient-primary">
                Contact Us
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Areas;
