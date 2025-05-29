import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    // Scroll effect
    useEffect(() => {
         if (!isHomePage) {
            setScrolled(true); // Always white on other pages
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                <Link 
                    to="/" 
                    className={`text-2xl font-bold transition-all duration-300 ${
                        scrolled ? 'text-indigo-600' : 'text-white drop-shadow-md'
                    }`}
                >
                    Event Place
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;

                        return (
                            <NavLink
                                key={item}
                                to={path}
                                className={({ isActive }) =>
                                    `transition-all duration-300 px-2 py-1 rounded ${
                                        isActive
                                            ? 'text-indigo-600 font-semibold'
                                            : scrolled
                                            ? 'text-gray-800 hover:text-indigo-600'
                                            : 'text-white hover:text-indigo-600'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </NavLink>
                        );
                    })}

                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`md:hidden focus:outline-none cursor-pointer ${
                        scrolled ? 'text-gray-900' : 'text-white'
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 bg-white shadow-md' : 'max-h-0 opacity-0'
                }`}
            >
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => {
                    const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;

                    return (
                        <NavLink
                            key={item}
                            to={path}
                            className={({ isActive }) =>
                                `block px-6 py-4 transition ${
                                    isActive
                                        ? 'text-indigo-700 bg-gray-100 font-semibold'
                                        : 'text-gray-600 hover:text-white hover:bg-indigo-700'
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
