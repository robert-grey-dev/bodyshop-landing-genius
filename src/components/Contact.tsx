import { memo } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 Emergency Service",
    content: "+1 (555) 123-4567",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    content: "123 Auto Service St, New York, NY 10001",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    content: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "service@autobodyshop.com",
  },
] as const;

const ContactCard = memo(({ info, index }: { 
  info: typeof contactInfo[number];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4 text-blue-500">
          {info.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{info.title}</h3>
        <p className="text-gray-600">{info.content}</p>
      </CardContent>
    </Card>
  </motion.div>
));

ContactCard.displayName = "ContactCard";

const Contact = () => {
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
            Get Your Free Estimate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Contact us today for a free consultation and estimate on your repairs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} info={info} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            Schedule Your Appointment <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Contact);