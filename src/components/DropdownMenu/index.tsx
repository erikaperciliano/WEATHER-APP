import React, { useContext, useState } from 'react'
import { DropdownMenuContext } from '../contexts/DropdownMenuContext'
import { MenuContainer, SelectContainer } from './styles';
import { DropdownMenuProps } from '../../@types/weatherData';



export function DropdownMenu({ onCityChange, selectedCity }: DropdownMenuProps) {
  const { cities } = useContext(DropdownMenuContext);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCityChange(e.target.value)
  }
  return (
    <MenuContainer>
      <SelectContainer value={selectedCity} onChange={handleCityChange}>
        {cities.map(city => (
            <option key={city}>{city}</option>
        ))}
      </SelectContainer>
    </MenuContainer>
  )
}
