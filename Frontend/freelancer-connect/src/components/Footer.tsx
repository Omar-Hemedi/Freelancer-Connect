import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="p-6 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            <div className="mx-auto max-w-screen-xl">
                {/* Footer Content */}
                <div className="md:flex md:justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Freelancer<span className="text-blue-600 dark:text-blue-400">Connect</span>
                            </span>
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-2">
                                    <Link href="#features" className="hover:text-gray-900 dark:hover:text-white">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#how-it-works" className="hover:text-gray-900 dark:hover:text-white">
                                        How It Works
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow Us
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-2">
                                    <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                                        GitHub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-2">
                                    <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Copyright */}
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" className="hover:underline hover:text-gray-900 dark:hover:text-white">
                            Omar Hemedi™
                        </Link>
                        . All Rights Reserved.
                    </span>

                    {/* Social Media Links */}
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <FaFacebookF className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white">
                            <FaTwitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
                            <FaLinkedinIn className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
