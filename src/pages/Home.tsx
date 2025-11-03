import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-main.jpg";
import kitchenImage from "@/assets/kitchen-hero.jpg";
import bathroomImage from "@/assets/bathroom-hero.jpg";
import exteriorImage from "@/assets/exterior-hero.jpg";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter(setCount1, 500);
          animateCounter(setCount2, 1200);
          animateCounter(setCount3, 25);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (setter: (value: number) => void, target: number) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 30);
  };

  const services = [
    {
      title: "Kitchen Remodeling",
      image: kitchenImage,
      description: "Transform your kitchen into a modern culinary space with custom cabinetry and premium finishes.",
      link: "/services/kitchen",
    },
    {
      title: "Bathroom Remodeling",
      image: bathroomImage,
      description: "Create your personal spa retreat with luxurious fixtures and elegant tile work.",
      link: "/services/bathroom",
    },
    {
      title: "Exterior Remodeling",
      image: exteriorImage,
      description: "Enhance curb appeal with stunning siding, roofing, and landscaping solutions.",
      link: "/services/exterior",
    },
  ];

  const features = [
    { icon: Award, title: "Licensed & Insured", description: "Fully certified professionals" },
    { icon: Users, title: "Expert Team", description: "20+ years of experience" },
    { icon: TrendingUp, title: "Quality Guarantee", description: "100% satisfaction promise" },
    { icon: Star, title: "Top Rated", description: "5-star customer reviews" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-white mb-6 animate-fade-in-up font-extrabold">
            Build Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Expert home remodeling and construction services that transform your vision into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link to="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {count1}+
              </div>
              <div className="text-lg text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {count2}+
              </div>
              <div className="text-lg text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {count3}+
              </div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift border-border bg-card"
              >
                <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive remodeling solutions tailored to your unique needs and style preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="absolute bottom-4 left-4 text-white font-bold">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
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

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose New Age Build?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine decades of experience with innovative design and quality craftsmanship to
                deliver exceptional results on every project.
              </p>
              <div className="space-y-4">
                {[
                  "Licensed, bonded, and insured professionals",
                  "Transparent pricing with no hidden fees",
                  "Premium materials and modern techniques",
                  "On-time completion guarantee",
                  "Comprehensive warranty coverage",
                  "Dedicated project management",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-block mt-8">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={kitchenImage}
                alt="Quality construction"
                className="rounded-lg shadow-elegant w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your remodeling project today
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
              Request a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
