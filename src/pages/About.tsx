import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project we undertake",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication and transparent pricing in all our work",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority from start to finish",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern techniques and sustainable practices",
    },
  ];

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up">About New Age Build</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Building dreams, one home at a time for over 25 years
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 1998, New Age Build began with a simple mission: to transform houses into
                homes through exceptional craftsmanship and personalized service. What started as a
                small family business has grown into one of the region's most trusted remodeling
                contractors, completing over 500 projects with a 98% customer satisfaction rate.
              </p>
              <p>
                Our team of licensed professionals brings decades of combined experience in residential
                construction and remodeling. We pride ourselves on staying ahead of industry trends,
                utilizing the latest building technologies and sustainable practices to deliver
                results that exceed expectations.
              </p>
              <p>
                At New Age Build, we understand that remodeling your home is a significant investment.
                That's why we're committed to transparent communication, detailed project planning, and
                meticulous attention to every detail. Your vision becomes our blueprint for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-lift bg-card border-border">
                <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">25+</div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who have trusted us with their remodeling projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
