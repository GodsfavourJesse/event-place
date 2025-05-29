import React from 'react'
import { dummyGalleryCard } from '../assets/assets'

const GalleryCard = () => {

    return (
        <div className='py-20 bg-white px-6 text-center'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl font-bold mb-12 text-gray-800'>Gallery</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {dummyGalleryCard.map((gallery, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className="relative overflow-hidden rounded-2xl shadow-md group"
                            >
                                <img
                                    src={gallery.galleryImage}
                                    alt={gallery.galleryTitle}
                                    loading='lazy'
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                
                                <div 
                                    className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-medium bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                                >
                                    {gallery.galleryTitle}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default GalleryCard