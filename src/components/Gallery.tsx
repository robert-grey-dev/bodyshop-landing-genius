import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const galleryItems = [
  {
    image: "/bodyshop-uploads/abf4d1fe-6fcc-422c-8632-7c63b9f467d9.png",
    title: "Body Repair",
    description: "Professional collision damage restoration",
  },
  {
    image: "/bodyshop-uploads/415d24ae-77dd-4960-829d-079db2fd8aad.png",
    title: "Paint Services",
    description: "Complete car repainting with premium finish",
  },
  {
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
    title: "Restoration",
    description: "Classic car restoration expertise",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;