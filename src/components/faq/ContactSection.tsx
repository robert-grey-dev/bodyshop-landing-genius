const ContactSection = () => {
  return (
    <div className="bg-[#1A1F2C] text-white p-8 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
      <p className="mb-6">
        Our customer service team is here to help. Contact us through any of these channels:
      </p>
      <div className="space-y-4">
        <p>📞 Phone: (800) BODYSHOP</p>
        <p>✉️ Email: support@bodyshop.com</p>
        <p>💬 Live Chat: Available 24/7</p>
      </div>
    </div>
  );
};

export default ContactSection;