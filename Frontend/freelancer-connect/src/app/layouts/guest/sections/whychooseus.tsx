import { motion } from 'framer-motion';

interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const whyChooseUs: WhyChooseUsItem[] = [
    {
        icon: <i className="fas fa-check-circle"></i>,
        title: 'Quality Service',
        text: 'We provide top-notch services to our clients.',
    },
    {
        icon: <i className="fas fa-users"></i>,
        title: 'Expert Team',
        text: 'Our team consists of highly skilled professionals.',
    },
    {
        icon: <i className="fas fa-thumbs-up"></i>,
        title: 'Customer Satisfaction',
        text: 'We prioritize our clients’ satisfaction above all.',
    },
];

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-12 lg:py-24">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="text-6xl mb-6">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUsSection;