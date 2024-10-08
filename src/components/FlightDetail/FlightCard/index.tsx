import React from 'react';

interface Flight {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  price: string;
}

interface FlightCardProps {
  flight: Flight;
}

const FlightCard  = ({ flight } : FlightCardProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{flight.airline}</p>
          <p>
            {flight.departureTime} - {flight.arrivalTime}
          </p>
        </div>
        <div>
          <p className="font-bold">{flight.price}</p>
          <button className="bg-green-600 text-white py-2 px-4 rounded">Select</button>
        </div>
      </div>
      <div className="text-gray-600 mt-2">
        <p>
          {flight.duration} • {flight.stops} stop(s)
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
