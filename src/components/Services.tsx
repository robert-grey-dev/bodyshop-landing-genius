import { motion } from "framer-motion";
import { Wrench, Paintbrush, Shield, Car, Settings, Clock, Award, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: <Car className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Collision Repair",
    description: "Expert repair services for all types of collision damage, restoring your vehicle to pre-accident condition.",
  },
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Auto Painting",
    description: "State-of-the-art paint matching technology and expert application for a flawless finish.",
  },
  {
    icon: <Settings className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Dent Removal",
    description: "Advanced paintless dent repair techniques to restore your vehicle's appearance.",
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Lifetime Warranty",
    description: "Written warranty on all repairs for as long as you own your vehicle.",
  },
  {
    icon: <Clock className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Express Service",
    description: "Quick turnaround times with same-day repairs for minor damage.",
  },
  {
    icon: <Award className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Certified Technicians",
    description: "I-CAR Gold Class certified professionals handling your repairs.",
  },
  {
    icon: <BadgeCheck className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Insurance Approved",
    description: "Direct relationships with all major insurance companies for seamless claims.",
  },
  {
    icon: <Wrench className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Frame Repair",
    description: "Computerized frame straightening for precise structural repairs.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Complete Auto Body Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            From minor dents to major collision repair, our certified technicians deliver exceptional results with industry-leading warranty coverage.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;