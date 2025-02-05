import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-12 lg:py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            &quot;FreelancerHub has transformed the way I find clients. The platform is easy to use and the support team is always there to help.&quot;
                        </p>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h4>
                            <p className="text-gray-600 dark:text-gray-300">Freelancer</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            &quot;As a client, I appreciate the transparency and ease of finding top talent on FreelancerHub. Highly recommend!&quot;
                        </p>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Jane Smith</h4>
                            <p className="text-gray-600 dark:text-gray-300">Client</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            &quot;The secure payment system and 24/7 support make FreelancerHub my go-to platform for hiring freelancers.&quot;
                        </p>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Michael Brown</h4>
                            <p className="text-gray-600 dark:text-gray-300">Client</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;