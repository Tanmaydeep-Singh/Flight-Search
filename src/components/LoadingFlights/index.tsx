import React from 'react';

const LoadingFlights = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-white w-64 h-48">
      <img
        src="/paper-plane.svg" 
        alt="Loading"
        className="w-12 h-12 mb-4 animate-bounce"
      />
      <div className="space-y-2">
        <p className="text-lg font-medium text-gray-800">Searching 400+ flights</p>
        <p className="text-sm text-gray-400">Attaching company rules</p>
        <p className="text-sm text-gray-400">Serving best results</p>
      </div>
    </div>
  );
};

export default LoadingFlights;
