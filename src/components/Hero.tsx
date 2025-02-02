import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const HeroBackground = memo(() => (
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
      alt="Auto Service Background"
      className="w-full h-full object-cover"
      loading="eager"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>
));

HeroBackground.displayName = "HeroBackground";

const CallDialog = memo(({ isOpen, onOpenChange, onCopy, copied, phoneNumber }: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onCopy: () => void;
  copied: boolean;
  phoneNumber: string;
}) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-xl">Contact Us</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center space-y-4 py-4">
        <Phone className="h-12 w-12 text-blue-500" />
        <p className="text-2xl font-semibold text-center">{phoneNumber}</p>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={onCopy}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Number
            </>
          )}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
));

CallDialog.displayName = "CallDialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+1 (555) 123-4567";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast.success("Phone number copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  }, [phoneNumber]);

  const handleDialogOpen = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Expert Auto Body Repair & Collision Services
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Professional repairs with lifetime warranty. Get back on the road with confidence.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/schedule">
              <Button
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-6 text-lg font-semibold shadow-lg"
              >
                Schedule Free Estimate
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={handleDialogOpen}
            >
              <Phone className="mr-2" /> Call Now
            </Button>
          </motion.div>
        </div>
      </div>

      <CallDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onCopy={handleCopy}
        copied={copied}
        phoneNumber={phoneNumber}
      />
    </div>
  );
};

export default memo(Hero);