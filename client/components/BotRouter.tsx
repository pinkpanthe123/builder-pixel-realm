import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isBot, getBotRedirectPath, getUserRedirectPath } from '@/lib/botDetection';

interface BotRouterProps {
  children: React.ReactNode;
}

export function BotRouter({ children }: BotRouterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const checkAndRedirect = () => {
      const botDetected = isBot();
      const currentPath = location.pathname;

      if (botDetected && currentPath !== getBotRedirectPath()) {
        // Bot detected, redirect to lifestyle page
        navigate(getBotRedirectPath(), { replace: true });
      } else if (!botDetected && currentPath === getBotRedirectPath()) {
        // User detected on bot page, redirect to login
        navigate(getUserRedirectPath(), { replace: true });
      } else {
        // No redirect needed
        setIsRedirecting(false);
      }
    };

    // Small delay to ensure proper detection
    const timer = setTimeout(() => {
      checkAndRedirect();
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate, location.pathname]);

  // Show loading during redirect
  if (isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
