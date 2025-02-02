import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { useState } from "react";

const AboutUs = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Sent",
      description: "We'll contact you shortly to schedule your appointment.",
    });
    setOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#1A1F2C]">About Us</h1>
          
          <div className="mb-12">
            <img 
              src="/lovable-uploads/283e15c4-17ac-4755-b67d-7b82560fc96b.png"
              alt="About Us Hero" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1F2C]">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Since our founding, Bodyshop has been dedicated to providing exceptional auto body repair services. 
              Our commitment to quality workmanship and customer satisfaction has made us a trusted name in the industry.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1F2C]">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We strive to deliver the highest quality auto body repair services while ensuring complete customer satisfaction. 
              Our team of certified technicians uses state-of-the-art equipment and techniques to restore vehicles to their pre-accident condition.
            </p>
            
            <div className="bg-[#1A1F2C] text-white p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Certified technicians with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>State-of-the-art equipment and facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Lifetime warranty on all repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Convenient locations nationwide</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#ea384c] hover:bg-[#c4293d] text-white">
                  Schedule an Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Schedule an Appointment</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll contact you to schedule your appointment.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#ea384c] hover:bg-[#c4293d] text-white">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;