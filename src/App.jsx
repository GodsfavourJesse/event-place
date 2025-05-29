import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import GalleryDetails from './components/GalleryDetails';
import ServiceDetails from './components/ServiceDetails';
import ScrollToTop from './components/ScrollToTop';
import BookingForm from './pages/BookingForm';

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/services/:title' element={<ServiceDetails />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/booking' element={<BookingForm />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/:slug' element={<GalleryDetails />} />
            </Routes>
        </>
    )
}

export default App
