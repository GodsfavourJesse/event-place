import React from 'react'
// import { dummyTestimonial } from '../assets/assets'
import { Link } from 'react-router-dom';

const TestimonialCard = ({ testimonials, showMore = false }) => {
    return (
        <div className='py-20 bg-gray-100 px-6 text-center'>
            <div className='max-w-6xl mx-auto'>
                <h2 className="text-3xl font-bold mb-12 text-gray-800">What Clients Say</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {testimonials.map((testimonial, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className='relative bg-white shadow-md hover:shadow-lg rounded-2xl transition duration-300 p-6 flex flex-col justify-between h-full'
                            >
                                <div className='flex items-center gap-4 mb-4'>
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className='h-14 w-14 rounded-full object-cover border-2 border-indigo-500'
                                    />
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
                                        <p className='text-sm text-gray-500 text-left'>{testimonial.title || 'Client'}</p>
                                    </div>
                                </div>
                                <p className='text-gray-700 italic text-sm leading-relaxed'>"{testimonial.quote}"</p>
                            </div>
                        );
                    })}
                </div>

                {showMore && (
                    <div className="mt-12">
                        <Link
                            to="/testimonials"
                            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                        >
                            See More Testimonials
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TestimonialCard