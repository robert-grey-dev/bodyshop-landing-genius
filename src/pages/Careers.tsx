import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
}

const Careers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  
  const form = useForm<ApplicationFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    },
  });

  const onSubmit = (data: ApplicationFormData) => {
    console.log("Application submitted:", { position: selectedPosition, ...data });
    toast.success("Application submitted successfully!");
    setIsDialogOpen(false);
    form.reset();
  };

  const positions = [
    {
      title: "Auto Body Technician",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Experienced auto body technician needed for collision repair work."
    },
    {
      title: "Paint Specialist",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Skilled painter needed for automotive refinishing work."
    },
    {
      title: "Service Advisor",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Customer-focused advisor needed for our service department."
    }
  ];

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#1A1F2C]">Careers</h1>
          
          <div className="mb-12">
            <img 
              src="/lovable-uploads/f7b7316d-6fc5-4136-936e-1cd15cd20ed7.png"
              alt="Careers Hero" 
              className="w-full h-auto object-contain rounded-lg mb-8"
            />
            
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1F2C]">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              At Bodyshop, we're always looking for talented individuals who are passionate about automotive repair 
              and customer service. Join our team of professionals and build a rewarding career in the automotive industry.
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-semibold text-[#1A1F2C]">Open Positions</h3>
              {positions.map((position, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-[#1A1F2C] mb-2">{position.title}</h4>
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <Button 
                    className="bg-[#1A1F2C] hover:bg-[#2a3142] text-white"
                    onClick={() => handleApply(position.title)}
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>Competitive salary</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>Health insurance</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>401(k) with company match</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>Paid time off</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>Professional development</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ea384c]">✓</span>
                  <span>Employee discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for {selectedPosition}</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for this position. We'll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about yourself and why you're interested in this position..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;