import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HowItWorksItem {
    img: string;
    title: string;
    text: string;
}

const howItWorks: HowItWorksItem[] = [
    {
        title: "Create an Account",
        text: "Sign up as a freelancer or client in just a few minutes and set up your profile.",
        img: "/images/create-account.png",
    },
    {
        title: "Post or Apply for Jobs",
        text: "Clients post job listings, and freelancers apply with their portfolios and proposals.",
        img: "/images/job-posting.png",
    },
    {
        title: "Collaborate & Get Paid",
        text: "Use our built-in tools to communicate, manage projects, and receive payments securely.",
        img: "/images/work-complete.png",
    },
];

const HowItWorksSection: React.FC = () => {
    return (
        <section className="text-gray-900 dark:text-gray-200 py-12 lg:py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">How It Works</h2>
                
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="w-full"
                >
                    {howItWorks.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10">
                                <motion.div
                                    className="lg:w-1/2 flex justify-center"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image src={item.img} alt={item.title} width={500} height={500} className="w-full max-w-md object-cover rounded-lg shadow-lg" />
                                </motion.div>
                                <motion.div
                                    className="lg:w-1/2 text-center lg:text-left space-y-4"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HowItWorksSection;