import { motion } from "framer-motion";

const MetricsSection: React.FC = () => {
    return (
        <section className="bg-blue-600 dark:bg-blue-500 text-white py-12 lg:py-20 mt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Growing Community</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-6 bg-blue-700 dark:bg-blue-600 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-5xl font-bold">50K+</div>
                        <p className="text-lg">Freelancers</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-blue-700 dark:bg-blue-600 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="text-5xl font-bold">20K+</div>
                        <p className="text-lg">Clients</p>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-blue-700 dark:bg-blue-600 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="text-5xl font-bold">100K+</div>
                        <p className="text-lg">Completed Projects</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;