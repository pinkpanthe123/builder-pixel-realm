import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function Signup() {
  // Add Google Ads compliant meta tags
  React.useEffect(() => {
    document.title = "Sign Up - cashyte.com Financial Services";

    const addMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    addMeta(
      "description",
      "Create your secure cashyte.com account for professional financial services. Join our platform for secure banking and money management.",
    );
    addMeta(
      "keywords",
      "sign up, create account, financial services, secure banking, cashyte registration",
    );
    addMeta("contact", "mikebhai355@gmail.com");
    addMeta("phone", "+1-833-251-8091");
    addMeta("robots", "index, follow");
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="text-[#0070ba] hover:text-[#005ea6] font-semibold text-xl"
              >
                cashyte.com
              </a>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <a
                href="/"
                className="text-[#0070ba] hover:text-[#005ea6] text-sm font-medium"
              >
                Already have an account?
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
              Sign up for your account
            </h2>
            <p className="text-sm text-gray-600">
              Join thousands of users managing their finances securely
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <div className="text-sm font-medium text-green-800 mb-1">
                    ✅ Account Registration Submitted!
                  </div>
                  <div className="text-sm text-green-700 mb-2">
                    Thank you for your interest in our services.
                  </div>
                  <div className="text-sm text-green-700">
                    Please contact our support team at +1-833-251-8091 to
                    complete verification.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sign Up Form */}
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-[#0070ba] text-base"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-[#0070ba] focus:ring-[#0070ba] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-3 text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-[#0070ba] hover:text-[#005ea6]"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-[#0070ba] hover:text-[#005ea6]"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-base"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/"
                  className="text-[#0070ba] hover:text-[#005ea6] font-medium"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              By creating an account, you agree to our{" "}
              <a href="/terms" className="text-[#0070ba] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#0070ba] hover:underline">
                Privacy Policy
              </a>
              . Your information is protected with bank-level security.
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
            <a
              href="/privacy"
              className="hover:text-[#0070ba] transition-colors"
            >
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
