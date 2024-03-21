import { createContext, ReactNode, useState } from "react";

interface DropdownMenuContextType {
    cities: string[];
    selectedCity: string;
    onSelect: (city: string) => void;
}

interface TransactionsProviderProps {
    children: ReactNode;
}



export const DropdownMenuContext = createContext({} as DropdownMenuContextType);

export function DropdownMenuProvider({ children }: TransactionsProviderProps){
    const cities = ['Lisbon', 'London', 'New York', ];
    const [selectedCity, setSelectedCity] = useState<string>('Lisbon');

    const onSelect = (city: string) => {
        setSelectedCity(city)
    }

    return (
        <DropdownMenuContext.Provider value={{ cities, selectedCity, onSelect }}>
            {children}
        </DropdownMenuContext.Provider>
    )
}