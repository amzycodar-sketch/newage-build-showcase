import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical remodeling project take?",
      answer: "Project timelines vary based on scope and complexity. A bathroom remodel typically takes 2-4 weeks, while a kitchen remodel can take 4-8 weeks. Larger projects like room additions may take 3-6 months. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do I need to move out during the remodeling?",
      answer: "For most projects, you can stay in your home. We take precautions to minimize disruption and maintain clean work areas. However, for extensive whole-home remodels, temporary relocation may be more comfortable.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured. Our team holds all necessary certifications and we carry comprehensive liability insurance for your protection and peace of mind.",
    },
    {
      question: "How much will my remodeling project cost?",
      answer: "Costs vary based on project scope, materials, and finishes. We offer free consultations and detailed quotes. Kitchen remodels typically range from $25,000-$75,000, bathrooms from $15,000-$40,000. We work with various budgets and provide transparent pricing.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Absolutely. We manage all permits, inspections, and code compliance requirements. Our team has extensive experience navigating local regulations and ensuring everything meets building codes.",
    },
    {
      question: "What if I want to make changes during the project?",
      answer: "We understand that ideas evolve. Changes can be accommodated, though they may affect timeline and budget. We discuss all changes with you upfront and provide revised estimates before proceeding.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on our workmanship. Standard warranty is 2 years on labor and materials, with extended coverage available. Manufacturer warranties apply to appliances and fixtures.",
    },
    {
      question: "How do I choose the right materials and finishes?",
      answer: "Our design team guides you through material selection, considering your style preferences, budget, and functional needs. We provide samples and can visit showrooms together to ensure you're completely satisfied with your choices.",
    },
    {
      question: "What payment terms do you offer?",
      answer: "We typically require a deposit to begin, with progress payments at key milestones, and final payment upon completion. We offer flexible payment plans and can discuss financing options during your consultation.",
    },
    {
      question: "How do you handle unexpected issues?",
      answer: "We conduct thorough assessments to minimize surprises, but unexpected issues can arise in remodeling. We immediately communicate any discoveries, provide cost estimates, and get your approval before proceeding with solutions.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Find answers to common questions about our remodeling services and process
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
