// pages/flights.tsx
import FlightCard from '@/components/FlightDetail/FlightCard';
import Skeleton from '@/components/FlightDetail/Skeleton';
import LoadingFlights from '@/components/LoadingFlights'; 
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Flight {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  price: string;
}

const Flights: React.FC = () => {
  const router = useRouter();
  const { from, to } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState<Flight[]>([]);

  const fromLocation = Array.isArray(from) ? from[0] : from;
  const toLocation = Array.isArray(to) ? to[0] : to;

  
  useEffect(() => {
    if (fromLocation && toLocation) {
      setTimeout(() => {
        const fetchedFlights = [
          { airline: 'Emirates', departureTime: '9:45 AM', arrivalTime: '11:45 AM', duration: '2h 10min', stops: 'Non stop', price: 'AED 2,456.90' },
          { airline: 'Lufthansa', departureTime: '11:45 PM', arrivalTime: '6:45 AM', duration: '7h 10min', stops: '1 stop', price: 'AED 1,456.90' }
        ];
        setFlights(fetchedFlights);
        setIsLoading(false); 
      }, 4000); 
    }
  }, [fromLocation, toLocation]);

  return (
    <div className="p-4">
      <div className="text-lg font-bold mb-4">
        {fromLocation && toLocation ? (
          <p>
            Flights from <strong>{fromLocation}</strong> to <strong>{toLocation}</strong>.
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="relative">
        {isLoading ? (
          <>
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
              <LoadingFlights />
            </div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          flights.map((flight, index) => <FlightCard key={index} flight={flight} />)
        )}
      </div>
    </div>
  );
};

export default Flights;
