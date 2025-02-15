import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="dark:bg-gray-900">
            <div className="flex flex-col lg:grid lg:grid-cols-12 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white"
                    >
                        Find the Best{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            Freelancers
                        </span> for Your Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                    >
                        Connect with top-rated professionals, hire talent, and grow your business.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <Link href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative flex justify-center mb-6 lg:mb-0 lg:col-span-5 order-1 lg:order-2"
                >
                    <Image
                        src="/images/freelancer-working.png"
                        alt="Freelancer working"
                        width={500}
                        height={500}
                        className="max-w-full h-auto relative z-10"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;