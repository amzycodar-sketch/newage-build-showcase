import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import BathroomRemodeling from "./pages/services/BathroomRemodeling";
import ExteriorRemodeling from "./pages/services/ExteriorRemodeling";
import InteriorRemodeling from "./pages/services/InteriorRemodeling";
import BasementFinishing from "./pages/services/BasementFinishing";
import RoomAdditions from "./pages/services/RoomAdditions";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Team from "./pages/Team";
import Process from "./pages/Process";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Financing from "./pages/Financing";
import Warranty from "./pages/Warranty";
import Areas from "./pages/Areas";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/kitchen" element={<KitchenRemodeling />} />
          <Route path="/services/bathroom" element={<BathroomRemodeling />} />
          <Route path="/services/exterior" element={<ExteriorRemodeling />} />
          <Route path="/services/interior" element={<InteriorRemodeling />} />
          <Route path="/services/basement" element={<BasementFinishing />} />
          <Route path="/services/additions" element={<RoomAdditions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
