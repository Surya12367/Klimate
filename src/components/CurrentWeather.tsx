import type { GeocodingResponse, WeatherData } from "@/api/types";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }) => {
  return <div>Current Weather</div>;
};

export default CurrentWeather;
