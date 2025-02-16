"use client";

import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import GuestLayout from "./layouts/guest/layout";
import HeroSection from "./layouts/guest/sections/hero";
const FeatureSection = lazy(() => import("./layouts/guest/sections/feature"));
const HowItWorksSection = lazy(() => import("./layouts/guest/sections/howitworks"));
const FAQsSection = lazy(() => import("./layouts/guest/sections/faqs"));
const MetricsSection = lazy(() => import("./layouts/guest/sections/metrics"));

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <GuestLayout>
                {/* Hero Section with Scroll Animation */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }} 
                >
                    <HeroSection />
                </motion.section>

                {/* Feature Section with Lazy Loading and Scroll Animation */}
                <Suspense fallback={<div>Loading...</div>}>
                    <motion.section
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        viewport={{ amount: 0.2 }}
                    >
                        <FeatureSection />
                    </motion.section>
                </Suspense>

                {/* How It Works Section with Lazy Loading and Scroll Animation */}
                <Suspense fallback={<div>Loading...</div>}>
                    <motion.section
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        viewport={{ amount: 0.2 }} 
                    >
                        <HowItWorksSection />
                    </motion.section>
                </Suspense>

                {/* FAQs Section with Lazy Loading and Scroll Animation */}
                <Suspense fallback={<div>Loading...</div>}>
                    <motion.section
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        viewport={{ amount: 0.2 }} 
                    >
                        <FAQsSection />
                    </motion.section>
                </Suspense>

                {/* Metrics Section with Lazy Loading and Scroll Animation */}
                <Suspense fallback={<div>Loading...</div>}>
                    <motion.section
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        viewport={{ amount: 0.2 }} 
                    >
                        <MetricsSection />
                    </motion.section>
                </Suspense>
            </GuestLayout>
        </motion.div>
    );
}