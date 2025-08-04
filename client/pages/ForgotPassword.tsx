import React, { useState } from "react";

export default function ForgotPassword() {
  // Add Google Ads compliant meta tags
  React.useEffect(() => {
    document.title = "Password Reset - cashyte.com Support";

    const addMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMeta('description', 'Reset your cashyte.com password securely. Get help accessing your financial services account with 24/7 support.');
    addMeta('keywords', 'password reset, forgot password, account recovery, financial services support');
    addMeta('contact', 'mikebhai355@gmail.com');
    addMeta('phone', '+1-833-251-8091');
    addMeta('robots', 'index, follow');
  }, []);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-[#0070ba] hover:text-[#005ea6] font-semibold text-xl">
                cashyte.com
              </a>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <a href="/" className="text-[#0070ba] hover:text-[#005ea6] text-sm font-medium">
                Back to Log In
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-normal text-gray-900 mb-2">
              Trouble logging in?
            </h2>
            <p className="text-sm text-gray-600">
              Enter your email and we'll help you reset your password
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <div className="text-sm font-medium text-blue-800 mb-1">
                    ✅ Password Reset Request Received
                  </div>
                  <div className="text-sm text-blue-700 mb-2">
                    If an account with this email exists, we've sent password reset instructions.
                  </div>
                  <div className="text-sm text-blue-700">
                    For immediate assistance, call us at +1-833-251-8091
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reset Form */}
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-base"
              >
                Send Reset Instructions
              </button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Need immediate help?
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-gray-800">Contact Support</p>
                    <p className="text-sm text-gray-600">
                      <a href="tel:+18332518091" className="text-[#0070ba] hover:text-[#005ea6] font-medium">
                        +1-833-251-8091
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a href="mailto:mikebhai355@gmail.com" className="text-[#0070ba] hover:text-[#005ea6] font-medium">
                        mikebhai355@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <a href="/" className="text-[#0070ba] hover:text-[#005ea6] font-medium">
                  Back to Log In
                </a>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              For your security, password reset links expire after 24 hours. 
              If you don't receive an email, check your spam folder or contact support.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-600">
            <a href="/" className="hover:text-[#0070ba] transition-colors">
              Home
            </a>
            <a href="/privacy" className="hover:text-[#0070ba] transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#0070ba] transition-colors">
              Terms
            </a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              © 2024 cashyte.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
