import React from 'react'
import { dummyGalleryCard } from '../assets/assets'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Gallery = () => {
    return (
        <div>
            <Navbar />
            
            <div className='p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-30 mt-20'>
                {dummyGalleryCard.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={`/gallery/${item.slug}`}
                            className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <img 
                                src={item.galleryImage} 
                                alt={item.galleryTitle} 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{item.galleryTitle}</h2>
                                <p className="text-sm text-gray-600">{item.shortDescription}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <Footer />
        </div>
    )
}

export default Gallery