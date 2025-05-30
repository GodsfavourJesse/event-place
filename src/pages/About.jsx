import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets, dummyAboutUs, dummyTeamMembers } from '../assets/assets';
import { FaStar } from 'react-icons/fa';

const About = () => {
    return (
        <div className='relative bg-cover bg-center'>
            <img
                src={assets.chair_room} 
                alt='decoration'
                className='absolute w-full h-full z-[-1] opacity-25'
            />

            <Navbar />

            <div className="relative max-w-6xl mx-auto px-6 py-20">


                {/* Header */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-indigo-700">About Event Place</h1>
                    <h3 className="text-2xl font-semibold text-gray-800">Welcome to Event Place — Where Elegance Meets Excellence.</h3>
                </section>

                {/* Intro Paragraph */}
                <section className="text-gray-700 text-lg leading-relaxed space-y-4">
                    <p>
                        At Event Place, we believe in creating more than just a service or a space — we create experiences. Whether you’re visiting us for relaxation, celebration, beauty, or a special service, we are committed to making your time with us exceptional.
                    </p>
                    <p>
                        Our journey began with a vision: to build a place where comfort, creativity, and care come together seamlessly. From our warm ambiance to our attentive staff, every detail at Opal Place is designed to make you feel valued, seen, and inspired.
                    </p>
                </section>

                {/* What Makes Us Different */}
                <section className="mt-16">
                    <h3 className="text-3xl text-center font-semibold mb-6 text-indigo-600">💫 What Makes Us Different?</h3>
                    <ul className="space-y-6">
                        {dummyAboutUs.map((a, index) => (
                        <li key={index} className="text-gray-700">
                            <div className="flex items-start gap-2">
                            <FaStar className="text-indigo-500 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">{a.head}</h4>
                                <p className="text-gray-600">{a.text}</p>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </section>

                {/* Meet the Team */}
                <section className="mt-24">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-indigo-600">👥 Meet The Team</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {dummyTeamMembers.map((team, index) => (
                        <div
                            key={index}
                            className="relative w-72 h-96 overflow-hidden rounded-xl shadow-lg group"
                        >
                            <img
                            src={team.teamMemberImage}
                            alt={team.teamMemberName}
                            className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/40 h-20 group-hover:h-full transition-all duration-300 z-10" />
                            <div className="absolute bottom-5 left-4 z-20 text-white">
                            <h3 className="font-bold text-lg">{team.teamMemberName}</h3>
                            <p className="text-sm">{team.teamMemberPosition}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>

                {/* Mission Section */}
                <section className="mt-24 space-y-4">
                    <h2 className="text-3xl text-center font-semibold text-indigo-600 mb-4">🎯 Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At <strong>Event Place</strong>, our mission is to <strong>deliver exceptional, customer-centered experiences</strong> by blending creativity, quality, and care. We are committed to creating an environment where every guest feels <strong>welcome, valued, and appreciated</strong>.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We strive to <strong>go beyond expectations</strong>, ensuring our services are not only professional and reliable, but also <strong>emotionally impactful</strong>. By continuously listening, innovating, and staying true to our values, we aim to <strong>inspire joy, confidence, and trust</strong>.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Rooted in community, we aim to <strong>uplift lives</strong>, support local growth, and create a space where people feel proud to return — and recommend to others.
                    </p>
                </section>

                {/* Vision Section */}
                <section className="mt-24 space-y-4">
                    <h2 className="text-3xl text-center font-semibold text-indigo-600 mb-4">👁 Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our vision is to be <strong>a leading and trusted name</strong> in our industry — setting the standard in quality, creativity, and guest satisfaction. We envision Event Place as a <strong>multifaceted destination</strong> where style meets substance.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We aim to build a legacy of <strong>exceptional service and positive influence</strong> through meaningful relationships, continuous improvement, and respect for the people we serve.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Ultimately, we want to create a place where <strong>every guest feels seen, heard, and celebrated</strong> — not just visited, but remembered.
                    </p>
                </section>

                {/* Thank You Section */}
                <section className="mt-24 text-center">
                    <h2 className="text-3xl font-semibold text-indigo-600 mb-4">🤝 Thank You for Choosing Us</h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                        Whether it’s your first time with us or you’ve been on the journey for a while — we’re honored to have you here. Let’s continue building beautiful memories together.
                    </p>
                </section>
            </div>
            

            <Footer />
        </div>
    );
};

export default About;
