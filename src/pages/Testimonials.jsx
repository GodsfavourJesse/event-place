import React from 'react'
import TestimonialCard from '../components/TestimonialCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { dummyTestimonial } from '../assets/assets'

const Testimonials = () => {
    return (
        <div>
            <Navbar />
            <TestimonialCard
                testimonials={dummyTestimonial}
            />
            <Footer />
        </div>
    )
}

export default Testimonials