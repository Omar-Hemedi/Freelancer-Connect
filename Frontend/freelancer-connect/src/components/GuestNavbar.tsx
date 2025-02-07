import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GuestNavbar component for the FreelancerConnect application.
 * This component renders the navigation bar for guest users with animations.
 */

const GuestNavbar: React.FC = () => {
    // State to manage the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for the mobile menu
    const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
    };

    // Animation variants for the hamburger icon
    const iconVariants = {
        open: { rotate: 90, transition: { duration: 0.3 } },
        closed: { rotate: 0, transition: { duration: 0.3 } },
    };

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 relative">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                {/* Logo */}
                <Link href="https://flowbite.com" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Freelancer<span className="text-blue-600">Connect</span>
                    </span>
                </Link>

                {/* Auth Buttons and Mobile Menu Toggle */}
                <div className="flex items-center lg:order-2">
                    <Link href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        Log in
                    </Link>
                    <Link href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Get started
                    </Link>

                    {/* Mobile menu button (hidden on larger screens) */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isOpen}
                        variants={iconVariants}
                        animate={isOpen ? "open" : "closed"}
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

                {/* Links for non-mobile screens (always visible on larger screens) */}
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="navbar-default">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/company" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/marketplace" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white">
                                How it works
                            </Link>
                        </li>
                        <li>
                            <Link href="/features" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu (hidden on larger screens) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col mt-4 font-medium">
                            <li>
                                <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/company" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/marketplace" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    How it works
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    FAQs
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