import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyServices } from '../assets/assets';
import { FaChevronLeft } from 'react-icons/fa';

const ServiceDetails = () => {

    const { title } = useParams();
    const navigate = useNavigate();
    const formattedTitle = title.replace(/-/g, ' ');
    const service = dummyServices.find(
        (s) => s.title.toLowerCase() === formattedTitle.toLowerCase()
    );

    if (!service) return <div className="p-6">Service not found</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <button 
                onClick={() => navigate(-1)} 
                className="text-blue-500 underline mb-4 flex items-center gap-1 cursor-pointer"
            >
                <FaChevronLeft /> Go Back
            </button>
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded"
            />
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-gray-700">{service.longDesc}</p>

            <div className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
                <h2 className="text-xl font-semibold">Service Details</h2>
                <ul className="text-gray-700 list-disc pl-5">
                {Object.entries(service.details).map(([key, value]) => (
                    <li key={key}>
                    <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
                    {Array.isArray(value) ? value.join(', ') : value.toString()}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceDetails;
