import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mb-8">
      <a href="#" className="hover:text-[#9b87f5] transition-colors">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#9b87f5] transition-colors">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#9b87f5] transition-colors">
        <Youtube className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#9b87f5] transition-colors">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
};