import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Press = () => {
  const newsItems = [
    {
      date: "March 15, 2024",
      title: "Bodyshop Expands to 50 New Locations",
      description: "Company announces major expansion plans across the United States."
    },
    {
      date: "February 28, 2024",
      title: "New Eco-Friendly Paint Technology",
      description: "Introducing revolutionary water-based paint systems for reduced environmental impact."
    },
    {
      date: "January 10, 2024",
      title: "Industry Leadership Award",
      description: "Bodyshop recognized for excellence in automotive repair services."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#1A1F2C]">Press and News</h1>
          
          <div className="mb-12">
            <img 
              src="/bodyshop-uploads/5ef31e96-7393-408d-8528-7b6cd6d889d4.png"
              alt="Leading Media and News Outlets" 
              className="w-full h-auto object-contain rounded-lg mb-8"
            />
            
            <div className="space-y-8 mb-12">
              {newsItems.map((item, index) => (
                <div key={index} className="border-b pb-8">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="outline" className="hover:bg-[#1A1F2C] hover:text-white">
                    Read More
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-[#1A1F2C] text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
              <p className="mb-4">
                For press inquiries, please contact our media relations team:
              </p>
              <div className="space-y-2">
                <p>Email: press@bodyshop.com</p>
                <p>Phone: (800) BODYSHOP</p>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#1A1F2C]">Media Resources</h2>
              <div className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  Download Press Kit
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  Download Brand Guidelines
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  Download Company Logos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;