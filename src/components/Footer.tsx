import { FooterLinks } from "./footer/FooterLinks";
import { SocialLinks } from "./footer/SocialLinks";
import { BrandLogos } from "./footer/BrandLogos";

const Footer = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-12">
        <FooterLinks handleNavClick={handleNavClick} />
        <SocialLinks />
        
        <div className="text-center text-sm text-gray-400 mb-8">
          <p>©2024 Bodyshop. All rights reserved.</p>
        </div>

        <BrandLogos />
      </div>
    </footer>
  );
};

export default Footer;