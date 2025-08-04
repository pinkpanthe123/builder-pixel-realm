import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BotRouter } from "@/components/BotRouter";
import Index from "./pages/Index";
import Lifestyle from "./pages/Lifestyle";
import LoginError from "./pages/LoginError";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BotRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/login-error" element={<LoginError />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BotRouter>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Fix for React createRoot being called multiple times during HMR
const rootElement = document.getElementById("root")!;

// Check if root already exists to prevent double mounting
const existingRoot = (rootElement as any).__reactRoot;
if (existingRoot) {
  existingRoot.render(<App />);
} else {
  const root = createRoot(rootElement);
  (rootElement as any).__reactRoot = root;
  root.render(<App />);
}
