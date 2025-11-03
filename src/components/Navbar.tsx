import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Kitchen Remodeling", path: "/services/kitchen" },
    { name: "Bathroom Remodeling", path: "/services/bathroom" },
    { name: "Exterior Remodeling", path: "/services/exterior" },
    { name: "Interior Remodeling", path: "/services/interior" },
    { name: "Basement Finishing", path: "/services/basement" },
    { name: "Room Additions", path: "/services/additions" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              New Age Build
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elegant p-2 animate-fade-in-up">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/projects") ? "text-primary" : "text-foreground"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/process"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/process") ? "text-primary" : "text-foreground"
              }`}
            >
              Our Process
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Link to="/quote">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Home
              </Link>
              <div className="px-4 py-2 font-medium text-sm text-muted-foreground">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="pl-8 pr-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/projects") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/about") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/process"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/process") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Our Process
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive("/contact") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Contact
              </Link>
              <Link to="/quote" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-primary">Get a Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
