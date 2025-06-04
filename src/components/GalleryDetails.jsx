import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyGalleryCard } from '../assets/assets';
import { FaChevronLeft } from 'react-icons/fa';

const GalleryDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const galleryItem = dummyGalleryCard.find(item => item.slug === slug);

    if (!galleryItem) return <p className="text-center mt-10">Gallery item not found.</p>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <button 
                onClick={() => navigate(-1)} 
                className="text-blue-500 underline mb-4 flex items-center gap-1 cursor-pointer"
            >
                <FaChevronLeft /> Go Back
            </button>
            <img 
                src={galleryItem.galleryImage} 
                alt={galleryItem.galleryTitle} 
                className="w-full h-96 object-cover rounded mb-4" 
            />
            <h1 className="text-3xl font-bold mb-2">{galleryItem.galleryTitle}</h1>
            <p className="text-gray-700 mb-6">{galleryItem.longDescription}</p>

            {/* Extra info section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow space-y-6">
                {/* Client Feedback */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Client Feedback</h2>
                    <p className="italic text-gray-600">
                    "We were absolutely blown away by the beauty and elegance of the decoration. Every detail was magical. Thank you, Event Place!"
                    </p>
                    <p className="text-right text-sm text-gray-500 mt-2">— Felicia & Daniel</p>
                </div>

            </div>

        </div>
    );
};

export default GalleryDetails;
