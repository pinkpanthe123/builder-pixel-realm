import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Share2,
  MessageCircle,
  TrendingUp,
  Star,
  Users,
} from "lucide-react";

export default function Lifestyle() {
  const articles = [
    {
      id: 1,
      title: "10 Financial Habits That Will Transform Your Lifestyle in 2024",
      excerpt:
        "Discover the essential financial practices that successful people use to build wealth and create their dream lifestyle.",
      image: "/placeholder.svg",
      category: "Finance",
      readTime: "5 min read",
      likes: 234,
      shares: 89,
    },
    {
      id: 2,
      title:
        "The Art of Mindful Spending: How to Align Your Purchases with Your Values",
      excerpt:
        "Learn how to make conscious spending decisions that support your lifestyle goals and personal values.",
      image: "/placeholder.svg",
      category: "Mindfulness",
      readTime: "7 min read",
      likes: 456,
      shares: 123,
    },
    {
      id: 3,
      title: "Building Passive Income Streams for Ultimate Lifestyle Freedom",
      excerpt:
        "Explore proven strategies to create multiple income sources that work for you, even while you sleep.",
      image: "/placeholder.svg",
      category: "Investment",
      readTime: "10 min read",
      likes: 789,
      shares: 245,
    },
  ];

  const trends = [
    { topic: "Digital Nomad Lifestyle", growth: "+45%" },
    { topic: "Sustainable Living", growth: "+32%" },
    { topic: "Financial Independence", growth: "+78%" },
    { topic: "Work-Life Balance", growth: "+23%" },
    { topic: "Minimalism", growth: "+56%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  LifeStyle Hub
                </h1>
                <p className="text-xs text-gray-600">
                  Your Financial Wellness Journey
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Finance
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Wellness
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Trends
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Community
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transform Your Financial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Lifestyle
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover expert insights, trending topics, and community-driven
            content to elevate your financial wellness and lifestyle choices.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full">
            Explore Content
          </Button>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">
                Featured Articles
              </h3>
              <div className="flex space-x-2">
                <Badge variant="secondary">Trending</Badge>
                <Badge variant="outline">New</Badge>
              </div>
            </div>

            <div className="space-y-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-800">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {article.readTime}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3 hover:text-purple-600 cursor-pointer transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Share2 className="w-4 h-4" />
                            <span>{article.shares}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>Comments</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-600 hover:text-purple-700"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Trending Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trends.map((trend, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-gray-800">
                      {trend.topic}
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      {trend.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">125K+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2.4M</div>
                  <div className="text-sm text-gray-600">Articles Read</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-purple-100 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span>Weekly Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">
                  Get personalized financial lifestyle tips delivered to your
                  inbox every week.
                </p>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <span className="font-bold text-gray-800">LifeStyle Hub</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Empowering financial wellness through lifestyle transformation.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:mikebhai355@gmail.com" className="text-purple-600 hover:text-purple-700">
                    mikebhai355@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+18332518091" className="text-purple-600 hover:text-purple-700">
                    +1-833-251-8091
                  </a>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Address:</span><br />
                  1455 Market Street, Suite 600<br />
                  San Francisco, CA 94103<br />
                  United States
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Content</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Finance Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Lifestyle Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Investment Basics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Wellness
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Join Discussion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Expert Q&A
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 LifeStyle Hub. All rights reserved. Your trusted partner
              in financial wellness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
