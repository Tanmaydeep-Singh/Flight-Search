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

const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <p className="font-bold">{flight.airline}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{flight.price}</p>
          <button className="bg-green-600 text-white py-2 px-4 rounded mt-2">Select</button>
        </div>
      </div>
      <div className="flex justify-between text-gray-600 mt-2">
        <div>
          <p>
            {flight.departureTime} - {flight.arrivalTime}
          </p>
        </div>
        <div className="text-right">
          <p>{flight.duration} • {flight.stops}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
