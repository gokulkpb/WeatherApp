export interface WeatherData {
    id: string;
    location: string;
    country: string;
    current: CurrentWeather;
    forecast: Forecast[];
  }
  
  export interface CurrentWeather {
    temperature: number;
    humidity: number;
    wind_speed: number;
    condition: string;
    icon: string;
    pressure: number;
    sunrise: string;
    sunset: string;
  }
  
  export interface Forecast {
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    condition: string;
    humidity: number;
    wind_speed: number;
    icon: string;
  }
  