export default function Privacy() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when
                you create an account, make a transaction, or contact us for
                support.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Personal identification information (name, email, phone
                  number)
                </li>
                <li>Financial information necessary for transactions</li>
                <li>Device and usage information</li>
                <li>Location data when you use our services</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>To provide and maintain our financial services</li>
                <li>To process transactions and send related information</li>
                <li>To communicate with you about our services</li>
                <li>To detect and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell or rent your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist our operations</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your
                personal information, including encryption, secure servers, and
                regular security audits.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact
                us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> mikebhai355@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +1-833-251-8091
                </p>
                <p>
                  <strong>Address:</strong> 1455 Market Street, Suite 600, San
                  Francisco, CA 94103
                </p>
              </div>
            </div>
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
