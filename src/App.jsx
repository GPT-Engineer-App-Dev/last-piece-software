import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, LayoutDashboard, CreditCard, Info, Mail } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index";

const queryClient = new QueryClient();

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "Features", to: "#features", icon: <LayoutDashboard className="h-4 w-4" /> },
  { title: "Pricing", to: "#pricing", icon: <CreditCard className="h-4 w-4" /> },
  { title: "About Us", to: "#about", icon: <Info className="h-4 w-4" /> },
  { title: "Contact", to: "#contact", icon: <Mail className="h-4 w-4" /> },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;