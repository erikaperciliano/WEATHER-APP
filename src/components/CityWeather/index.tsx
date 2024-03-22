import React, { useEffect, useState } from 'react';
import { WeatherData } from '../../@types/weatherData';
import { TemperatureToggleTitle, TemperatureDegree } from '../TemperatureToggle/styles';
import { TemperatureToogle } from '../TemperatureToggle';
import rainningWeather from '../../assets/weather-raining.png';
import cloudyWeather from '../../assets/weather-cloudy.png';
import sunnyWeather from '../../assets/weather-sunny.png';

import { SunriseSunset } from '../SunriseSunset/indext';

interface CityWeatherProps {
    city: string;
}

export function CityWeather({ city }: CityWeatherProps) {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);

    useEffect(() => {
        fetchWeatherData(city); // Fetch weather data when the selected city changes
    }, [city]);

    const fetchWeatherData = async (city: string) => {
        try {
            const apiKey = 'a70623809fbb11329a78e7ebab0c9761';
            const apiUrl = new URL(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`);

            const response = await fetch(apiUrl);
            const data = await response.json();

            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    if (!weatherData) {
        return <div>Loading....</div>;
    }

    const { main, weather, sys } = weatherData;
    const { sunrise, sunset } = sys;

    const temperature = main.temp; // Access temp from main
    const icon = weather[0].icon; // Access icon from weather array
  

    // Mapping of weather condition codes to corresponding image URLs
     const weatherIcons = {
        '01': sunnyWeather,
        '02': cloudyWeather,
        '03': cloudyWeather,
        '04': cloudyWeather,
        '09': rainningWeather,
        '10': rainningWeather,
        '11': rainningWeather,
        '13': rainningWeather,
        '50': cloudyWeather,
    };

    const iconCode = icon.substring(0, 2) as keyof typeof weatherIcons; // Extracting the first two characters of the icon code
    console.log('iconCode: ', iconCode)
    const temperatureInCelsius = isCelsius
        ? temperature.toFixed(2).slice(0, 2)
        : ((temperature * 9) / 5 + 32).toFixed(2).slice(0, 2);

    // Convert Unix timestamps to JavaScript Date objects and format to HH:mm
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
            <TemperatureToggleTitle>{city}</TemperatureToggleTitle>
            <div>
                <img src={weatherIcons[iconCode]} alt="Weather Icon" />
                <TemperatureDegree>
                    {temperatureInCelsius} °{isCelsius ? 'C' : 'F'}
                </TemperatureDegree>
                <TemperatureToogle isCelsius={isCelsius} onToggle={toggleTemperatureUnit} />
            </div>
            <SunriseSunset sunrise={sunriseTime} sunset={sunsetTime} />
        </div>
    );
}
