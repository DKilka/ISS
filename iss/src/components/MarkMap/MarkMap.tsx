import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

//i know about AdvancedMarker, but i can`t use it because i have an error about license

interface MarkMapProps {
  position: { lat: number; lng: number };
}

const MarkMap = ({ position }: MarkMapProps) => {
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}>
      <div className="h-screen">
        <Map zoom={8} center={position}></Map>
        <Marker position={position}></Marker>
      </div>
    </APIProvider>
  );
};

export default MarkMap;
