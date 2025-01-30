import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! The page you're looking for does not exist.</p>
                <Link to="/" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;