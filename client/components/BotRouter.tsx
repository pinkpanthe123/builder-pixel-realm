import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isBot, getBotRedirectPath, getUserRedirectPath } from '@/lib/botDetection';

interface BotRouterProps {
  children: React.ReactNode;
}

export function BotRouter({ children }: BotRouterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const checkAndRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const botDetected = isBot();
      const currentPath = location.pathname;

      // Skip redirect if user is manually accessing with URL param or directly browsing
      if (urlParams.get('bot') !== null) {
        setIsRedirecting(false);
        return;
      }

      // Only redirect on initial load to root path
      if (currentPath === '/' && botDetected) {
        setIsRedirecting(true);
        navigate(getBotRedirectPath(), { replace: true });
      } else {
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
