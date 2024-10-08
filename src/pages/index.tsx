import FlightSearch from "@/components/FlightSearch";
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    updateGreeting();
  }, []);

  return (
    <>
      <div className=" w-screen h-screen flex flex-col justify-center items-center">
        <h1>{greeting}, Agetha</h1>
        <FlightSearch />
      </div>
    </>
  );
}
