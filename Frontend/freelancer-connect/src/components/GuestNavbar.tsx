"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GuestNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
    };

    // Function to close the mobile menu after clicking a link
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50 shadow-md">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                {/* Left Section - Logo */}
                <Link href="/" className="text-xl font-semibold whitespace-nowrap dark:text-white">
                    Freelancer<span className="text-blue-600">Connect</span>
                </Link>

                {/* Middle Section - Navigation Links (Visible on Large Screens) */}
                <div className="hidden lg:flex space-x-8">
                    <Link href="#home" className="text-gray-700 hover:text-blue-600 dark:text-white" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    <Link href="#features" className="text-gray-700 hover:text-blue-600 dark:text-white" onClick={closeMobileMenu}>
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-white" onClick={closeMobileMenu}>
                        How it works
                    </Link>
                    <Link href="#faqs" className="text-gray-700 hover:text-blue-600 dark:text-white" onClick={closeMobileMenu}>
                        FAQs
                    </Link>
                </div>

                {/* Right Section - Buttons & Mobile Menu */}
                <div className="flex items-center gap-x-2">
                    {/* Auth Buttons (Visible on Large Screens) */}
                    <Link href="#" className="hidden sm:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        Log in
                    </Link>
                    <Link href="#" className="hidden sm:block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Get started
                    </Link>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            ) : (
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            )}
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu (Hidden on Larger Screens) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col mt-4 font-medium">
                            <li>
                                <Link href="#home" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMobileMenu}>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMobileMenu}>
                                    How it works
                                </Link>
                            </li>
                            <li>
                                <Link href="#faqs" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMobileMenu}>
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeMobileMenu}>
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={closeMobileMenu}>
                                    Get started
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default GuestNavbar;