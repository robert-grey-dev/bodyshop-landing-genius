import { Link } from "react-router-dom";
import { AppointmentDialog } from "./AppointmentDialog";

interface FooterLinksProps {
  handleNavClick: () => void;
}

export const FooterLinks = ({ handleNavClick }: FooterLinksProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div className="col-span-1">
        <h2 className="text-2xl font-bold mb-4">Bodyshop</h2>
        <AppointmentDialog />
        <p className="text-lg">(800) BODYSHOP</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Body Repair</li>
          <li>Paint Services</li>
          <li>Fleet Services</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><Link to="/about" onClick={handleNavClick} className="hover:text-[#9b87f5]">About Us</Link></li>
          <li><Link to="/careers" onClick={handleNavClick} className="hover:text-[#9b87f5]">Careers</Link></li>
          <li><Link to="/press" onClick={handleNavClick} className="hover:text-[#9b87f5]">Press and News</Link></li>
          <li><Link to="/faqs" onClick={handleNavClick} className="hover:text-[#9b87f5]">FAQs</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><Link to="/help" onClick={handleNavClick} className="hover:text-[#9b87f5]">Help Center</Link></li>
          <li><Link to="/schedule" onClick={handleNavClick} className="hover:text-[#9b87f5]">Schedule Service</Link></li>
          <li><Link to="/warranty" onClick={handleNavClick} className="hover:text-[#9b87f5]">Warranty Information</Link></li>
        </ul>
      </div>
    </div>
  );
};