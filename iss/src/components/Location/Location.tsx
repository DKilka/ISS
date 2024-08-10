import { useEffect, useState } from "react";

import { LocationResponse } from "@/Types/GoogleTypes";
import MarkMap from "@/components/MarkMap/MarkMap";
import Loading from "@/components/Loading/Loading";

const Location = () => {
  const [location, setLocation] = useState<LocationResponse | null>(null);
  const [coordinatesISS, setCoordinatesISS] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const getLocationISS = async () => {
      try {
        const response = (
          await fetch(process.env.REACT_APP_LOCATION as string)
        ).json();
        setLocation(await response);
      } catch (error: unknown) {
        if (typeof error === "string") throw new Error(error);
      }
    };

    const intervalId = setInterval(() => getLocationISS(), 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (location) {
      setCoordinatesISS({
        lat: parseFloat(location.iss_position.latitude),
        lng: parseFloat(location.iss_position.longitude),
      });
    }
  }, [location]);

  return (
    <div className="flex flex-wrap w-3/4 max-[768px]:w-full">
      <div className="w-full border border-black p-2">
        <h2 className="font-bold">ISS is now located at:</h2>
        <div className="ml-4">
          {location ? (
            `latitude: ${location?.iss_position.latitude} longitude: ${location?.iss_position.longitude}`
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="w-full h-fit p-2 max-[768px]:p-0 border border-black">
        <MarkMap position={coordinatesISS} />
      </div>
    </div>
  );
};

export default Location;
