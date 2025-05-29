import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { dummyServices } from '../assets/assets';


const Services = () => {
    return (
        <div>
            <Navbar />

            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-20">
                {dummyServices.map((service) => (
                    <Link
                        key={service.title}
                        to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                            <p className="text-sm text-gray-600">{service.shortDesc}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Services;
