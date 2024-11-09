export type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: "°C" | "°F";
    weather_code: string;
  };
  current: {
    time: string; // ISO 8601 format, e.g., "2024-11-09T18:45"
    interval: number; // Time interval in seconds
    temperature_2m: number;
    weather_code: number; // Assuming WMO code is a numeric type
  };
};
