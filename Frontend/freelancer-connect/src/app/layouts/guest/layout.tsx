import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { ReactNode } from "react";

interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <header className="bg-blue-600 dark:bg-blue-500 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <Link href="/" className="text-2xl font-bold">
                        FreelancerHub
                    </Link>
                    <nav className="space-x-4">
                        <Link href="/" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
                        <Link href="/about" className="hover:text-blue-200 transition-colors duration-300">About</Link>
                        <Link href="/contact" className="hover:text-blue-200 transition-colors duration-300">Contact</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <FaFacebookF size={24} color="currentColor" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <FaTwitter size="1.5rem" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                                <span className="w-6 h-6">
                                    <FaLinkedinIn size={24} color="currentColor" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GuestLayout;