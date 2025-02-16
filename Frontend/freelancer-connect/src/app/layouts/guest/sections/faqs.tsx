import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I sign up?",
    answer: "You can sign up by clicking the 'Get Started' button on the homepage and following the registration steps.",
  },
  {
    question: "How do I post a project?",
    answer: "After signing up, go to your dashboard and click 'Post a Project.' Fill in the details, and your project will be live for freelancers to see.",
  },
  {
    question: "How do I hire freelancers?",
    answer: "Review proposals from freelancers, communicate with them, and select the best fit for your project.",
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, we use secure payment gateways and escrow systems to ensure your money is safe until the project is completed.",
  },
  {
    question: "Can I cancel a project?",
    answer: "Yes, you can cancel a project, but please review our cancellation policy to understand any applicable fees.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team via the 'Contact Us' page or by emailing support@freelancerdirectory.com.",
  },
];

const FAQsSection: React.FC = () => {
  return (
    <motion.section
      id="faqs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }} 
      className="bg-white dark:bg-gray-900 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.2 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Find answers to common questions about our platform.
          </motion.p>
        </div>

        {/* FAQs List */}
        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ amount: 0.2 }}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
            >
              {/* FAQ Question */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>

              {/* FAQ Answer */}
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQsSection;