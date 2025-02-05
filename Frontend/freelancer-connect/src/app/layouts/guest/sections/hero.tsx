import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-20">
                <motion.div
                    className="text-center lg:text-left lg:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
                        Find the Best{" "}
                        <span className="text-blue-600 dark:text-blue-400">Freelancers</span> for Your Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Connect with top-rated professionals, hire talent, and grow your business.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/register"
                            className="px-8 py-4 text-white bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/freelancers"
                            className="px-8 py-4 border border-gray-300 text-lg rounded-lg font-semibold hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 transition-all"
                        >
                            Browse Freelancers
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/images/freelancers-working.png" alt="Freelancer Working" className="w-full max-w-xl object-cover rounded-lg shadow-2xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;