import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
    return (
        <div className='relative h-screen w-full overflow-hidden'>
            {/* <video 
                autoPlay
                muted
                loop
                className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
            >
                <source 
                src={assets.banner}
                type='video/mp4'
            />
            </video> */}
            
            <img 
                className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                alt='Banner'
                src={assets.bride} 
            />
            
            <div className="absolute inset-0 bg-black/50 z-0" />
            
            <div className='absolute md:left-50 md:right-50 flex flex-col items-center justify-center h-full text-white text-center px-4 z-10'>
                <div data-aos='zoom-in' data-aos-delay='700'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg'>
                        Welcome to Opal Place
                    </h1>
                </div>
                <div data-aos='fade-up' data-aos-delay='1000'>
                    <p className="text-lg md:text-xl mb-6 max-w-xl">
                        A premium event venue for weddings, birthdays, corporate parties and more.
                    </p>
                </div>
                <div data-aos='fade-up' data-aos-delay='1500'>
                    <a
                        href="/booking"
                        className="bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-200 transition"
                    >
                        Book Your Event
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection