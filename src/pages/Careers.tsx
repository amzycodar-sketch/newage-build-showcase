import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    { icon: Heart, title: "Health Benefits", description: "Comprehensive medical, dental, and vision insurance" },
    { icon: TrendingUp, title: "Career Growth", description: "Training programs and advancement opportunities" },
    { icon: Briefcase, title: "Competitive Pay", description: "Industry-leading wages and performance bonuses" },
    { icon: Users, title: "Great Team", description: "Work with experienced, supportive professionals" },
  ];

  const positions = [
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Builder City, CA",
      description: "Lead remodeling projects from concept to completion, managing timelines, budgets, and client relationships.",
    },
    {
      title: "Carpenter",
      type: "Full-time",
      location: "Builder City, CA",
      description: "Skilled carpenter needed for custom cabinetry, framing, and finish work on residential projects.",
    },
    {
      title: "Interior Designer",
      type: "Full-time",
      location: "Builder City, CA",
      description: "Creative designer to collaborate with clients on space planning, material selection, and design concepts.",
    },
    {
      title: "Electrician",
      type: "Full-time",
      location: "Builder City, CA",
      description: "Licensed electrician for residential remodeling projects, including new installations and upgrades.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Build your career with an industry leader committed to excellence and employee growth
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-center mb-4">Why Work With Us?</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              At New Age Build, we believe our employees are our greatest asset. We provide a supportive
              environment where talented professionals can thrive and grow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover-lift bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Current Openings</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="p-6 hover-lift bg-card border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-muted text-foreground rounded-full">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link to="/contact">
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Send us your resume and let's discuss how you can contribute to our success
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Submit Application
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
