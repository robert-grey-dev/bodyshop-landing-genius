import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { Search, HelpCircle, BookOpen, MessageSquare, Headset, LifeBuoy } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      description: "New to Bodyshop? Start here",
      icon: <BookOpen className="w-6 h-6" />,
      articles: ["Quick Start Guide", "Basic Services", "Booking Your First Appointment"]
    },
    {
      title: "Services & Repairs",
      description: "Learn about our repair process",
      icon: <LifeBuoy className="w-6 h-6" />,
      articles: ["Repair Types", "Service Warranty", "Quality Standards"]
    },
    {
      title: "Support",
      description: "Need help? Contact our team",
      icon: <Headset className="w-6 h-6" />,
      articles: ["24/7 Support", "Emergency Services", "Contact Methods"]
    },
    {
      title: "FAQs",
      description: "Common questions answered",
      icon: <HelpCircle className="w-6 h-6" />,
      articles: ["Pricing", "Timeframes", "Insurance Claims"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="border-2 border-[#1A1F2C]/10 hover:border-[#1A1F2C]/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#1A1F2C] text-white">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left hover:bg-[#1A1F2C]/5"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        {article}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#1A1F2C] text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or concerns you may have.
          </p>
          <Button className="bg-white text-[#1A1F2C] hover:bg-white/90">
            <Headset className="mr-2" /> Contact Support
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;