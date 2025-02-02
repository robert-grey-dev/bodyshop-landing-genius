interface BrandLogo {
  src: string;
  alt: string;
  width: number;
}

const brandLogos: BrandLogo[] = [
  { 
    src: "/bodyshop-uploads/f68b6cb0-47ce-467d-b1a8-e55fc8e8bca5.png", 
    alt: "Abra",
    width: 120 
  },
  { 
    src: "/bodyshop-uploads/c3d7579b-718a-41dc-acec-ab00495d2905.png", 
    alt: "Carstar",
    width: 140 
  },
  { 
    src: "/bodyshop-uploads/f478cda0-fe40-4b85-9e55-e96e84a50a1d.png", 
    alt: "Driven Brands",
    width: 160 
  },
  { 
    src: "/bodyshop-uploads/752f83bc-c153-4148-9f81-ab5c711c7950.png", 
    alt: "Take 5",
    width: 120 
  },
  { 
    src: "/bodyshop-uploads/8dec828e-53f1-4bc1-8d48-43c75a658c16.png", 
    alt: "Meineke",
    width: 130 
  },
  { 
    src: "/bodyshop-uploads/e8b2b9cd-4bf8-41cb-8612-0a3f5c79bfc2.png", 
    alt: "Maaco",
    width: 130 
  }
];

export const BrandLogos = () => {
  return (
    <div className="bg-white mt-8 py-12 px-6 rounded-lg">
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-[#1A1F2C]">A Family Of Driven Brands</h4>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-16 gap-y-12 max-w-6xl mx-auto">
        {brandLogos.map((logo, i) => (
          <div 
            key={i} 
            className="flex items-center justify-center"
            style={{ width: logo.width + 'px', height: '60px' }}
          >
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: logo.width + 'px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};