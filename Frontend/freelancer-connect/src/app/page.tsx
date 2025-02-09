"use client";

import GuestLayout from "./layouts/guest/layout";
import HeroSection from "./layouts/guest/sections/hero";

export default function Home() {
    return (
        <GuestLayout>
            <HeroSection />
        </GuestLayout>
    );
}