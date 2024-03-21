import React from 'react'
import { TemperatureToggle } from '../../@types/weatherData';
import { ToggleButton } from './styles';



export function TemperatureToogle({ isCelsius, onToggle }: TemperatureToggle) {
  return (
    <ToggleButton onClick={onToggle}>Toggle</ToggleButton>
  )
}