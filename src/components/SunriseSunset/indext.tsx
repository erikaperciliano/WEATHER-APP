import React from 'react'
import { SunriseSunsetProps } from '../../@types/weatherData'
import { SunriseSunsetContainer } from './styles'

export function SunriseSunset({ sunrise, sunset }: SunriseSunsetProps) {
  return (
    <SunriseSunsetContainer>
        Sunrise: { sunrise }
        <br/>
        Sunset: { sunset }
    </SunriseSunsetContainer>
  )
}