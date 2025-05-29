import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // success or error message

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Simple validation (can be enhanced)
    const validateForm = () => {
        if (!form.name.trim()) return 'Name is required';
        if (!form.email.trim()) return 'Email is required';
        // Basic email regex
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(form.email)) return 'Email is invalid';
        if (!form.message.trim()) return 'Message is required';
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
        setStatus({ type: 'error', message: error });
        return;
        }

        // TODO: Connect this to Firebase or API to save/send the message
        console.log('Contact form submitted:', form);

        // Clear form & show success message
        setForm({ name: '', email: '', phone: '', message: '' });
        setStatus({ type: 'success', message: 'Thank you for contacting us! We will get back to you soon.' });
    };

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-16 mt-12">
                <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Contact Us</h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-indigo-600">Get in touch</h2>
                        <p className="text-gray-700">
                            Whether you have questions about our event center or want to book a space, we're here to help.
                        </p>

                        <div>
                            <h3 className="font-semibold text-gray-800">Email</h3>
                            <p className="text-indigo-600">info@eventplace.com</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Phone</h3>
                            <p className="text-indigo-600">+1 (555) 123-4567</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Address</h3>
                            <p>123 Event Street, Event City, Country</p>
                        </div>

                        {/* Placeholder for map */}
                        <div className="mt-6 h-64 w-full rounded-md overflow-hidden shadow-lg">
                            <iframe
                                title="Event Place Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086252159501!2d-122.41941548468184!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7c0a1d9d%3A0x2a882dce2a1219be!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1514524647889"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
                        {status && (
                            <div
                                className={`mb-4 px-4 py-3 rounded ${
                                    status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                }`}
                                role="alert"
                            >
                                {status.message}
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                                Phone
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
