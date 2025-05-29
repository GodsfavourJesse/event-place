import React from 'react';

const IntroSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div data-aos="zoom-in" data-aos-delay="500">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 relative inline-block">
                        <span className="relative z-10">Why Choose Opal Place?</span>
                        <span className="absolute left-0 bottom-1 w-full h-2 bg-indigo-200 z-0 rounded-lg"></span>
                    </h2>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        At <span className="text-indigo-600 font-semibold">Opal Place</span>, we blend <strong>elegance</strong>, <strong>comfort</strong>, and <strong>modern amenities</strong> to craft experiences that linger in your memory. Whether it's an intimate wedding or a grand corporate gala, our venue adapts beautifully to your unique vision—delivered with style and professionalism.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
