import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer: "The duration of repairs varies depending on the extent of damage and parts availability. Minor repairs might take 2-3 days, while major repairs could take 1-2 weeks. We provide detailed timelines during the initial assessment."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we offer a lifetime warranty on all our repairs. This covers both parts and labor, giving you peace of mind about the quality of our work."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work with all major insurance companies and can help manage your claim process. Our team has extensive experience in insurance procedures and documentation."
  },
  {
    question: "What types of vehicles do you repair?",
    answer: "We repair all makes and models of vehicles, including cars, trucks, SUVs, and luxury vehicles. Our technicians are certified and experienced in working with various vehicle types."
  },
  {
    question: "Do you offer rental cars during repairs?",
    answer: "Yes, we can arrange rental cars through our partnership with major rental companies. Many insurance policies cover rental cars during repairs."
  }
];

const FAQList = () => {
  return (
    <div className="mb-12">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-[#1A1F2C] hover:text-[#ea384c]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQList;