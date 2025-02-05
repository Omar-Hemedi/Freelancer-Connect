"use client"; // Ensures this component runs on the client side in Next.js

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { 
    FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn 
} from "react-icons/fa";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* SEO & Metadata */}
            <Head>
                <title>FreelancerHub - Find the Best Freelancers</title>
                <meta name="description" content="Connect with top freelancers and hire the best talent." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                {/* Navbar */}
                <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 dark:shadow-lg">
                    <nav className="container mx-auto flex items-center justify-between p-4">
                        {/* Logo */}
                        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
                            Freelancer<span className="text-blue-600 dark:text-blue-400">Hub</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-6">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/freelancers" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                    Browse Freelancers
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                    About
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
                            aria-label="Toggle navigation menu"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        {/* Auth Buttons (Desktop) */}
                        <div className="hidden md:flex space-x-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 
                                dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 
                                dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Register
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-800 shadow-md">
                            <ul className="flex flex-col items-center space-y-4 p-4">
                                <li>
                                    <Link
                                        href="/"
                                        className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/freelancers"
                                        className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Browse Freelancers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/login"
                                        className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md 
                                        hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/register"
                                        className="block w-full text-center px-4 py-2 text-white bg-blue-600 rounded-md 
                                        hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </header>

                {/* Main Content */}
                <main className="flex-1 container mx-auto px-4 py-8">
                    {children}
                </main>
                {/* Footer */}
                <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Freelancer Directory</h3>
                        <p className="text-gray-400">Connecting talent with opportunity.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <FaFacebookF size={24} color="currentColor" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <FaTwitter size="1.5rem" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <span className="w-6 h-6">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    © {new Date().getFullYear()} Freelancer Directory. All rights reserved.
                </div>
            </div>
        </footer>
            </div>
        </>
    );
}
