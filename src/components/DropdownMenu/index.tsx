import React, { useContext, useState } from 'react'
import { DropdownMenuContext } from '../contexts/DropdownMenuContext'
import { MenuContainer, SelectContainer } from './styles';



export function DropdownMenu() {
    const { cities, selectedCity, onSelect } = useContext(DropdownMenuContext);

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value)
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
