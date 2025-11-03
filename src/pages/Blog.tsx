import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Calendar, User, ArrowRight } from "lucide-react";
import kitchenImage from "@/assets/kitchen-hero.jpg";
import bathroomImage from "@/assets/bathroom-hero.jpg";
import exteriorImage from "@/assets/exterior-hero.jpg";

const Blog = () => {
  const posts = [
    {
      title: "10 Kitchen Design Trends for 2025",
      excerpt: "Discover the latest kitchen design trends that are transforming modern homes, from smart appliances to sustainable materials.",
      image: kitchenImage,
      author: "Sarah Mitchell",
      date: "March 15, 2025",
      category: "Kitchen",
    },
    {
      title: "How to Plan Your Bathroom Remodel Budget",
      excerpt: "A comprehensive guide to understanding costs and allocating your budget for a successful bathroom renovation project.",
      image: bathroomImage,
      author: "Mike Rodriguez",
      date: "March 10, 2025",
      category: "Bathroom",
    },
    {
      title: "Boost Your Home's Curb Appeal: Exterior Tips",
      excerpt: "Simple yet effective ways to enhance your home's exterior and increase property value with strategic improvements.",
      image: exteriorImage,
      author: "John Anderson",
      date: "March 5, 2025",
      category: "Exterior",
    },
    {
      title: "Choosing the Right Countertop Material",
      excerpt: "Compare granite, quartz, marble, and other popular countertop materials to find the perfect fit for your kitchen.",
      image: kitchenImage,
      author: "Emily Chen",
      date: "February 28, 2025",
      category: "Kitchen",
    },
    {
      title: "Basement Finishing: Waterproofing Essentials",
      excerpt: "Protect your investment with proper waterproofing techniques before finishing your basement space.",
      image: bathroomImage,
      author: "David Thompson",
      date: "February 20, 2025",
      category: "Basement",
    },
    {
      title: "Energy-Efficient Home Upgrades That Pay Off",
      excerpt: "Discover remodeling upgrades that reduce energy costs and provide long-term savings for homeowners.",
      image: exteriorImage,
      author: "Lisa Williams",
      date: "February 15, 2025",
      category: "General",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Remodeling Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Expert tips, trends, and insights for your home remodeling journey
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift group bg-card border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto font-semibold group">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
