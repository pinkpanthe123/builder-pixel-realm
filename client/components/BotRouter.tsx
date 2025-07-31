import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isBot, getBotRedirectPath } from '@/lib/botDetection';

interface BotRouterProps {
  children: React.ReactNode;
}

export function BotRouter({ children }: BotRouterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAndRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const botDetected = isBot();
      const currentPath = location.pathname;

      // Skip redirect if user is manually accessing with URL param
      if (urlParams.get('bot') !== null) {
        setIsChecking(false);
        return;
      }

      // Only redirect bots from login pages - be more conservative with detection
      const loginPaths = ['/', '/login-error'];
      if (botDetected && loginPaths.includes(currentPath)) {
        navigate(getBotRedirectPath(), { replace: true });
        return;
      }

      setIsChecking(false);
    };

    // Small delay to ensure proper detection
    const timer = setTimeout(() => {
      checkAndRedirect();
    }, 50);

    return () => clearTimeout(timer);
  }, [navigate, location.pathname]);

  // Show loading only during initial check
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
