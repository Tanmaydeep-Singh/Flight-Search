import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 

function FlightSearch() {
    const router = useRouter(); 
    const [from, setFrom] = useState('Where From?');
    const [to, setTo] = useState('Where To?');

    const searchFlight = () => {
        if (from && to) {
            router.push(`/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
            console.log(`SEARCH FOR THE FLIGHT FROM ${from} to ${to}`);
        } else {
            console.error('Please enter both departure and destination locations.');
        }
    };

    useEffect(() => {
        setFrom("London");
        setTo("Japan");
    }, []);

    return (
        <div className='w-[70vw] h-56 border border-black rounded-md'>
            <h1>FlightSearch</h1>
            <div>
                <div>{from}</div>
                <div>{to}</div>
                <div>Departure</div>
                <div>Return</div>
            </div>
            <div>
                <button onClick={searchFlight}>Search</button>
            </div>
        </div>
    );
}

export default FlightSearch;
