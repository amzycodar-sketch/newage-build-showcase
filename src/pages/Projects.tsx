import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import kitchenImage from "@/assets/kitchen-hero.jpg";
import bathroomImage from "@/assets/bathroom-hero.jpg";
import exteriorImage from "@/assets/exterior-hero.jpg";
import interiorImage from "@/assets/interior-hero.jpg";
import basementImage from "@/assets/basement-hero.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      image: kitchenImage,
      description: "Complete kitchen remodel with custom cabinetry and marble countertops",
      location: "Beverly Hills, CA",
    },
    {
      id: 2,
      title: "Luxury Spa Bathroom",
      category: "bathroom",
      image: bathroomImage,
      description: "Master bathroom renovation featuring walk-in shower and heated floors",
      location: "Malibu, CA",
    },
    {
      id: 3,
      title: "Contemporary Exterior Makeover",
      category: "exterior",
      image: exteriorImage,
      description: "Full exterior renovation with modern siding and landscaping",
      location: "Santa Monica, CA",
    },
    {
      id: 4,
      title: "Open Concept Living Space",
      category: "interior",
      image: interiorImage,
      description: "Interior remodel creating an open, flowing living area",
      location: "Pasadena, CA",
    },
    {
      id: 5,
      title: "Entertainment Basement",
      category: "basement",
      image: basementImage,
      description: "Basement finishing with home theater and wet bar",
      location: "Glendale, CA",
    },
    {
      id: 6,
      title: "Chef's Dream Kitchen",
      category: "kitchen",
      image: kitchenImage,
      description: "High-end kitchen with professional appliances",
      location: "West Hollywood, CA",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchens" },
    { id: "bathroom", label: "Bathrooms" },
    { id: "exterior", label: "Exteriors" },
    { id: "interior", label: "Interiors" },
    { id: "basement", label: "Basements" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Explore our portfolio of completed remodeling projects showcasing quality craftsmanship
            and innovative design solutions
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                variant={filter === cat.id ? "default" : "outline"}
                className={filter === cat.id ? "bg-primary" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-lift group bg-card border-border"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                  <Link to={`/projects/${project.id}`} className="inline-block mt-4">
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-6">Want Your Project Featured Next?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with expert craftsmanship and innovative design
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

export default Projects;
