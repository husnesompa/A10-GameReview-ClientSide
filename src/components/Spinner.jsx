import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-red-600 border-dashed rounded-full animate-spin"></div>
    </div>
    );
};

export default Spinner;