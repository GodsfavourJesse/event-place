import React from 'react'
import { assets, dummyServices } from '../assets/assets'
import { Link } from 'react-router-dom';

const ServicesCard = ({ services, showMore = false}) => {
    return (
        <div className='py-20 bg-white px-6'>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100} // Optional staggered animation
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1"
                            >
                                {/* Background Image */}
                                <div 
                                    className="h-56 bg-cover bg-center relative"
                                    style={{backgroundImage: `url(${service.image})`}} 
                                >
                                    {/* Dark Overlay */}
                                    <div 
                                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" 
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 text-left">
                                    <h3 
                                        className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition"
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{service.shortDesc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {showMore && (
                    <div className="mt-12">
                        <Link
                            to="/services"
                            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
                        >
                            See More Services
                        </Link>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ServicesCard