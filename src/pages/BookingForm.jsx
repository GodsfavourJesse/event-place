import React, { useState } from 'react'
import BookingDateSelector from '../components/BookingDateSelector';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaSpinner } from 'react-icons/fa';

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
    });
    
    const [bookingDate, setBookingDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bookingDate) {
        alert('Please select a date');
        return;
        }

        setLoading(true);

        setTimeout(() => {
        console.log('Booking submitted:', {
            ...formData,
            date: bookingDate.format('YYYY-MM-DD'),
        });

        setLoading(false);
        setSubmitted(true);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            eventType: '',
            message: '',
        });
        setBookingDate(null);

        // Hide success message after 4 seconds
        setTimeout(() => setSubmitted(false), 6000);
        }, 3000);
    };


    return (
        <>

            <div className="bg-white py-16 px-4">
                <div className="max-w-2xl mx-auto">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="text-blue-500 underline mb-4 flex items-center gap-1 cursor-pointer"
                    >
                        <FaChevronLeft /> Go Back
                    </button>
                    
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Your Event</h2>

                    {submitted && (
                        <div
                            className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center'
                        >
                            Your inquiry has been submitted!
                        </div>
                    )}

                    <form 
                        action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST"
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                    >
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded"
                            placeholder='Full Name'
                            required
                        />
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded"
                            placeholder='Email Address'
                            required
                        />
                        <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded"
                            placeholder='+1 (555) 123-4567'
                            required
                        />
                        <input 
                            type="text"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded"
                            placeholder="e.g. Wedding, Conference, Birthday"
                            required
                        />
                        <BookingDateSelector 
                            value={bookingDate} 
                            onChange={setBookingDate} 
                        />
                        <textarea 
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded mt-6"
                            placeholder="Tell us more about your event"
                        />
                        <button 
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center items-center gap-2 py-3 rounded text-white cursor-pointer transition ${
                                loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
                            }`}
                        >
                            {loading && (
                                <FaSpinner
                                    className='animate-spin text-white text-lg'
                                />
                            )}
                            {loading ? 'Sending...' : 'Send Inquiry'}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BookingForm