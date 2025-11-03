import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ClipboardCheck, Pencil, Hammer, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Process = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Initial Consultation",
      description: "We meet with you to discuss your vision, needs, and budget. Our experts provide professional recommendations and answer all your questions.",
      timeline: "1-2 hours",
    },
    {
      icon: Pencil,
      title: "Design & Planning",
      description: "Our design team creates detailed plans, 3D renderings, and material selections. We refine the design until it perfectly matches your vision.",
      timeline: "1-2 weeks",
    },
    {
      icon: ClipboardCheck,
      title: "Contract & Permits",
      description: "We finalize the contract with transparent pricing and handle all necessary permits and documentation for your project.",
      timeline: "1 week",
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Our skilled craftsmen bring your project to life with meticulous attention to detail. We maintain clear communication and keep the site clean.",
      timeline: "Varies by project",
    },
    {
      icon: CheckCircle,
      title: "Final Inspection",
      description: "We conduct a thorough walkthrough to ensure everything meets our high standards and your expectations. Any final adjustments are completed.",
      timeline: "1-2 days",
    },
    {
      icon: Star,
      title: "Project Completion",
      description: "You receive comprehensive warranty documentation and ongoing support. We're here for you long after the project is complete.",
      timeline: "Ongoing",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Our Process</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            A streamlined, transparent approach that ensures your remodeling project runs smoothly from start to finish
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 hover-lift bg-card border-border relative"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm text-primary">
                      <ClipboardCheck className="h-4 w-4" />
                      <span>Timeline: {step.timeline}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Transparent Pricing</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Communication</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold gradient-text mb-2">Zero</div>
              <div className="text-muted-foreground">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our proven process and bring your remodeling vision to life
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
