export default function Terms() {
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
              <a href="#" className="text-[#0070ba] hover:text-[#005ea6] text-sm font-medium">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using cashyte.com, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use our service for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-700 mb-4">This license shall automatically terminate if you violate any of these restrictions:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Financial Services</h2>
              <p className="text-gray-700 mb-4">
                Our financial services are subject to additional terms and regulations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>All transactions are subject to verification</li>
                <li>We comply with federal banking regulations</li>
                <li>Account activity is monitored for security</li>
                <li>Fees may apply to certain services</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">User Account</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide accurate and complete information. 
                You are responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of unauthorized use</li>
                <li>Keeping your contact information current</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-red-900 mb-4">Prohibited Uses</h2>
              <p className="text-red-700 mb-4">You may not use our service:</p>
              <ul className="list-disc pl-5 space-y-2 text-red-700">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> mikebhai355@gmail.com</p>
                <p><strong>Phone:</strong> +1-833-251-8091</p>
                <p><strong>Address:</strong> 1455 Market Street, Suite 600, San Francisco, CA 94103</p>
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
