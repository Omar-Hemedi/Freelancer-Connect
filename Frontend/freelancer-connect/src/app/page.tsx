"use client";

import GuestLayout from "./layouts/guest/layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "./layouts/guest/sections/hero";
import AboutSection from "./layouts/guest/sections/about";
import HowItWorksSection from "./layouts/guest/sections/howitworks";
import WhyChooseUsSection from "./layouts/guest/sections/whychooseus";
import MetricsSection from "./layouts/guest/sections/metrics";
import TestimonialsSection from "./layouts/guest/sections/testimonials";

export default function Home() {
    return (
        <GuestLayout>
            {/* Hero Section */}
            <HeroSection />

            {/* About the System Section */}
            <AboutSection />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Metrics Section */}
            <MetricsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </GuestLayout>
    );
}