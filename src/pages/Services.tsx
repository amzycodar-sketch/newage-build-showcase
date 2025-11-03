import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, Wrench, PaintBucket, Hammer, Home, Building, Plus } from "lucide-react";
import kitchenImage from "@/assets/kitchen-hero.jpg";
import bathroomImage from "@/assets/bathroom-hero.jpg";
import exteriorImage from "@/assets/exterior-hero.jpg";
import interiorImage from "@/assets/interior-hero.jpg";
import basementImage from "@/assets/basement-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Kitchen Remodeling",
      description: "Custom cabinets, countertops, and modern appliances for your dream kitchen",
      image: kitchenImage,
      link: "/services/kitchen",
      features: ["Custom Cabinetry", "Premium Countertops", "Modern Appliances", "Smart Layouts"],
    },
    {
      icon: PaintBucket,
      title: "Bathroom Remodeling",
      description: "Luxury fixtures, elegant tile work, and spa-like amenities",
      image: bathroomImage,
      link: "/services/bathroom",
      features: ["Walk-in Showers", "Luxury Fixtures", "Heated Floors", "Custom Vanities"],
    },
    {
      icon: Home,
      title: "Exterior Remodeling",
      description: "Siding, roofing, windows, and doors to enhance curb appeal",
      image: exteriorImage,
      link: "/services/exterior",
      features: ["New Siding", "Roof Replacement", "Energy Efficient Windows", "Landscaping"],
    },
    {
      icon: Hammer,
      title: "Interior Remodeling",
      description: "Living rooms, bedrooms, and open-concept redesigns",
      image: interiorImage,
      link: "/services/interior",
      features: ["Open Floor Plans", "Custom Millwork", "Flooring Updates", "Lighting Design"],
    },
    {
      icon: Building,
      title: "Basement Finishing",
      description: "Transform unfinished spaces into functional living areas",
      image: basementImage,
      link: "/services/basement",
      features: ["Entertainment Rooms", "Home Offices", "Guest Suites", "Storage Solutions"],
    },
    {
      icon: Plus,
      title: "Room Additions",
      description: "Expand your living space with seamless home additions",
      image: exteriorImage,
      link: "/services/additions",
      features: ["Master Suites", "Sunrooms", "Second Stories", "Garage Conversions"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive home remodeling solutions designed to transform every space in your home with
            quality craftsmanship and attention to detail
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift group bg-card border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex p-3 bg-primary rounded-full mb-2">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts to discuss your vision and receive a detailed project estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
