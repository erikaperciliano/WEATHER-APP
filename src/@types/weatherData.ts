
export interface MainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: WeatherCondition[];
    base: string;
    main: MainData;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}


export interface TemperatureToggle {
    isCelsius: boolean;
    onToggle: () => void;
}

export interface SunriseSunsetProps {
    sunrise: number | string;
    sunset: number | string;
}

export interface DropdownMenuProps {
    onCityChange: (city: string) => void;
    selectedCity: string;
}