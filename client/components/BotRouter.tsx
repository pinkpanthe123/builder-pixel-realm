import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isBot, getBotRedirectPath } from "@/lib/botDetection";

interface BotRouterProps {
  children: React.ReactNode;
}

export function BotRouter({ children }: BotRouterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(false); // Changed to false - don't block by default
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const checkAndRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const currentPath = location.pathname;

      // Only check for bots on login pages
      const loginPaths = ["/", "/login-error"];
      if (!loginPaths.includes(currentPath)) {
        setIsChecking(false);
        return;
      }

      // ULTRA-CONSERVATIVE: Only redirect obvious search engines
      const botDetected = isBot();

      // Only redirect if we're absolutely certain it's a search engine bot
      if (botDetected && !hasRedirected) {
        console.log("Search engine bot detected, redirecting to lifestyle page");
        setHasRedirected(true);
        navigate(getBotRedirectPath(), { replace: true });
        return;
      }

      // DEFAULT: Always show login page for human users
      setIsChecking(false);
    };

    // Immediate check - prioritize showing login page
    checkAndRedirect();
  }, [navigate, location.pathname, hasRedirected]);

  // Minimal loading screen - only show briefly
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
