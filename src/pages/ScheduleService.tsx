import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const ScheduleService = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service Scheduled",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Schedule Your Service</h1>
          <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
            Book your auto body repair service appointment online. We'll get back to you within 24 hours to confirm your slot.
          </p>
        </div>
      </div>

      {/* Scheduling Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="body-repair">Body Repair</SelectItem>
                  <SelectItem value="paint">Paint Service</SelectItem>
                  <SelectItem value="dent">Dent Removal</SelectItem>
                  <SelectItem value="scratch">Scratch Repair</SelectItem>
                  <SelectItem value="collision">Collision Repair</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle Information</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Make" />
                <Input placeholder="Model" />
                <Input placeholder="Year" />
                <Input placeholder="License Plate" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description of Service Needed</label>
              <Textarea 
                placeholder="Please describe the service you need..."
                className="h-32"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Information</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Email" type="email" className="md:col-span-2" />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#ea384c] hover:bg-[#c4293d] text-white"
            >
              Schedule Service
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ScheduleService;