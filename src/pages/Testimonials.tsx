import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      project: "Kitchen Remodeling",
      rating: 5,
      text: "New Age Build transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they stayed within our budget. Highly recommend!",
      location: "Beverly Hills, CA",
    },
    {
      name: "Michael Chen",
      project: "Bathroom Remodeling",
      rating: 5,
      text: "Professional, punctual, and perfect results. Our bathroom looks like a luxury spa now. The team was respectful of our home and cleaned up thoroughly every day.",
      location: "Malibu, CA",
    },
    {
      name: "Emily Rodriguez",
      project: "Basement Finishing",
      rating: 5,
      text: "We gained so much usable space! The basement is now our favorite room in the house. The project was completed on time and the craftsmanship is outstanding.",
      location: "Pasadena, CA",
    },
    {
      name: "David Thompson",
      project: "Exterior Remodeling",
      rating: 5,
      text: "Our home's curb appeal has increased dramatically. Neighbors constantly stop to compliment the new exterior. New Age Build exceeded all our expectations.",
      location: "Santa Monica, CA",
    },
    {
      name: "Jennifer Martinez",
      project: "Room Addition",
      rating: 5,
      text: "Adding a master suite was the best decision we made. The addition blends seamlessly with our existing home. The team was professional and communicative throughout.",
      location: "Glendale, CA",
    },
    {
      name: "Robert Wilson",
      project: "Interior Remodeling",
      rating: 5,
      text: "Open concept living at its finest! They removed walls and created a beautiful flowing space perfect for entertaining. Couldn't be happier with the results.",
      location: "West Hollywood, CA",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover-lift bg-card border-border relative"
              >
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 relative z-10">{testimonial.text}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">Join Our Satisfied Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of homeowners who have trusted us with their remodeling dreams
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
