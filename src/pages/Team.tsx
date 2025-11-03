import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "John Anderson",
      role: "Founder & CEO",
      bio: "With over 30 years of construction experience, John leads our team with vision and dedication to excellence.",
      email: "john@newagebuild.com",
    },
    {
      name: "Sarah Mitchell",
      role: "Lead Designer",
      bio: "Sarah brings innovative design solutions and a keen eye for detail to every project she oversees.",
      email: "sarah@newagebuild.com",
    },
    {
      name: "Mike Rodriguez",
      role: "Project Manager",
      bio: "Mike ensures every project runs smoothly, on time, and exceeds client expectations with his expert coordination.",
      email: "mike@newagebuild.com",
    },
    {
      name: "Emily Chen",
      role: "Interior Designer",
      bio: "Emily's creative vision transforms spaces into beautiful, functional environments that clients love.",
      email: "emily@newagebuild.com",
    },
    {
      name: "David Thompson",
      role: "Master Carpenter",
      bio: "David's craftsmanship and attention to detail ensure the highest quality in every aspect of construction.",
      email: "david@newagebuild.com",
    },
    {
      name: "Lisa Williams",
      role: "Client Relations",
      bio: "Lisa ensures seamless communication and exceptional service throughout your remodeling journey.",
      email: "lisa@newagebuild.com",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Experienced professionals dedicated to bringing your remodeling vision to life
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift bg-card border-border"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">150+</div>
              <div className="text-muted-foreground">Combined Years Experience</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Licensed & Certified</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
