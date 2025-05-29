import React from 'react'
import Navbar from '../components/Navbar'
import { assets, dummyServices, dummyTestimonial } from '../assets/assets'
import Footer from '../components/Footer'
import TestimonialCard from '../components/TestimonialCard'
import ServicesCard from '../components/ServicesCard'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import GalleryCard from '../components/GalleryCard'
import BookingForm from './BookingForm'

const Home = () => {
    return (
        <div className='scroll-smooth'>
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Intro Section */}
            <div data-aos='fade-up'>
                <IntroSection />
            </div>

            {/* Services Preview Section */}
            <div data-aos="fade-up" data-aos-delay="100">
                <ServicesCard 
                    services={dummyServices.slice(0, 3)}
                    showMore={true}
                />
            </div>

            {/* Testimonial Section */}
            <div data-aos="fade-up" data-aos-delay="200">
                <TestimonialCard 
                    testimonials={dummyTestimonial.slice(0, 3)}
                    showMore={true}
                />
            </div>

            {/* Gallery Section */}
            <div data-aos="zoom-in" data-aos-delay="300">
                <GalleryCard />
            </div>

            {/* Footer */}
            <Footer />

            {/* <BookingForm /> */}
        </div>
    )
}

export default Home