import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <motion.div
                    className="lg:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                        Why Choose Us?
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-4">
                            <span className="text-blue-600 dark:text-blue-400 text-2xl">✔️</span>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Verified Freelancers</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We ensure quality by verifying freelancers&apos; skills and profiles, so you only work with trusted professionals.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-blue-600 dark:text-blue-400 text-2xl">✔️</span>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Secure Payments</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    All transactions are protected using industry-standard security, ensuring safe and fair payments.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-blue-600 dark:text-blue-400 text-2xl">✔️</span>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">24/7 Customer Support</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our dedicated support team is available around the clock to assist both clients and freelancers.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-blue-600 dark:text-blue-400 text-2xl">✔️</span>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Transparent Reviews & Ratings</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Honest feedback from previous clients and freelancers to help you make informed decisions.
                                </p>
                            </div>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src="/images/system-overview.jpg" alt="System Overview" width={500} height={500} className="w-full max-w-xl object-cover rounded-lg shadow-2xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;