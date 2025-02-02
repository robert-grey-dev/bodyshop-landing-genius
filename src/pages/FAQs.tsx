import Footer from "@/components/Footer";
import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";
import ContactSection from "@/components/faq/ContactSection";
import ConsultationForm from "@/components/faq/ConsultationForm";

const FAQs = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <FAQHero />
          <FAQList />
          <ContactSection />
          <ConsultationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;