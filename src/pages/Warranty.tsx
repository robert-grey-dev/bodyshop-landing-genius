import Footer from "@/components/Footer";
import { Shield, Clock, CheckCircle, AlertCircle, Phone, Mail, MessageSquare, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Warranty = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const warrantyFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-[#9b87f5]" />,
      title: "Lifetime Warranty",
      description: "Our workmanship is guaranteed for as long as you own your vehicle"
    },
    {
      icon: <Clock className="w-12 h-12 text-[#9b87f5]" />,
      title: "Quick Claims",
      description: "Simple and fast warranty claim process with 24-hour response time"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#9b87f5]" />,
      title: "Transferable Coverage",
      description: "Warranty can be transferred to new vehicle owners"
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-[#9b87f5]" />,
      title: "Nationwide Protection",
      description: "Valid at any certified auto body shop across the country"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "24/7 Warranty Support",
      action: "+1 (800) BODYSHOP",
      onClick: () => {
        toast({
          title: "Contact Information",
          description: "Calling warranty support line...",
        });
      }
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get Help via Email",
      action: "warranty@bodyshop.com",
      onClick: () => {
        toast({
          title: "Contact Information",
          description: "Opening email client...",
        });
      }
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with an Expert",
      action: "Start Chat",
      onClick: () => {
        toast({
          title: "Live Chat",
          description: "Connecting to a warranty specialist...",
        });
      }
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Specialist Assistance",
      action: "Request Support",
      onClick: () => {
        toast({
          title: "Technical Support",
          description: "Submitting support request...",
        });
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Our Warranty Protection
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We stand behind our work with one of the best warranties in the industry. 
          Your satisfaction and vehicle's protection are our top priorities.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {warrantyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#242937] p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coverage Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-[#242937] rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">What's Covered?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Included in Warranty:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Paint and finish defects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Color matching issues
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Structural repairs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Panel replacements
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Not Covered:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Normal wear and tear
                </li>
                <li className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Subsequent damage
                </li>
                <li className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Improper maintenance
                </li>
                <li className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Modifications after repair
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help with Your Warranty?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with warranty claims and questions.
            Choose your preferred method of contact below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#242937] p-6 rounded-lg hover:bg-[#2d334a] transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#1A1F2C] text-[#9b87f5] mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <Button
                  onClick={method.onClick}
                  className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white w-full"
                >
                  {method.action}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;