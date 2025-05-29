import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-200 py-12 px-6 z-[10000]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-center lg:text-left gap-10">
                
                {/* Brand Description */}
                <div>
                    <h2 className="text-3xl font-bold text-indigo-400 mb-3">Event Place</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A sanctuary where luxury meets serenity. Every visit is a celebration of elegance, comfort, and unforgettable moments.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="text-gray-400">Email: <span className="text-white">info@opalplace.com</span></li>
                        <li className="text-gray-400">Phone: <span className="text-white">+1 234 567 890</span></li>
                    </ul>
                    <div className="flex justify-center lg:justify-start gap-4 mt-4">
                        <a href="mailto:info@opalplace.com" 
                            className=" hover:text-indigo-400 transition duration-300 cursor-pointer"
                        >
                            <FaEnvelope size={18} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition duration-300">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition duration-300">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition duration-300">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter to get the latest updates, offers, and insider tips.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-white font-semibold">Opal Place</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
