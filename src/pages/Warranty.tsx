import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Shield, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Warranty = () => {
  const coverage = [
    "All labor and workmanship",
    "Structural modifications",
    "Plumbing installations",
    "Electrical work",
    "Custom cabinetry installation",
    "Tile and flooring installation",
    "Paint and finishing work",
    "Hardware and fixture installation",
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Warranty & Protection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Your investment is protected with our comprehensive warranty coverage
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="p-8 mb-12 max-w-4xl mx-auto bg-card border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-primary rounded-full">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="mb-0">2-Year Workmanship Warranty</h2>
                <p className="text-muted-foreground">Standard on all remodeling projects</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              We stand behind our work with a comprehensive 2-year warranty covering all labor and craftsmanship.
              If any issues arise due to our workmanship, we'll make it right at no additional cost to you.
            </p>
            <h3 className="text-xl font-semibold mb-4">Coverage Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {coverage.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-lift bg-card border-border">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground">
                Complete warranty documentation provided upon project completion
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift bg-card border-border">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Insurance</h3>
              <p className="text-muted-foreground">
                Fully insured and bonded for your protection and peace of mind
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift bg-card border-border">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground">
                Ongoing support and service long after your project is complete
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-center mb-8">Manufacturer Warranties</h2>
          <p className="text-center text-muted-foreground mb-8">
            In addition to our workmanship warranty, all materials, appliances, and fixtures come with
            manufacturer warranties ranging from 1 year to lifetime coverage, depending on the product.
          </p>
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold mb-4">Common Manufacturer Warranty Periods:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Appliances: 1-5 years (varies by manufacturer)</li>
              <li>• Cabinetry: Limited lifetime warranty on most brands</li>
              <li>• Countertops: 10-25 years (depending on material)</li>
              <li>• Flooring: 15-50 years (depending on type)</li>
              <li>• Plumbing Fixtures: 5-10 years</li>
              <li>• Windows & Doors: 10-20 years</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Protected Investment, Peace of Mind</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your project with confidence knowing it's backed by comprehensive warranty coverage
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Warranty;
