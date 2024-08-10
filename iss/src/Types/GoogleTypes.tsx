export type LatLng = {
  latitude: string;
  longitude: string;
};

export type LocationResponse = {
  iss_position: LatLng;
  timestamp: number;
  message: string;
};
