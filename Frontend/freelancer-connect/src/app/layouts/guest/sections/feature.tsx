import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Advanced Search & Filters",
    description: [
      "Find freelancers by skills, location, and experience",
      "Sort by reviews, ratings, and availability",
      "Use category-based filters for quick results",
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    colors: ["text-green-500 bg-green-100", "text-blue-500 bg-blue-100", "text-purple-500 bg-purple-100"],
    footer: "Quickly find the best talent for your needs."
  },
  {
    title: "Verified Freelancers",
    description: [
      "Every freelancer undergoes a strict verification process.",
      "Background checks and portfolio reviews ensure authenticity.",
      "Customer ratings help maintain quality and trust.",
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    colors: ["text-green-500 bg-green-100", "text-blue-500 bg-blue-100", "text-purple-500 bg-purple-100"],
    footer: "Join thousands of professionals today!"
  },
  {
    title: "Secure Payments",
    description: [
      "Payments are held securely until project completion.",
      "Multiple payment methods, including escrow protection.",
      "Fast and hassle-free withdrawals for freelancers.",
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    colors: ["text-green-500 bg-green-100", "text-blue-500 bg-blue-100", "text-purple-500 bg-purple-100"],
    footer: "Your money is safe with our escrow system."
  },
];

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Why Choose Our Freelancer Directory?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Find top freelancers easily with our advanced search, verified professionals, and secure payments.
          </motion.p>
        </div>

        {/* Accordion with SVGs */}
        <div className="mt-12 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  {/* SVG Icon */}
                  <div className="flex-shrink-0">{feature.svg}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pl-20">
                      {/* Description List */}
                      <div className="space-y-2 text-gray-600 dark:text-gray-300">
                        {feature.description.map((item, i) => (
                          <div key={i} className="flex items-center">
                            <span
                              className={`w-6 h-6 flex items-center justify-center rounded-full ${feature.colors[i]} mr-2`}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-6 text-gray-700 dark:text-gray-400 italic">
                        {feature.footer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
