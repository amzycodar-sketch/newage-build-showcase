import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Financing = () => {
  const options = [
    {
      icon: CreditCard,
      title: "Home Equity Loans",
      description: "Borrow against your home's equity with fixed interest rates and predictable monthly payments.",
      benefits: ["Fixed rates", "Tax deductible interest", "Larger loan amounts"],
    },
    {
      icon: TrendingUp,
      title: "Personal Loans",
      description: "Quick approval process with no home equity required, ideal for smaller projects.",
      benefits: ["Fast approval", "No collateral needed", "Flexible terms"],
    },
    {
      icon: DollarSign,
      title: "Credit Cards",
      description: "Convenient option for smaller renovations with rewards and promotional rates.",
      benefits: ["Earn rewards", "0% intro APR offers", "Build credit"],
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6 animate-fade-in-up">Financing Options</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Flexible financing solutions to make your remodeling dreams affordable
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {options.map((option, index) => (
              <Card key={index} className="p-6 hover-lift bg-card border-border">
                <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 max-w-4xl mx-auto bg-card border-border">
            <h2 className="text-center mb-6">Partner Financing Programs</h2>
            <p className="text-center text-muted-foreground mb-8">
              We've partnered with trusted lenders to offer competitive financing options with quick approval and flexible terms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Same-Day Approval</h4>
                  <p className="text-sm text-muted-foreground">Get approved quickly and start your project sooner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Competitive Rates</h4>
                  <p className="text-sm text-muted-foreground">Access to the best available interest rates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Flexible Terms</h4>
                  <p className="text-sm text-muted-foreground">Choose repayment terms that fit your budget</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">No Hidden Fees</h4>
                  <p className="text-sm text-muted-foreground">Transparent pricing with no surprises</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/quote">
                <Button size="lg" className="bg-gradient-primary">
                  Apply for Financing
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Financing;
